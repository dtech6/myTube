import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": 'c440cb4f62msh5946f65302405f9p1a6ac7jsn346cd622257a',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};


export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}