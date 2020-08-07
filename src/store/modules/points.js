const state = {
  array: [],
  clip: false,
};

const getters = {
  getArray: (state) => state.array,
  getPosOne: (state) => state.array[0],
  getPosTwo: (state) => state.array[1],
  getClip: (state) => state.clip,
};

const actions = {
  addToArray({ commit }, value) {
    commit('setArray', value);
  },

  clipAction({ commit }) {
    commit('setClip');
  },
};

const mutations = {
  setArray: (state, value) => state.array.unshift(value),
  setClip: (state) => (state.clip = !state.clip),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
