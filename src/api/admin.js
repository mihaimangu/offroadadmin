import axios from "axios";

const root = "http://localhost:4000";

export const getList = () => {
    return axios.get(root + "/api/offroad-cars");
}

export const getSingleOffroadAd = (id) => {
    return axios.get(root + `/api/offroad-car?id=${id}`)
}