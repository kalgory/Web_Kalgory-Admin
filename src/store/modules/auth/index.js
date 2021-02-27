export default {
  state: {
    user: null,
  },

  getters: {
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    setUser(state, value) {
      state.user = value;
    },
  },
};
