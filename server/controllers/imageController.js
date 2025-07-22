import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import userModel from '../models/userModel.js';
import { error } from 'console';

// Function to remove background from an image
const removeBgImage = async (req, res) => {
    try {

        const clerkId = req.clerkId;

        console.log(clerkId);

        const user = await userModel.findOne({clerkId});

        if(!user){
            return res.json({success: false, message:'User not found!'})
        }

        if(user.creditBalance === 0){
            console.log(error.message)
            return res.json({success: false, message: 'No credit Balance:', creditBalance:user.creditBalance})
        }

        const imagePath = req.file.path;

        // reading the image file
        const imageFile = fs.createReadStream(imagePath)

        const formdata = new FormData();
        formdata.append('image_file', imageFile)

        const {data} = await axios.post('https://clipdrop-api.co/remove-background/v1', formdata, {
            headers:{
                'x-api-key': process.env.CLIPDROP_API
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64');

        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 25})

        res.json({success: true, resultImage, creditBalance: user.creditBalance - 25, message: 'Background removed'})
        
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });    
    }
}

export { removeBgImage };