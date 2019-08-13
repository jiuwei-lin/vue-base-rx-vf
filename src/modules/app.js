import axios from 'axios';

// EMR Authentication
const _EMR_URL = 'https://emr.kfsyscc.org';

const _APP_URL = 'http://localhost:8080';

// initial state
const state = {
  /**
   * Define User singup information.
   */
  user: null,
  singup: false
};

// getters
const getters = {
  user: () => state.user || ''
};

// actions
const actions = {
  signup({ commit }) {
    commit('SIGNUP');
  },
  logout({ commit }) {
    commit('LOGOUT');
  }
};

// mutations
const mutations = {
  SIGNUP(state) {
    axios
      .create({
        withCredentials: true //!!! very important
      })
      //'https://emr.kfsyscc.org/userinfo
      .get(`${_EMR_URL}/userinfo`)
      .then(resp => {
        if (resp.data.status == 'false') {
          window.location.href =
            //'https://emr.kfsyscc.org/signin/?next=http://172.21.42.3:8080/test';
            `${_EMR_URL}/signin/?next=${_APP_URL}`;
        } else {
          state.user = resp.data.user;
          state.signup = true;
        }
      })
      .catch(err => err);
  },
  LOGOUT(state) {
    state.user = null;
    state.signup = false;

    window.location.href = `${_EMR_URL}/logout/?next=${_APP_URL}`;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
