import * as axios from 'axios';
import { parseList } from './helpers';
import { API } from '../config';

const getMobbers = async function() {
  try {
    const response = await axios.get(`${API}/mobbers`);

    let data = parseList(response);

    const mobbers = data.map();
    return mobbers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const mobbers = {
  getMobbers,
};
