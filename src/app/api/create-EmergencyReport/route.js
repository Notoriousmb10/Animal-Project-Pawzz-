const connectToDatabase = require("../../database");
const {EmergencyReport} = require("../../model");


export const POST = async (req) => {
    try{
        await  connectToDatabase();

        const {advanceOptions, reportDetails, scheduledPickup} = await req.json();

        if (!advanceOptions || !reportDetails || !scheduledPickup) {
            console.error("Missing required fields");
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const newEmergencyReport = new EmergencyReport({
            advanceOptions,
            reportDetails,
            scheduledPickup,
        });
        const savedReport = await newEmergencyReport.save();
        console.log("New Emergency Report:", savedReport);

        return new Response(
            JSON.stringify({ message: "Emergency Report created successfully" }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

    }catch(err){
        console.error("Failed to create Emergency Report:", err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
