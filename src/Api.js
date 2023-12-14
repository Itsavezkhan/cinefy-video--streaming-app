import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGI0MjBiN2IxM2I0MjY4MjI1YTk1OTM1YzgzZjhkYSIsInN1YiI6IjY1M2EzMDU0ZWM0NTUyMDBlYTRkYzAxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fE_drPar1icDlOZOUbGO4IzGsI7iYlzvA42ZOXRGA8k";

const API_KEY = "58b420b7b13b4268225a95935c83f8da";

const headers = {
  Authorization: "bearer" + TMDB_TOKEN,
};

export const StandardFetchData = async (url, params) => {
  try {
    const res = await axios.get(BASE_URL + url + "api_key=" + API_KEY, {
      headers,
      params,
    });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
