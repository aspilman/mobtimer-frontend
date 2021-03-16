import { dataService } from '../../shared';
import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
} from '../mutation-types';

export const heroes = {
  async addHeroAction({ commit }, hero) {
    const addedHero = await dataService.addHero(hero);
    commit(ADD_HERO, addedHero);
  },
  async deleteHeroAction({ commit }, hero) {
    const deletedHeroId = await dataService.deleteHero(hero);
    commit(DELETE_HERO, deletedHeroId);
  },
  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
  async updateHeroAction({ commit }, hero) {
    const updatedHero = await dataService.updateHero(hero);
    commit(UPDATE_HERO, updatedHero);
  },
};
