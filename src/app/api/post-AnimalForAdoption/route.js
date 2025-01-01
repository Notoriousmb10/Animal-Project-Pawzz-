const connectToDatabase = require("../../database");
const { Adoption } = require("../../model");

export const POST = async (req) => {
    try {
        console.log("Connecting to database...");
        await connectToDatabase();
        console.log("Connected to database.");

        console.log("Parsing request body...");
        const adoptionDetails = await req.json();
        console.log("Request body parsed:", adoptionDetails);

        if (!adoptionDetails) {
            console.error("Missing required fields");
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        console.log("Creating new Adoption instance...");
        const adoption = new Adoption(adoptionDetails);
        console.log("Saving new Adoption...");
        const savedAdoption = await adoption.save();
        console.log("New Adoption saved:", savedAdoption);

        return new Response(
            JSON.stringify(savedAdoption),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

    } catch (error) {
        console.error("Failed to create Adoption:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
