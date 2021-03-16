import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
  ADD_VILLAIN,
  DELETE_VILLAIN,
  GET_VILLAINS,
  UPDATE_VILLAIN,
  GET_MOBBERS,
} from './mutation-types';

const getMutaions = {
  [ADD_HERO](state, hero) {
    state.heroes.unshift(hero); // mutable addition
  },
  [UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heroes.splice(index, 1, hero);
    state.heroes = [...state.heroes];
  },
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  [DELETE_HERO](state, heroId) {
    state.heroes = [...state.heroes.filter(p => p.id !== heroId)];
  },
  [ADD_VILLAIN](state, villain) {
    state.villains.unshift(villain); // mutable addition
  },
  [UPDATE_VILLAIN](state, villain) {
    const index = state.villains.findIndex(h => h.id === villain.id);
    state.villains.splice(index, 1, villain);
    state.villains = [...state.villains];
  },
  [GET_VILLAINS](state, villains) {
    state.villains = villains;
  },
  [DELETE_VILLAIN](state, villainId) {
    state.villains = [...state.villains.filter(p => p.id !== villainId)];
  },
  [GET_MOBBERS](state, mobbers) {
    state.mobbers = mobbers;
  },
};

export const mutations = {
  getMutaions,
};
