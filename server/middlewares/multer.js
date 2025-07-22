import multer from 'multer';

// use multer to handle file uploads
const storage = multer.diskStorage({
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

export default upload;