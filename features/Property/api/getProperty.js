import axios from "axios";

const BASE_URL = "https://bayut.p.rapidapi.com";
const HEADERS = {
  "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

export const getProperty = async (id) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/properties/detail`,
    params: { externalID: id },
    headers: HEADERS,
  };
  const { data } = await axios.request(options);
  return data;
};
