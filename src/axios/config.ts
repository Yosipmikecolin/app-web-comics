import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://comicvine.gamespot.com/api/episodes/",
  params: {
    api_key: process.env.API_KEY,
    filter: "name:Batman",
    limit: 10,
    format: "json",
  },
});
