import axios from "axios";

export const API_BASE_URL = "https://devnest-3ni6.onrender.com";


const api=axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Add a request interceptor to add the JWT token to every request
api.interceptors.request.use(
    (config) => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            config.headers.Authorization = `Bearer ${jwt.trim()}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;