import axios from "axios";


const isProduction = process.env.NODE_ENV === "production";
export const root = isProduction ?  "https://masinideteren.ro:4000" : "http://localhost:4000";

export const getList = () => {
    return axios.get(root + "/api/offroad-cars");
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