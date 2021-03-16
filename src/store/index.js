import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions/index';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = () => ({
  heroes: [],
  villains: [],
  mobbers: [],
});

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
