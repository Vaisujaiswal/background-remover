import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {

    try {

        const {token} = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        }
        // Verify the token

        const decord_token = jwt.decode(token);
        req.body.clerkId = decord_token.clerkId;

        next();

    } catch (error) {
        console.error("❌ Webhook Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }

}

export default userAuth;