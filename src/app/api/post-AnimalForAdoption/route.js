const connectToDatabase = require("../../database");
const { Adoption } = require("../../model");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});

export const config = {
  api: {
    bodyParser: false,
  },
};



export const POST = async (req) => {
  try {
    await connectToDatabase();

    const adoptionDetails = await req.body.adoptionDetails;
    const images = await req.files;

    if (!adoptionDetails) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

       
    const adoptionDetailsJson = JSON.parse(adoptionDetails);
    const imageBase64 = images.map((file) => file.buffer.toString("base64"));
    adoptionDetailsJson.images = imageBase64;
    const newAdoption = new Adoption(adoptionDetailsJson);
    const savedAdoption = await newAdoption.save();


    return new Response(JSON.stringify(savedAdoption), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create Adoption:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
