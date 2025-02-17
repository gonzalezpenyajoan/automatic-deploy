import * as apiModel from './api';
import * as viewModel from './house.vm';

export const mapHouseFromApiToVM = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  name: house.name,
  image: house.image,
  description: house.description,
  address: house.address,
  beds: house.beds,
  bathrooms: house.bathrooms,
  latest_reviews: house.latest_reviews
});

export const mapHouseFromVMToApi = (house: viewModel.House): apiModel.House => {
  return {
    id: house.id,
    name: house.name,
    image: house.image,
    description: house.description,
    address: house.address,
    beds: house.beds,
    bathrooms: house.bathrooms,
    latest_reviews: house.latest_reviews
  };
};
