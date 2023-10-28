import axios from "axios";
export const useAxios = () => {
  const baseURL = "https://rickandmortyapi.com/api";

  return axios.create({
    baseURL,
    headers: {
      common: {},
    },
  });
};
