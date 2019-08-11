// initial state
const state = {
  /**
   * Define User singup information.
   */
  user: ['I am the king of the world']
};

// getters
const getters = {
  user: state => {
    return state.user;
  }
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
