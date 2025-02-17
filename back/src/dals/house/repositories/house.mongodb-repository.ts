import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";
import { getHouseContext } from "../house.context.js";

export const mongoDBRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    return await getHouseContext()
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
  },
  getHouse: async (id: string) => {
    return await getHouseContext().findOne({_id: id})
  },
  saveHouse: async (house: House) => {
    return await getHouseContext()
      .findOneAndUpdate(
        { _id: house._id },
        { $set: house },
        {
          upsert: true,
          returnDocument: 'after'
        }
      );
  },
  deleteHouse: async (id: string) => {
    const { deletedCount } = await getHouseContext().deleteOne({_id: id});
    return deletedCount === 1;
  },
  postReview: async (id: string, review) => {
    const { reviews } =  await getHouseContext().findOneAndUpdate(
      { _id: id },
      {
        $push: {
          reviews: {
            _id: id,
            date: new Date(),
            ...review
          }
        }
      },
      {
        upsert: true,
        returnDocument: 'after'
      }
    );
    return reviews.find((r) => r._id === id);
  },
  updateHouse: async (house: House) => {
    return await getHouseContext().findOneAndUpdate(
      { _id: house._id },
      { $set: house },
      { returnDocument: 'after' }
    )
  }
};