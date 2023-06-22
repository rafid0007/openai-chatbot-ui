import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_ENDPOINT;

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Create an Axios instance
export const chatApiClient = axios.create();