import axios from "axios";

const BASE_URL = "https://bayut.p.rapidapi.com";
const HEADERS = {
  "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
};

export const getProperties = async (num) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/properties/list`,
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-sale",
      hitsPerPage: num,
      lang: "en",
      sort: "city-level-score",
      hasVideo: true,
      hasFloorPlan: true,
      hasPanorama: true,
    },
    headers: HEADERS,
  };
  const { data } = await axios.request(options);
  return data.hits;
};
