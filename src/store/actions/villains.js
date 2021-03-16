import { dataService } from '../../shared';
import {
  ADD_VILLAIN,
  DELETE_VILLAIN,
  GET_VILLAINS,
  UPDATE_VILLAIN,
} from '../mutation-types';

export const villains = {
  async addVillainAction({ commit }, villain) {
    const addedVillain = await dataService.addVillain(villain);
    commit(ADD_VILLAIN, addedVillain);
  },
  async deleteVillainAction({ commit }, villain) {
    const deletedVillainId = await dataService.deleteVillain(villain);
    commit(DELETE_VILLAIN, deletedVillainId);
  },
  async getVillainsAction({ commit }) {
    const villains = await dataService.getVillains();
    commit(GET_VILLAINS, villains);
  },
  async updateVillainAction({ commit }, villain) {
    const updatedVillain = await dataService.updateVillain(villain);
    commit(UPDATE_VILLAIN, updatedVillain);
  },
};
