export const getters = {
  // parameterized getters are not cached. so this is just a convenience to get the state.
  getHeroById: state => id => state.heroes.find(h => h.id === id),
  getVillainById: state => id => state.villains.find(v => v.id === id),
};
