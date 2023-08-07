import axios from "axios";
import Cookies from 'js-cookie';


const isProduction = process.env.NODE_ENV === "production";
export const root = isProduction ?  "https://masinideteren.ro:4000" : "http://localhost:4000";

export const getList = (settings) => {
    return axios.get(root + "/api/offroad-cars", { params: settings });
}

export const getSingleOffroadAd = (id) => {
    return axios.get(root + `/api/offroad-car?id=${id}`)
}

export const getSingleOffroadAdImages = (id) => {
    return axios.get(root + `/api/offroad-car/images?id=${id}`)
}

export const scrapeSingleOffroadAd = (id) => {
    return axios.post(root + '/api/scrape-offroad-car-ad', {
        id
    })
}

export const getTranslations = () => {
    // the expected response data is an object containing a key named "translations".
    // the translations object is a simple object containing key and values. 

    return axios.get(root + "/api/translations");
}

export const getFilters = () => {
    return axios.get(root + "/api/filters");
}

// Jobs Section

//get jobs
export const getAllCrawlJobs = () => {
    return axios.get(root + "/api/crawl-jobs");
}

export const addCrawlJob = (name, url) => {
    const requestBody = {
        name,
        url
    }

    return axios.post(root + " /api/crawl-jobs", requestBody);
}

export const login = (username, password) => {
    const requestBody = {
        username,
        password
    }

    return axios.post(root + "/api/login", requestBody);
}

export const checkPrivateRoute = () => {
    // token is a JWT token, use that as bearer
    // get the token from cookies
    const token = Cookies.get('token');

    return axios.get(root + "/api/protected", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}