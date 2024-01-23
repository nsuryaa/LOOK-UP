import got from 'got'; // if you don't have "got" - install it with "npm install got"
import { createReadStream } from 'fs';
import FormData from 'form-data';

const apiKey = 'acc_f8e851f4f4167f0';
const apiSecret = 'f56422c4aab6ab2251e51ac2d7e3e295';

const filePath = 'jpg/6.jpg';
const formData = new FormData();
formData.append('image', createReadStream(filePath));

(async () => {
    try {
        const response = await got.post('https://api.imagga.com/v2/uploads', {body: formData, username: apiKey, password: apiSecret});
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);
    }
})();