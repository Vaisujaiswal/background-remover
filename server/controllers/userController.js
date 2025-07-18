import { Webhook } from "svix"
import userModel from "../models/userModel.js";

// API controller function to handle clerk user database operations
// http://localhost:3000/api/user/webhook

const webhook = async (req, res) => {

    try {
        // create a new webhook instance with the secret
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        // verify the request body
        await webhook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature']
        });

        const {data, type} = req.body;
        // handle the event based on its type

        switch (type) {
            case "user.created":{
                // handle user creation

                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                }

                // import userModel from the user model

                userModel.create(userData)
                res.json({});

                break;
            }
            case "user.updated": {

                // handle user update
                const userData = {  
                    email: data.email_addresses[0].email_address,
                    photo: data.image_url,
                    firstName: data.first_name,
                    lastName: data.last_name,
                }

                // update the user in the database
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
                res.json({});
                
                break;
            }
            case "user.deleted": {

                // handle user deletion
                await userModel.findOneAndDelete({ clerkId: data.id });
                res.json({});

                
                break;
            }
            default: break;
        }

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false, message: error.message})
    }
}

export { webhook };