import axios from "axios";

const domain = "http://localhost:4000";

export const getList = () => {
    return axios.get(domain + "/api/offroad-cars");
}