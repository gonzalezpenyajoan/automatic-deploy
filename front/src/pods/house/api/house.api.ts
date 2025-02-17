import axios from 'axios';
import { House } from './house.api-model';

const baseUrl = '/api/houses';

export const getHouse = async (id: string): Promise<House> => {
  const { data } = await axios.get<House>(`${baseUrl}/${id}`);

  return data;
};

export const saveHouse = async (house: House): Promise<House> => {
  if (house.id) {
    await axios.put(`${baseUrl}/${house.id}`, house);
  } else {
    const { data } = await axios.post<House>(baseUrl, house);
    return data;
  }
};
