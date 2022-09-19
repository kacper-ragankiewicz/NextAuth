import axios from 'axios';

const baseURL = `https://api.publicapis.org`;

// console.log(process.env.ACCESS_TOKEN)

export default axios.create({
    baseURL,
})