import * as apiModel from './api';
import * as viewModel from './house-list.vm';

const mapHouseFromApiToVM = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  name: house.name,
  image: house.image,
  description: house.description,
  address: house.address,
  beds: house.beds,
  bathrooms: house.bathrooms,
  latest_reviews: house.latest_reviews
});

export const mapHouseListFromApiToVM = (
  houseList: apiModel.House[]
): viewModel.House[] =>
  Array.isArray(houseList) ? houseList.map(mapHouseFromApiToVM) : [];
