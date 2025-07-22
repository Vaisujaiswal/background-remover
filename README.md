# 🖼️ AI Background Remover – MERN Stack Project

This full-stack AI Background Remover lets users upload an image, removes the background using the ClipDrop API, and allows download. It includes authentication, a credit system, and payment integration.

## 🚀 Live Demo

🔗 [Try the Live App](https://legendary-pavlova-d15b21.netlify.app/)

---

## 📦 Tech Stack

### 🌐 Frontend
- React.js (Vite)
- Tailwind CSS
- Clerk Authentication
- Axios
- React Router, Toastify

### 🖥️ Backend
- Node.js + Express
- MongoDB + Mongoose
- Multer (file upload)
- ClipDrop API
- JWT, Dotenv, CORS

## 📌 Features

- 🧠 Background Removal using AI (ClipDrop API)
- 🔐 User Authentication with Clerk
- ⚡ Credits system for limited usage
- 📦 Fully deployed backend & frontend

---
  

1️⃣ Clone the Repository

```
git clone https://github.com/Vaisujaiswal/background-remover.git
```
2️⃣ Backend Setup (Server)

```
cd server
npm install
```

- Create .env file in /server folder:
  
```
  PORT=3000
  MONGODB_URI=your_mongodb_uri
  CLERK_SECRET_KEY=your_clerk_secret
  CLIPDROP_API_KEY=your_clipdrop_key
```

- Run backend locally:

```
  npm run server
```

- Your backend should now run at http://localhost:3000

3️⃣ Frontend Setup (Client)

```
cd ../client
npm install
```

- Create .env file in /client:

 ```
  VITE_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
  VITE_BACKEND_URL=http://localhost:3000
```

- Start frontend:

```
npm run dev
```

- App runs at http://localhost:5173

---

## 🌐 Deployment

- Frontend: Deploy /client to Netlify

- Backend: Deploy /server to Render




