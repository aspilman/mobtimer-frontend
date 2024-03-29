import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';

import { mobbers } from './data/mobbers';
import { parseList, parseItem } from './data/helpers';

const getHeroes = async function() {
  try {
    const response = await axios.get(`${API}/heroes`);

    let data = parseList(response);

    const heroes = data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      h.fullName = `${h.firstName} ${h.lastName}`;
      return h;
    });
    return heroes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getHero = async function(id) {
  try {
    const response = await axios.get(`${API}/heroes/${id}`);
    let hero = parseItem(response, 200);
    hero.fullName = `${hero.firstName} ${hero.lastName}`;
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateHero = async function(hero) {
  try {
    const response = await axios.put(`${API}/heroes/${hero.id}`, hero);
    const updatedHero = parseItem(response, 200);
    return updatedHero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addHero = async function(hero) {
  try {
    const response = await axios.post(`${API}/heroes`, hero);
    const addedHero = parseItem(response, 201);
    return addedHero;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteHero = async function(hero) {
  try {
    const response = await axios.delete(`${API}/heroes/${hero.id}`);
    parseItem(response, 200);
    return hero.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getVillains = async function() {
  try {
    const response = await axios.get(`${API}/villains`);
    let data = parseList(response);
    const villains = data.map(v => {
      v.originDate = format(v.originDate, inputDateFormat);
      v.fullName = `${v.firstName} ${v.lastName}`;
      return v;
    });
    return villains;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getVillain = async function(id) {
  try {
    const response = await axios.get(`${API}/villains/${id}`);
    let villain = parseItem(response, 200);
    villain.fullName = `${villain.firstName} ${villain.lastName}`;
    return villain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateVillain = async function(villain) {
  try {
    const response = await axios.put(`${API}/villains/${villain.id}`, villain);
    const updatedVillain = parseItem(response, 200);
    return updatedVillain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addVillain = async function(villain) {
  try {
    const response = await axios.post(`${API}/villains`, villain);
    const addedVillain = parseItem(response, 201);
    return addedVillain;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteVillain = async function(villain) {
  try {
    const response = await axios.delete(`${API}/villains/${villain.id}`);
    parseItem(response, 200);
    return villain.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const dataService = {
  mobbers,
  getHeroes,
  getHero,
  updateHero,
  addHero,
  deleteHero,
  getVillains,
  getVillain,
  updateVillain,
  addVillain,
  deleteVillain,
};
