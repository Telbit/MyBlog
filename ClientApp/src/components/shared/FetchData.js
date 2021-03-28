import axios from "axios";

export default async function fetchData(url, data) {
    const response = (typeof data === "undefined" ? await axios(url) : await axios.post(url, data));
    return response.data;
}
