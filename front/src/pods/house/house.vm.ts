export interface Review {
  _id: string;
  date: Date;
  listing_id: string;
  reviewer_id: string;
  reviewer_name: string;
  comments?: string;
}

export interface House {
    id: string;
    name: string;
    image: string;
    description: string;
    address: string;
    beds: Number;
    bathrooms: Number;
    latest_reviews: Review[];
}

export const createEmptyHouse = (): House => ({
    id: undefined,
    name: '',
    image: '',
    description: '',
    address: '',
    beds: undefined,
    bathrooms: undefined,
    latest_reviews: []
});
