import React from 'react'
import axios from 'axios';
export const BASE_URL = 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/';

const Getapi = async(url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
}

export default Getapi