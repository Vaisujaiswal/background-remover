import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log("🔑 Raw token:", token); 

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const decoded_token = jwt.decode(token);

    

    if (!decoded_token || !decoded_token.sub) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    // ✅ Store safely
    req.clerkId = decoded_token.sub;

    next();
  } catch (error) {
    console.error("❌ Auth Middleware Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default userAuth;









