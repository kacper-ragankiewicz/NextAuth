import axios from 'axios';

export { api }

const baseURL = `https://api.publicapis.org`;

// console.log(process.env.ACCESS_TOKEN)

const api = axios.create({
    baseURL,
})