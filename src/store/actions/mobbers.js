import { dataService } from '../../shared';
import {
  ADD_MOBBERS,
  DELETE_MOBBERS,
  UPDATE_MOBBERS,
  GET_MOBBERS,
} from '../mutation-types';

export const mobbers = {
  async addHeroAction({ commit }, hero) {
    const addedHero = await dataService.addHero(hero);
    commit(ADD_MOBBERS, addedHero);
  },
  async deleteHeroAction({ commit }, hero) {
    const deletedHeroId = await dataService.deleteHero(hero);
    commit(DELETE_MOBBERS, deletedHeroId);
  },
  async getMobbersAction({ commit }) {
    const mobbers = await dataService.getMobbers();
    commit(GET_MOBBERS, mobbers);
  },
  async updateHeroAction({ commit }, hero) {
    const updatedHero = await dataService.updateHero(hero);
    commit(UPDATE_MOBBERS, updatedHero);
  },
};
