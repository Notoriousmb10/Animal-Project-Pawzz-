import { connectToDatabase } from "../../database";
import { Adoption } from "../../model";
import multer from "multer";
import { GridFSBucket } from "mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req) => {
  try {
    await connectToDatabase();

    return new Promise((resolve, reject) => {
      upload.array("images")(req, {}, async (err) => {
        if (err) {
          console.error(err);
          return reject(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
        }

        if (!req.body.adoptionDetails) {
          return resolve(NextResponse.json({ error: "adoptionDetails is required" }, { status: 400 }));
        }

        let adoptionDetails;
        try {
          adoptionDetails = JSON.parse(req.body.adoptionDetails);
        } catch (e) {
          return resolve(NextResponse.json({ error: "Invalid JSON in adoptionDetails" }, { status: 400 }));
        }

        const files = req.files;
        const fileIds = [];
        const bucket = new GridFSBucket(mongoose.connection.db, {
          bucketName: "adoptionImages",
        });

        for (let file of files) {
          const uploadStream = bucket.openUploadStream(file.originalname, {
            contentType: file.mimetype,
          });

          uploadStream.end(file.buffer);
          fileIds.push(uploadStream.id);
        }

        adoptionDetails.images = fileIds;
        const newAdoption = new Adoption(adoptionDetails);
        const savedAdoption = await newAdoption.save();

        return resolve(NextResponse.json(savedAdoption, { status: 200 }));
      });
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
