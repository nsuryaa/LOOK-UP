import got from 'got'; // if you don't have "got" - install it with "npm install got"

const apiKey = 'acc_f8e851f4f4167f0';
const apiSecret = 'f56422c4aab6ab2251e51ac2d7e3e295';

const image_upload_id = 'i059e1158a9237f5343f0ee897GfFmNR';
const return_face_id = 1;
const url = 'https://api.imagga.com/v2/faces/detections?image_upload_id=' + image_upload_id+'&return_face_id=1';

(async () => {
    try {
        const response = await got(url,{username: apiKey, password: apiSecret});
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);
    }
})(); 