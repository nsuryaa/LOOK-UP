import got from 'got'; // if you don't have "got" - install it with "npm install got"

const apiKey = 'acc_f8e851f4f4167f0';
const apiSecret = 'f56422c4aab6ab2251e51ac2d7e3e295';

const faceId = 'db448bb51b375865bffcd615965478c9b479265ef68ff50209058e7a5670d5b0';
const secondFaceId = 'dabbbab2c20f8f663bfbeed979711b2ce920e4e7b827d86f5a17719ea8ec87bb';

const url = 'https://api.imagga.com/v2/faces/similarity?face_id=' + faceId + '&second_face_id=' + secondFaceId;

(async () => {
    try {
        const response = await got(url, {username: apiKey, password: apiSecret});
        console.log(response.body);
    } catch (error) {
        console.log(error.response.body);
    }
})();