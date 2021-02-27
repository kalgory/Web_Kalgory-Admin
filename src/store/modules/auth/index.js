export default {
  state: {
    isAuthLoading: true,
    user: null,
  },

  getters: {
    getIsAuthLoading(state) {
      return state.isAuthLoading;
    },
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    setIsAuthLoading(state, value) {
      state.isAuthLoading = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
};
