import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://us-central1-clone-4d1eb.cloudfunctions.net/api"
    // baseURL: "http://localhost:5001"
    // baseURL:"http://127.0.0.1:5001/clone-4d1eb/us-central1/api"
});


export {axiosInstance}