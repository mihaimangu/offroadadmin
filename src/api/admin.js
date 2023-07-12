import axios from "axios";


const isProduction = process.env.NODE_ENV === "production";
const root = isProduction ?  "https://masinideteren.ro:4000" : "http://localhost:4000";

export const getList = () => {
    return axios.get(root + "/api/offroad-cars");
}

export const getSingleOffroadAd = (id) => {
    return axios.get(root + `/api/offroad-car?id=${id}`)
}

export const scrapeSingleOffroadAd = (id) => {
    return axios.post(root + '/api/scrape-offroad-car-ad', {
        id
    })
}