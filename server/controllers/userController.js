import { Webhook } from "svix"
import userModel from "../models/userModel.js"

const webhook = async (req, res) => {
  try {
    const payload = req.body; // raw buffer
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers); // verified payload
    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        await userModel.create(userData);
        console.log("✅ User saved:", userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        console.log("✅ User updated:", data.id);
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        console.log("🗑️ User deleted:", data.id);
        break;
      }

      default:
        console.log("ℹ️ Unhandled webhook type:", type);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

export { webhook };
