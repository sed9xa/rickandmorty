import { defineStore } from "pinia";
const axios = useAxios();
export const useStore = defineStore("characters", {
  state: () => {
    return {
      characters: null,
      query: {
        status: "",
        name: "",
      },
    };
  },
  getters: {
    get_query: (state) => {
      let queryNames = Object.keys(state.query);
      let queryString = `?`;
      for (let i = 0; i < queryNames.length; i++) {
        if (state.query[queryNames[i]]) {
          queryString += queryNames[i] + "=" + state.query[queryNames[i]] + "&";
        }
      }
      return queryString;
    },
  },
  actions: {
    async fetchFilteredCharacters() {
      let filteredCharacters = await axios.get(`https://rickandmortyapi.com/api/character${this.get_query}`)
      this.characters = filteredCharacters.data
      return filteredCharacters.data
    },
  },
});
