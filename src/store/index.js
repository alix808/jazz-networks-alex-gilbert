import Vuex from 'vuex';
import Vue from 'vue';
import points from './modules/points';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    points,
  },
});
