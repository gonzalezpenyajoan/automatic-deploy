import axios from 'axios';
import { House } from './house-list.api-model';

const baseUrl = '/api/houses';

export const getHouseList = async (): Promise<House[]> => {
  const { data } = await axios.get<House[]>(baseUrl);

  return data;
};

export const deleteHouse = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`);
};
