import axios from "axios";

export default async function fetchData(url, callback) {
  const response = await axios(url);
  callback(response.data);
}
