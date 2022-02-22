import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    posts: [],
  }),
  getters: {
    getPost: (state) => (id) => {
      return state.posts.find((post) => post.id === Number(id));
    },
  },
  mutations: {
    setPosts(state, data) {
      state.posts = data;
    },
  },
  actions: {
    async getAllPost({ commit }) {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      commit("setPosts", res.data);
    },
  },
});

export default store;
