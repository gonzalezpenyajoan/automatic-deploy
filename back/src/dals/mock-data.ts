import { House } from "./house/house.model.js";
import { User } from "./user/user.model.js";
import { ObjectId } from "mongodb";
import { createId } from "#common/helpers/id.helper.js";

export interface DB {
  users: User[];
  houses: House[];
}

export const db: DB = {
    users: [
      {
        _id: new ObjectId(),
        email: 'admin@email.com',
        password: 'test',
        role: 'admin',
        avatar: '/admin-avatar.png'
      },
      {
        _id: new ObjectId(),
        email: 'standard@email.com',
        password: 'test',
        role: 'standard-user',
        avatar: '/user-avatar.png'
      }
    ],
    houses: [
        {
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/16893365",
            name: "Sophisticated, waterfront living w/ resort pool, hot tub, & beach access",
            summary: "This property is a 1364  square feet,  3 Bedroom, 2 bathroom accommodation located in Kaanapali.  Sophisticated, waterfront living w/ resort pool, hot tub, & beach access offers 1 Sofa bed, 2 Twin bed, 2 King bed. It can host 8 people.  This accommodation features washer/dryer. Please see the description below or inquire for more details!",
            space: "Aloha! Get ready to host your next big family gathering or holiday celebration at this luxurious oceanside resort condo with updated amenities, private lanai, resort pool and hot tub, and convenient beach access. This three-bedroom rental is at one of Maui’s most popular beachfront resorts, Kaanapali Shores, located right on North Kaanapali Beach. Spend your days in paradise snorkeling and surfing in the crystal clear waters (parking is available at the resort for a daily fee*). Luxurious, spacious, and oh so sophisticated, this fourth-floor oceanfront condo is a magical Maui destination featuring plenty of essential conveniences. With panoramic ocean views that are thoroughly jaw-dropping, you'll have a front-row seat to stunning sunsets and seasonal whale watching. Step through the front door and into a sunlit and airy great room with 20-foot cathedral ceilings, plush rattan-framed furniture, and sliding door access out to the private lanai. The living area has a sofa and two matchin",
            description: "This property is a (Phone number hidden by Airbnb) square feet,  3 Bedroom, 2 bathroom accommodation located in Kaanapali.  Sophisticated, waterfront living w/ resort pool, hot tub, & beach access offers 1 Sofa bed, 2 Twin bed, 2 King bed. It can host 8 people.  This accommodation features washer/dryer. Please see the description below or inquire for more details! Aloha! Get ready to host your next big family gathering or holiday celebration at this luxurious oceanside resort condo with updated amenities, private lanai, resort pool and hot tub, and convenient beach access. This three-bedroom rental is at one of Maui’s most popular beachfront resorts, Kaanapali Shores, located right on North Kaanapali Beach. Spend your days in paradise snorkeling and surfing in the crystal clear waters (parking is available at the resort for a daily fee*). Luxurious, spacious, and oh so sophisticated, this fourth-floor oceanfront condo is a magical Maui destination featuring plenty of essential convenie",
            neighborhood_overview: "",
            notes: "",
            transit: "",
            access: "",
            interaction: "",
            house_rules: "- The responsible renter must be at least 21 years of age to book. Guests under 21 must be accompanied by a parent or legal guardian for the duration of the reservation. - No dog(s) are welcome in this home. No other animals are allowed without specific Vacasa approval. - The property shall not be used by more than the number of adults and children listed in your reservation. - All guests shall abide by Vacasa’s good neighbor policy and shall not engage in illegal activity. Quiet hours are from 10 p.m. to 8 a.m. - If early check-in is available for your reservation, you will be notified by 9am on the morning of your arrival by email. Late check-out is offered whenever possible for a small fee. - No smoking of any kind is permitted anywhere on the premises. - No commercial photography or filming is permitted on the property. Tents or other structures may not be erected. - Renter is liable for any damage to the property and agrees to accept charges to the card on file should damage occur",
            property_type: "Condominium",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "2",
            maximum_nights: "180",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            first_review: new Date("2017-09-04T04:00:00.000Z"),
            last_review: new Date("2019-02-20T05:00:00.000Z"),
            accommodates: 8,
            bedrooms: 3,
            beds: 5,
            number_of_reviews: 9,
            bathrooms: 2.0,
            amenities: [
                "TV",
                "Cable TV",
                "Wifi",
                "Air conditioning",
                "Pool",
                "Kitchen",
                "Free parking on premises",
                "Gym",
                "Hot tub",
                "Washer",
                "Dryer",
                "Essentials",
                "Shampoo",
                "Lock on bedroom door",
                "Hair dryer",
                "Iron",
                "Laptop friendly workspace",
                "Self check-in",
                "Lockbox",
                "Private entrance",
                "Hot water",
                "Microwave",
                "Coffee maker",
                "Refrigerator",
                "Dishes and silverware",
                "Oven",
                "Stove",
                "BBQ grill",
                "Patio or balcony",
                "Waterfront"
            ],
            price: 692.00,
            security_deposit: 0.00,
            cleaning_fee: 257.00,
            extra_people: 0.00,
            guests_included: 1,
            images: {
                thumbnail_url: "",
                medium_url: "",
                picture_url: "https://a0.muscache.com/im/pictures/9838338f-49db-478d-81fa-7595c0116dd2.jpg?aki_policy=large",
                xl_picture_url: ""
            },
            host: {
                host_id: createId(),
                host_url: "https://www.airbnb.com/users/show/111808435",
                host_name: "Vacasa",
                host_location: "US",
                host_about: "Greetings from Team Vacasa Vacation Rentals of Hawaii, LLC! Yes, we're a professional property management company—but we're also real people, trusted by the owners of vacation homes to take care of all the heavy lifting like housekeeping, reservations, maintenance, and guest care. (Because, to be honest, renting out a vacation home really can be a full-time job!)\r\n\r\n\r\nWe have local teams on the ground to take care of our homes and our guests. We like to think of it as the best of both worlds: you can enjoy a one-of-a-kind vacation experience in a unique property, only without compromising on service and convenience. You can trust that your home will be cleaned by professional housekeepers, and your calls will be answered (right away, around the clock!) by our dedicated Guest Services team. \r\n\r\n\r\nCheck out our listings, and if you have any questions, get in touch! We'd love to help you plan your perfect getaway.",
                host_response_time: "within an hour",
                host_thumbnail_url: "https://a0.muscache.com/im/pictures/user/8c788d94-a155-4d24-8b27-436a36da70a0.jpg?aki_policy=profile_small",
                host_picture_url: "https://a0.muscache.com/im/pictures/user/8c788d94-a155-4d24-8b27-436a36da70a0.jpg?aki_policy=profile_x_medium",
                host_neighbourhood: "Kaanapali",
                host_response_rate: 82,
                host_is_superhost: false,
                host_has_profile_pic: true,
                host_identity_verified: false,
                host_listings_count: 226,
                host_total_listings_count: 226,
                host_verifications: [
                    "email",
                    "phone",
                    "reviews",
                    "work_email"
                ]
            },
            address: {
            street: "Lahaina, HI, United States",
            suburb: "Maui",
            government_area: "Lahaina",
            market: "Maui",
            country: "United States",
            country_code: "US",
            location: {
                type: "Point",
                coordinates: [
                    -156.68821,
                    20.94855
                ],
                is_location_exact: false
                }
            },
            availability: {
                availability_30: 0,
                availability_60: 8,
                availability_90: 22,
                availability_365: 223
            },
            review_scores: {
                review_scores_accuracy: 10,
                review_scores_cleanliness: 10,
                review_scores_checkin: 9,
                review_scores_communication: 10,
                review_scores_location: 10,
                review_scores_value: 9,
                review_scores_rating: 96
            },
            reviews: [
                {
                    _id: createId(),
                    date: new Date("2017-09-04T04:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "Li",
                    comments: "This place has the best ocean view you can imagine. Beach is in downstairs, and you can watch sunset from the balcony. The facility is clean and well managed. As a matter of fact, the place is offered and maintained by a company."
                },
                {
                    _id: createId(),
                    date: new Date("2018-06-23T04:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "James",
                    comments: "Very, very convenient, delivered exactly what we wanted,  comfortable."
                },
                {
                    _id: createId(),
                    date: new Date("2018-07-11T04:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "Chris",
                    comments: "Great place, great view, highly recommend!!!"
                },
                {
                    _id: createId(),
                    date: new Date("2018-11-10T05:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "Julia",
                    comments: "We had a wonderful stay at Vacasa’s space. The location is perfect- looking out at the ocean and right above a beach perfect for kids. It was great to have access to the two pools as well and towel service. We stayed here with two families with kids and the space worked well. The only thing that I would have added would have been the option for a daily cleaning service, but we also didn’t ask so perhaps it is available. Would definitely stay here again!"
                },
                {
                    _id: createId(),
                    date: new Date("2018-11-22T05:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "Ali",
                    comments: "This place has the amenities of a resort without the \"all inclusive/resort\" feel. It is a beautiful grounds, and you can do you own thing, or join in the resort. We had 3 couples staying in the place and it was plenty large enough for everyone. Absolutely stunning view that did not disappoint!"
                },
                {
                    _id: createId(),
                    date: new Date("2018-11-26T05:00:00.000Z"),
                    listing_id: createId(),
                    reviewer_id: createId(),
                    reviewer_name: "Jonas",
                    comments: "Beautiful apartment with ocean view in an amazing location right at the beach."
                }
            ]
        },
        {
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/1704560",
            name: "Beautiful/Spacious 1 Bedroom in LES",
            summary: "",
            space: "I am renting out space in extremely spacious apartment located in the heart of the Lower East Side. The apartment is in a new construction building with all modern amenities, including an elevator, air conditioning, washer/dryer,  and access to the building's shared rooftop with stunning views of lower Manhattan. The apartment can accomedate up to 5 guests. Please PLEASE \"CONTACT HOST\" TO INQUIRE ABOUT AVAILABILITY OF DATES & DETAILS OF THE SPACE BEING OFFERED BEFORE \"REQUESTING TO BOOK.\" THANKS! The building is located on a quiet street just steps away from all the restaurants, cafes, bars and shopping the Lower East Side has to offer. A 5 Minute walk to Nolita/Soho, Chinatown as well as the East Village. A less than 5 minute walk to the F and B/D subway lines. As well as the JMZ which is just one stop from Brooklyn. Steps away from the Williamsburg Bridge which offers easy access to the heart of Williamsburg. The apartment itself is extremely bright, with over-sized windows overlooki",
            description: "I am renting out space in extremely spacious apartment located in the heart of the Lower East Side. The apartment is in a new construction building with all modern amenities, including an elevator, air conditioning, washer/dryer,  and access to the building's shared rooftop with stunning views of lower Manhattan. The apartment can accomedate up to 5 guests. Please PLEASE \"CONTACT HOST\" TO INQUIRE ABOUT AVAILABILITY OF DATES & DETAILS OF THE SPACE BEING OFFERED BEFORE \"REQUESTING TO BOOK.\" THANKS! The building is located on a quiet street just steps away from all the restaurants, cafes, bars and shopping the Lower East Side has to offer. A 5 Minute walk to Nolita/Soho, Chinatown as well as the East Village. A less than 5 minute walk to the F and B/D subway lines. As well as the JMZ which is just one stop from Brooklyn. Steps away from the Williamsburg Bridge which offers easy access to the heart of Williamsburg. The apartment itself is extremely bright, with over-sized windows overlooki",
            neighborhood_overview: "",
            notes: "",
            transit: "The apartment is located in extremely close proximity to 4 major subway stations. 3 Blocks from the 2nd Ave. F Train Station 4 Blocks from the Bowery J Train Station 4 Block to the Grand Street B/D Train Station 5 Blocks to the Delancey Street M/Z Station They are all a 5 minute walk from door to door.",
            access: "",
            interaction: "",
            house_rules: "I have recently added the Instantbook feature to this listing.  I AM NOT ABLE TO HOST GROUPS HOPING TO PARTY  OR HOST EVENTS IN THE APARTMENT! Please take note that the official check-in time of the apartment is 3pm and the check-out time is 12pm.  I am always glad to accomedate an earlier check-in or a later check-out if the apartment's calendar allow. Please send me a message to discuss potential options. Until I have confirmed via a personal message, please understand that an early check-in or late check-out is not possible. I charge $25/night for each additional guest after the first. The $25/night charge includes children under 2 years old.  I always like to know a bit about my guests before hosting them. Please make sure you have filled out your profile to include some details about yourself.  When confirming your booking, please include a message describing the nature of your trip and who you will be traveling with.  I want to make sure that all potential guests understand that ",
            property_type: "Apartment",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "4",
            maximum_nights: "1125",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-03-07T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-07T05:00:00.000Z"),
            first_review: new Date("2013-10-09T04:00:00.000Z"),
            last_review: new Date("2018-12-30T05:00:00.000Z"),
            accommodates: 5,
            bedrooms: 1,
            beds: 1,
            number_of_reviews: 169,
            bathrooms: 1,
            amenities: [
              "Internet",
              "Wifi",
              "Air conditioning",
              "Kitchen",
              "Elevator",
              "Buzzer/wireless intercom",
              "Heating",
              "Family/kid friendly",
              "Washer",
              "Dryer",
              "Smoke detector",
              "Carbon monoxide detector",
              "Essentials",
              "Shampoo",
              "24-hour check-in",
              "Hangers",
              "Hair dryer",
              "Iron",
              "Laptop friendly workspace",
              "Self check-in",
              "Lockbox",
              "Private entrance",
              "Hot water"
            ],
            price: 120.00,
            monthly_price: 4000.00,
            cleaning_fee: 100.00,
            extra_people: 25.00,
            guests_included: 1,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url: "https://a0.muscache.com/im/pictures/56016331/450057c2_original.jpg?aki_policy=large",
              xl_picture_url: ""
            },
            host: {
              host_id: createId(),
              host_url: "https://www.airbnb.com/users/show/5693756",
              host_name: "Daniel",
              host_location: "New York, New York, United States",
              host_about: "Hey I'm Daniel. Originally from Chicago but have been living in NYC for 5 years now. I was extremely lucky to have found the apartment I am living in now. I have been here since I moved and don't have any plans to leave. I'm excited to to share it with cool, like minded people from all over the world. \r\n\r\nIt really is a special apartment and could not be better located. I've put a lot of effort into making my bedroom and the apartment as a whole comfortable and beautiful. ",
              host_response_time: "within a few hours",
              host_thumbnail_url: "https://a0.muscache.com/im/pictures/e47396d5-db30-4aeb-8828-6b7402a9cc73.jpg?aki_policy=profile_small",
              host_picture_url: "https://a0.muscache.com/im/pictures/e47396d5-db30-4aeb-8828-6b7402a9cc73.jpg?aki_policy=profile_x_medium",
              host_neighbourhood: "Lower East Side",
              host_response_rate: 90,
              host_is_superhost: true,
              host_has_profile_pic: true,
              host_identity_verified: true,
              host_listings_count: 1,
              host_total_listings_count: 1,
              host_verifications: [
                "email",
                "phone",
                "facebook",
                "reviews",
                "kba"
              ]
            },
            address: {
              street: "New York, NY, United States",
              suburb: "Lower East Side",
              government_area: "Lower East Side",
              market: "New York",
              country: "United States",
              country_code: "US",
              location: {
                type: "Point",
                coordinates: [
                  -73.99177,
                  40.7189
                ],
                is_location_exact: true
              }
            },
            availability: {
              availability_30: 8,
              availability_60: 14,
              availability_90: 19,
              availability_365: 135
            },
            review_scores: {
              review_scores_accuracy: 10,
              review_scores_cleanliness: 10,
              review_scores_checkin: 10,
              review_scores_communication: 10,
              review_scores_location: 10,
              review_scores_value: 10,
              review_scores_rating: 97
            },
            reviews: [
              {
                _id: createId(),
                  date: new Date("2013-10-09T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Morgan",
                comments: "Daniel's apartment is great. \r\n\r\nMy firend and I stayed in his apartment for 4 nights. It was perfect for what we needed. The location is great, close to lots of bars and restaurants in the LES. Being on a smaller street the place is really quiet at night which was great. \r\n\r\nThe apartment is very spacious (unlike most NYC apartments) and the bed was very comfortable. A huge plus for sleepy travelers! Daniel has done a great job of styling the apartment and it is equipped with everything you would need. Shower pressure is good too!\r\n\r\nAs our host Daniel was very welcoming. He went out of his way to make sure we had everything we needed an gave us some great tips about what to do during our stay in NYC. He was prompt with his communications with us and the whole process of picking up and leaving the keys was easy.\r\n\r\nWhen we come back to the city we will definitely stay at Daniel's place again. We would highly recommend it to everyone."
              },
              {
                _id: createId(),
                  date: new Date("2013-10-17T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Filippa",
                comments: "Daniel was an excellent host during our stay! He is very polite, friendly and fun and answered all our questions about New York. The apartment is spacious, modern and is located in a very nice area, very close to all shopping and good restaurants in SOHO, Lower East Side, China Town and in Little Italy. We warmly recommend Daniel as a host and the location of the apartment. "
              },
              {
                _id: createId(),
                  date: new Date("2013-10-22T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Kristi",
                comments: "We LOVED our stay in Daniel's Apartment. The place was bigger than expected, and accommodated us (a party of 5) nicely. You couldn't ask for a better location if you want to be in the middle of it all in NYC. Walking distance from great restaurants shopping so there was always something to do day or night. Thanks Daniel! You were a great host and made out time in the City perfect."
              },
              {
                _id: createId(),
                  date: new Date("2013-11-02T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Frederic",
                comments: "Nous avons partagé en famille ce bel appartement, propre, joliment décoré, dans une construction récente. Il es très bien situé, disposant de commerces de proximité et de stations de métro (Essex Street, Grand Street) qui permettent de gagner rapidement les zones touristiques de Manhattan. Le quartier est calme, animé et permet de rentrer à n'importe quelle heure de la nuit. \r\nDaniel est un hôte adorable que l'on peut contacter à tout moment, toujours serviable avec le sourire. Nous ne pouvons que le recommander à toute personne désireuse de découvrir New York. Sans problème, nous reprendrons cet appartement si l'occasion nous est donnée de retourner arpenter les avenues de la Grosse Pomme.\r\nFrédéric, originaire de la région parisienne"
              },
              {
                _id: createId(),
                  date: new Date("2013-11-11T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Florence",
                comments: "Daniel was a great host ! He greated us with a nice bottle of wine and was always present for the small questions we might have, and very responsive too. \nHis appartment is very specious and filled with natural light, which makes it very homey.\nThe location is perfect too.\nI highly recommend it for a weekly stay."
              },
              {
                _id: createId(),
                  date: new Date("2013-11-15T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Mario",
                comments: "We had a great experience during our stay in NY. The place is in an excellent location, and made it easy to commute to all the places we went. The apartment is way better than it looks on the pictures and spacious. \r\nDaniel was great to work with, he was always available for any question I had and made sure our stay was comfortable. "
              }
            ]
          },{
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/17093333",
            name: "Newly Built Detached Apartment.",
            summary: "Our newly built detached apartment, 1 bedroom/1 bathroom,  kitchen, W/D and full refrigerator. Also there is an outside seating area, Koi fish pond with a open Gazebo, and a BBQ for you to use. We do live on the premises, and there will always be someone to help you with anything you may need to make your stay more  enjoyable(URL HIDDEN)Our friendly dogs  will be on the property and will be staying in a separate fence gated area.",
            space: "",
            description: "Our newly built detached apartment, 1 bedroom/1 bathroom,  kitchen, W/D and full refrigerator. Also there is an outside seating area, Koi fish pond with a open Gazebo, and a BBQ for you to use. We do live on the premises, and there will always be someone to help you with anything you may need to make your stay more  enjoyable(URL HIDDEN)Our friendly dogs  will be on the property and will be staying in a separate fence gated area. Open Gazebo Outdoor Seating Area BBQ  Koi Pond Surrounding My Family and I are available to assist to make your stay more enjoyable This neighborhood is peaceful and quiet. Famous Helena's Hawaiian Food : down the road   Downtown: 10 Min. Pearl harbor : 15 Min. Ala Moana Shopping Center: 15 Min.  Waikiki: 15 Min. Bus Stop: 10 minute Uber or Lyft Rental Car",
            neighborhood_overview: "This neighborhood is peaceful and quiet. Famous Helena's Hawaiian Food : down the road   Downtown: 10 Min. Pearl harbor : 15 Min. Ala Moana Shopping Center: 15 Min.  Waikiki: 15 Min.",
            notes: "",
            transit: "Bus Stop: 10 minute Uber or Lyft Rental Car",
            access: "Open Gazebo Outdoor Seating Area BBQ  Koi Pond Surrounding",
            interaction: "My Family and I are available to assist to make your stay more enjoyable",
            house_rules: "- No Shoes in the house - No Smoking on premises - No company over",
            property_type: "Guesthouse",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "3",
            maximum_nights: "1125",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-06T05:00:00.000Z"),
            first_review: new Date("2017-03-14T04:00:00.000Z"),
            last_review: new Date("2019-03-01T05:00:00.000Z"),
            accommodates: 3,
            bedrooms: 1,
            beds: 1,
            number_of_reviews: 85,
            bathrooms: 1.0,
            amenities: [
              "TV",
              "Wifi",
              "Air conditioning",
              "Kitchen",
              "Free parking on premises",
              "Family/kid friendly",
              "Washer",
              "Dryer",
              "Smoke detector",
              "First aid kit",
              "Fire extinguisher",
              "Essentials",
              "Shampoo",
              "Lock on bedroom door",
              "Hangers",
              "Hair dryer",
              "Iron",
              "Laptop friendly workspace",
              "translation missing: en.hosting_amenity_49",
              "Hot water",
              "Bed linens",
              "Extra pillows and blankets",
              "Microwave",
              "Coffee maker",
              "Refrigerator",
              "Dishes and silverware",
              "Cooking basics",
              "Stove",
              "BBQ grill",
              "Patio or balcony",
              "Garden or backyard",
              "Beach essentials",
              "Long term stays allowed",
              "Wide doorway",
              "Well-lit path to entrance",
              "Step-free access",
              "Wide doorway",
              "Wide clearance to bed",
              "Accessible-height bed",
              "Step-free access",
              "Wide doorway",
              "Accessible-height toilet",
              "Wide clearance to shower",
              "toilet",
              "Wide entryway",
              "Host greets you"
            ],
            price: 120.00,
            security_deposit: 0.00,
            cleaning_fee: 50.00,
            extra_people: 25.00,
            guests_included: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url: "https://a0.muscache.com/im/pictures/79075c24-6c6e-4777-809e-b32becc0565c.jpg?aki_policy=large",
              xl_picture_url: ""
            },
            host: {
              host_id: createId(),
              host_url: "https://www.airbnb.com/users/show/30734887",
              host_name: "Mike",
              host_location: "Honolulu, Hawaii, United States",
              host_about: "Aloha Kakou, \n\nThank you for checking my home; My name is Mike, and I've been living in Hawaii for 28 years. \n\nA little bit about myself: I have a degree in Architecture, and own a construction company. I love building and seeing the smile on people's faces when they see the home of their dreams, it puts a smile in my heart. \n\nThe same happiness I get from building, I get from hosting; I love to meet people from all walks of life learn about their cultures, and see the smile on their face when they arrive in my home.\n\nIn my free time I enjoy spending it with my family and friends, having a nice glass of good wine with my loved ones, and taking my dogs out for a swim at the beach on a beautiful sunny day.\r\n\nEnjoy life to the max when you can.  \r\n \r\n--Mike",
              host_response_time: "within an hour",
              host_thumbnail_url: "https://a0.muscache.com/im/pictures/user/45c5dc72-be76-4bfa-b2d4-27066bac07f3.jpg?aki_policy=profile_small",
              host_picture_url: "https://a0.muscache.com/im/pictures/user/45c5dc72-be76-4bfa-b2d4-27066bac07f3.jpg?aki_policy=profile_x_medium",
              host_neighbourhood: "Liliha/Kapalama",
              host_response_rate: 100,
              host_is_superhost: true,
              host_has_profile_pic: true,
              host_identity_verified: true,
              host_listings_count: 1,
              host_total_listings_count: 1,
              host_verifications: [
                "email",
                "phone",
                "facebook",
                "reviews",
                "jumio",
                "government_id",
                "work_email"
              ]
            },
            address: {
              street: "Honolulu, HI, United States",
              suburb: "Honolulu",
              government_area: "Primary Urban Center",
              market: "Oahu",
              country: "United States",
              country_code: "US",
              location: {
                type: "Point",
                coordinates: [
                  -157.85729,
                  21.33344
                ],
                is_location_exact: true
              }
            },
            availability: {
              availability_30: 4,
              availability_60: 9,
              availability_90: 15,
              availability_365: 101
            },
            review_scores: {
              review_scores_accuracy: 10,
              review_scores_cleanliness: 10,
              review_scores_checkin: 10,
              review_scores_communication: 10,
              review_scores_location: 10,
              review_scores_value: 10,
              review_scores_rating: 99
            },
            reviews: [
              {
                _id: createId(),
                date: new Date("2017-03-14T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Faustina",
                comments: "This is the best airbnb stay ever!  I can't say enough wonderful Mike's place is. Everything in the place is high quality and brand new. This unit has everything to make the stay great and comfortable . Having the washer and dryer is a big plus since we need to wash our wet clothes and towels from the beach every day. We were able to do some light cooking so we didn't have to eat out everyday. The best part of all is the hospitality shown by Mike and his lovely family. We walked into this cozy and beautiful unit feeling at home right away. There was a basket of fruit and goodies along with a bottle of wine on the table for us to enjoy.  Communication was always clear and Mike responded promptly whenever we contacted him. He went above and beyond to make sure our stay at his place is pleasant and comfortable while respecting our privacy. It felt like home while being away from home. Kudos to Mike and family. I highly recommend Mike's place for your stay here. You will love it! Thank you so much for being the best host, Mike. "
              },
              {
                _id: createId(),
                date: new Date("2017-05-16T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Justyna And Darek",
                comments: "We loved Mike's place! It was immaculate with upscale amenities like gorgeous bathroom with a washlet (now I want one in my house) and close to all major routs to take us anywhere on the island. Just perfect for a couple like us that wanted a little taste of life on Oahu. Mike made us feel very welcome and comfortable, made suggestions what to see and do and was very responsive to our inquires."
              },
              {
                _id: createId(),
                date: new Date("2017-05-28T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Rali",
                comments: "We  have stayed in many rental homes but this one is by far the (Website hidden by Airbnb) brand new studio with everything someone on vacation might need.I'ts very clean.The location is very (Website hidden by Airbnb) about 10-15 min drive from downtown Honolulu.The neighborhood is very safe and quiet.Our host Mike and his family  are wonderful people and they were very helpful.They gave us very good information about the interesting places on the island.They welcomed us like family. We will definitely recommend this place to our friends visiting Oahu."
              },
              {
                _id: createId(),
                date: new Date("2017-06-11T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Leialoha",
                comments: "Mike is such a gracious host. He makes sure that your stay is comfortable and is very welcoming and so kind. His studio is absolutely breath taking. You want for nothing because everything is provided. The studio is fully stocked with amenities. A beautiful fruit and snack basket welcomes you when you arrive and a bottle of wine gives a romantic touch. The washlet toilet was amazing,and the washer dryer was a nice bonus! We felt like we were staying at a 5 star hotel.\nThe location is central to most places on Oahu, and Mike has a designated parking spot for his Airbnb guest. The neighborhood is quiet and we really enjoyed the comfort and relaxation at Mike's. We will definitely be back!"
              },
              {
                _id: createId(),
                date: new Date("2017-06-23T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Chanida",
                comments: "The place is very lovely with a great view.  It is very upscale and part of the house compound that has recently been built/renovated by the architect/builder/owner.  There are a lot of artisan touches in the bedroom.  There is a koi pond and an day-time table area.  The  place is built as a studio so the bathroom is somewhat open - the walls don't reach the ceiling.  The bed is comfortable and there is a washer/dryer (brand new).  Mike the host and owner is very gracious and left us a bottle of wine and some island munchies and fruit upon arrival.  There is one parking spot next to the house on the sidewalk area - that is Alewa Heights for those who know the area - very tight.\n\nWe would definitely stay again.  Very good value for the price.  You do need a car unless you do ironman triathalons and want to like half way up Alewa Heights."
              },
              {
                _id: createId(),
                date: new Date("2017-07-06T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Charlie",
                comments: "Everything you will need will be ready for you when you arrive. It was just like being home. It is close to Waikiki and other beaches in the East. Locale is close to all major freeways, so we got to see all of the North, East, and Southeast sides of Honolulu in a week. I was sceptical of staying in the same property with the owner, but it turned out awesome. Privacy was there, while help was just a phone call away. Mike is truly a great host and new friend."
              },
              {
                _id: createId(),
                date: new Date("2017-07-15T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Mariya",
                comments: "Отлично провели время в гостях у Майка и его семьи! Он встретил нас как родственников и старался помочь в любом вопросе. Жильё в отличном состоянии, все новое и хорошего качества, все что нужно для комфортного пребывания есть и даже больше) спасибо Майку, обязательно вернёмся!"
              }
            ]
          },
          {
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/17113625",
            name: "Great room, with balcony and private bathroom.",
            summary: "Our home is close to Moore Park Golf , Fox Studios Australia, The Entertainment Quarter, Centennial Park, Central Station, Shops, Cafes, Bars, City Centre . You’ll love our home because of the neighbourhood, the comfy bed, the kitchen, the area, the pool, hot tub, sauna, the parks, and people.. Our home is good for couples, solo adventurers, and business travellers.",
            space: "You can relax in the open plan lounge watch TV Netflix or relax on the balcony attached to the lounge.",
            description: "Our home is close to Moore Park Golf , Fox Studios Australia, The Entertainment Quarter, Centennial Park, Central Station, Shops, Cafes, Bars, City Centre . You’ll love our home because of the neighbourhood, the comfy bed, the kitchen, the area, the pool, hot tub, sauna, the parks, and people.. Our home is good for couples, solo adventurers, and business travellers. You can relax in the open plan lounge watch TV Netflix or relax on the balcony attached to the lounge. You can access the sauna and swimming pool David will be able to advise you where the shops, bars and cafes and where to get public transport. Our neighbours are friendly and helpful and are very quiet Abundance of busses that go around the city. Central station is a 20 mintue walk or 10 minute bus ride.",
            neighborhood_overview: "Our neighbours are friendly and helpful and are very quiet",
            notes: "",
            transit: "Abundance of busses that go around the city. Central station is a 20 mintue walk or 10 minute bus ride.",
            access: "You can access the sauna and swimming pool",
            interaction: "David will be able to advise you where the shops, bars and cafes and where to get public transport.",
            house_rules: "",
            property_type: "Apartment",
            room_type: "Private room",
            bed_type: "Real Bed",
            minimum_nights: "2",
            maximum_nights: "5",
            cancellation_policy: "flexible",
            last_scraped: new Date("2019-03-07T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-07T05:00:00.000Z"),
            first_review: new Date("2017-02-12T05:00:00.000Z"),
            last_review: new Date("2017-09-17T04:00:00.000Z"),
            accommodates: 2,
            bedrooms: 1,
            beds: 1,
            number_of_reviews: 4,
            bathrooms: 1.0,
            amenities: [
              "TV",
              "Wifi",
              "Pool",
              "Kitchen",
              "Smoking allowed",
              "Pets allowed",
              "Gym",
              "Elevator",
              "Hot tub",
              "Washer",
              "Smoke detector",
              "Essentials",
              "Lock on bedroom door",
              "translation missing: en.hosting_amenity_49",
              "translation missing: en.hosting_amenity_50",
              "Private living room"
            ],
            price: 70.00,
            extra_people: 0.00,
            guests_included: 1,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url: "https://a0.muscache.com/im/pictures/18a8df14-af21-4a33-b45f-ecff84f3a033.jpg?aki_policy=large",
              xl_picture_url: ""
            },
            host: {
              host_id: createId(),
              host_url: "https://www.airbnb.com/users/show/114941282",
              host_name: "Gavin",
              host_location: "Redfern, New South Wales, Australia",
              host_about: "I am adventures, friendly and social. \n",
              host_thumbnail_url: "https://a0.muscache.com/im/pictures/91643890-aed1-44f7-9498-4d348fb1dd79.jpg?aki_policy=profile_small",
              host_picture_url: "https://a0.muscache.com/im/pictures/91643890-aed1-44f7-9498-4d348fb1dd79.jpg?aki_policy=profile_x_medium",
              host_neighbourhood: "Redfern",
              host_is_superhost: false,
              host_has_profile_pic: true,
              host_identity_verified: false,
              host_listings_count: 1,
              host_total_listings_count: 1,
              host_verifications: [
                "email",
                "phone",
                "reviews",
                "jumio",
                "offline_government_id",
                "government_id",
                "work_email"
              ]
            },
            address: {
              street: "Redfern, NSW, Australia",
              suburb: "Redfern",
              government_area: "Sydney",
              market: "Sydney",
              country: "Australia",
              country_code: "AU",
              location: {
                type: "Point",
                coordinates: [
                  151.21617,
                  -33.8948
                ],
                is_location_exact: true
              }
            },
            availability: {
              availability_30: 0,
              availability_60: 0,
              availability_90: 0,
              availability_365: 0
            },
            review_scores: {
              review_scores_accuracy: 10,
              review_scores_cleanliness: 9,
              review_scores_checkin: 10,
              review_scores_communication: 10,
              review_scores_location: 9,
              review_scores_value: 10,
              review_scores_rating: 93
            },
            reviews: [
              {
                _id: createId(),
                date: new Date("2017-02-12T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Sylvie&Herve",
                comments: "Verry good place, good bed , good explainations , we appreciated swiming and jaccuzi after whole day discoverring Sydney, more for young people , so Nice thanks we recommand this place verry cheap and good."
              },
              {
                _id: createId(),
                date: new Date("2017-02-14T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Jane",
                comments: "The host canceled this reservation 2 days before arrival. This is an automated posting."
              },
              {
                _id: createId(),
                date: new Date("2017-02-15T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Garrison",
                comments: "The place is not too far from Sydney CBD, about 20 minutes walk to central station and $13 one way uber ride. Bus ride to CBD was about $3.80. Air conditioning in the room does not really cool the room properly. It was more like a fan. \n\nThe building and location was pretty safe. There is a GoGet Pod right in front of the building which is very convenient if you use GoGet. David, the host, was also a very nice and helpful.\n\nOverall it was a pretty good place if you're looking for a budget accomodation. Can't really complain for the price."
              },
              {
                _id: createId(),
                date: new Date("2017-09-17T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Daniel",
                comments: "Good location, 10 minutes walk to the closest buses. This is in a good neighborhood and we felt safe walking in the streets at night. It's close to the airport too, shops and services are all nearby.\n\nHosts were friendly, quiet, and left us to do our own thing, which we all appreciate in a share apartment, and were very happy to help if we had any questions or needed anything. Definitely recommend and there is a host of amenities available if required. \n\nNot sure how well the air conditioner works, we used it for heating and it seemed to do the trick, even though we couldn't feel any air pressure. \n\nShower and bathroom are both clean and good. \n\nWe definitely recommend these hosts."
              }
            ]
          },
          {
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/17124591",
            name: "Lindo apartamento em Copacabana bem localizado",
            summary: "Excelente apartamento com localização excepcional no coração de Copacabana! Atrás do Copacabana Palace Hotel, a 2 quadras da praia. Padaria e farmácia 24hrs logo ao lado. Várias opções de restaurantes e bares. Porteiro 24 horas. Ar-condicionado. Excelent apartment with exceptional location in the heart of Copacabana! Just behind Copacabana Palace Hotel, 2 blocka from the beach. Check out the pictures and descriptions to see what is nearby. Which is nearly everything you might need in your trip!",
            space: "Um quarto com cama de casal, armário, ar-condicionado e janela com vista pra rua e cortinas blackout. Um quarto com uma cama de solteiro, ventilador de teto, estante e escrivaninha. Banheiro com uma ducha excelente e uma nova máquina de lavar roupa. Cozinha completa com torradeira, misteira, fogão, geladeira e microondas e uma mesa forrada com papel lavável e impermeável. Double room with a flat screen TV, wardrobe, mirror and air conditioning. Blackout curtains. Single room with a wardrobe, desk and ceiling fan, bathroom with a new washing machine and fully equiped kitchen. The whole deal.",
            description: "Excelente apartamento com localização excepcional no coração de Copacabana! Atrás do Copacabana Palace Hotel, a 2 quadras da praia. Padaria e farmácia 24hrs logo ao lado. Várias opções de restaurantes e bares. Porteiro 24 horas. Ar-condicionado. Excelent apartment with exceptional location in the heart of Copacabana! Just behind Copacabana Palace Hotel, 2 blocka from the beach. Check out the pictures and descriptions to see what is nearby. Which is nearly everything you might need in your trip! Um quarto com cama de casal, armário, ar-condicionado e janela com vista pra rua e cortinas blackout. Um quarto com uma cama de solteiro, ventilador de teto, estante e escrivaninha. Banheiro com uma ducha excelente e uma nova máquina de lavar roupa. Cozinha completa com torradeira, misteira, fogão, geladeira e microondas e uma mesa forrada com papel lavável e impermeável. Double room with a flat screen TV, wardrobe, mirror and air conditioning. Blackout curtains. Single room with a wardrobe, des",
            neighborhood_overview: "No coração de Copacabana. Excelente localização, com restaurantes à kilo e churrascarias logo ao lado. Vizinho a um supermercado, farmácia e padaria 24hrs. A duas quadras da praia. The best location in Copa. Plenty of bars and restaurants as well as nightlife accessible. All you may need is within a 50 meter radius. From a bottle of water to the metro station.",
            notes: "Aproveitem! Have a good time!",
            transit: "Onibus e taxis na porta do Edifício e a um quarteirão da Av. Nossa Senhora de Copacabana. À 2 minutos caminhando da Estação de Metrô Cardeal Arcoverde. Bus and taxi stop in front of the building. Located at just one block from Nossa Senhora de Copacabana Avenue. 2 minutes walking to Cardeal Arcoverde Metro Station. Plenty of uber drivers available in Copacabana as well if you don’t fancy public transportation andprefer it quicker and safer.",
            access: "Todas as dependências do apartamento. All the flat.",
            interaction: "100% disponível ao telefone / Whats App durante toda a estadia. 100% available on the phone / Whats App during all stay.",
            house_rules: "Lotação máxima: 4 pessoas. Maximum capacity: 4 people. Acima de 2 pessoas, o condomínio cobra uma taxa de 70 Reais por pessoa por noite, Por gentileza, não bater a porta ao fechá-la. Horário de silêncio: de 22:00 as 06:00. Favor respeitar. Obrigado! Above 2 people, the building administration charges a fee of 70 Reais per person per night. Please, don't slam the door. Silence hours: from 10 PM to 6 AM. Please, act accordingly. Thanks!",
            property_type: "Apartment",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "4",
            maximum_nights: "1125",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-02-11T05:00:00.000Z"),
            calendar_last_scraped: new Date("2019-02-11T05:00:00.000Z"),
            first_review: new Date("2017-02-28T05:00:00.000Z"),
            last_review: new Date("2019-02-09T05:00:00.000Z"),
            accommodates: 4,
            bedrooms: 2,
            beds: 2,
            number_of_reviews: 45,
            bathrooms: 1.0,
            amenities: [
              "TV",
              "Wifi",
              "Air conditioning",
              "Kitchen",
              "Paid parking off premises",
              "Elevator",
              "Free street parking",
              "Family/kid friendly",
              "Washer",
              "Dryer",
              "Smoke detector",
              "Carbon monoxide detector",
              "First aid kit",
              "Essentials",
              "Shampoo",
              "Hangers",
              "Hair dryer",
              "Iron",
              "Laptop friendly workspace",
              "Self check-in",
              "Lockbox",
              "Private living room",
              "Room-darkening shades",
              "Children’s dinnerware",
              "Hot water",
              "Bed linens",
              "Extra pillows and blankets",
              "Microwave",
              "Refrigerator",
              "Dishes and silverware",
              "Cooking basics",
              "Oven",
              "Stove",
              "Single level home",
              "Luggage dropoff allowed",
              "Long term stays allowed",
              "Wide hallway clearance",
              "Step-free access",
              "Wide doorway",
              "Flat path to front door",
              "Well-lit path to entrance",
              "Disabled parking spot",
              "Step-free access",
              "Wide clearance to bed",
              "Step-free access",
              "Step-free access",
              "Wide entryway"
            ],
            price: 149.99,
            security_deposit: 0.00,
            cleaning_fee: 150.00,
            extra_people: 80.00,
            guests_included: 2,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url: "https://a0.muscache.com/im/pictures/1dbab470-7873-4b6a-a4ac-1b4ce4346569.jpg?aki_policy=large",
              xl_picture_url: ""
            },
            host: {
              host_id: createId(),
              host_url: "https://www.airbnb.com/users/show/71738243",
              host_name: "Rafa",
              host_location: "Belo Horizonte, State of Minas Gerais, Brazil",
              host_about: "Easy going and very helpful to make your stay the best possible!\r\n24/7 on What's App",
              host_response_time: "within an hour",
              host_thumbnail_url: "https://a0.muscache.com/im/pictures/user/99139834-8504-4507-b43d-b6d9b31acb49.jpg?aki_policy=profile_small",
              host_picture_url: "https://a0.muscache.com/im/pictures/user/99139834-8504-4507-b43d-b6d9b31acb49.jpg?aki_policy=profile_x_medium",
              host_neighbourhood: "",
              host_response_rate: 100,
              host_is_superhost: true,
              host_has_profile_pic: true,
              host_identity_verified: false,
              host_listings_count: 1,
              host_total_listings_count: 1,
              host_verifications: [
                "email",
                "phone",
                "facebook",
                "reviews",
                "work_email"
              ]
            },
            address: {
              street: "Rio de Janeiro, RJ, Brazil",
              suburb: "Copacabana",
              government_area: "Copacabana",
              market: "Rio De Janeiro",
              country: "Brazil",
              country_code: "BR",
              location: {
                type: "Point",
                coordinates: [
                  -43.177387273692474,
                  -22.965127230450914
                ],
                is_location_exact: false
              }
            },
            availability: {
              availability_30: 3,
              availability_60: 26,
              availability_90: 56,
              availability_365: 300
            },
            review_scores: {
              review_scores_accuracy: 10,
              review_scores_cleanliness: 9,
              review_scores_checkin: 10,
              review_scores_communication: 10,
              review_scores_location: 10,
              review_scores_value: 10,
              review_scores_rating: 98
            },
            reviews: [
              {
                _id: createId(),
                date: new Date("2017-02-28T05:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Victoria",
                comments: "Apartamento realmente muito bem localizado, perto de tudo, inclusive da estação de metrô, o que facilita muito a locomoção por toda a cidade."
              },
              {
                _id: createId(),
                date: new Date("2017-07-18T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Kirill",
                comments: "I was really surprised by the apartment! Amazing location, helpful owner who is always ready to help. The apartment clean, cosy and near to everything! I'm really looking forward to stay there once again!"
              },
              {
                _id: createId(),
                date: new Date("2017-07-23T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Lucas",
                comments: "Aos que procuram um lugar confortável, próximo do metrô, próximo da praia de Copacabana e com uma vizinhança relativamente calma, esse é o lugar perfeito. O anfitrião é uma pessoa extremamente acessível e não demorou para responder minhas mensagens. Existem mercados e restaurantes próximos ao local. Altamente recomendado e voltarei a utilizar o local em uma próxima oportunidade."
              },
              {
                _id: createId(),
                date: new Date("2017-08-16T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Kush",
                comments: "Rafa foi muito legal. Sempre ajudando-me com qualquer coisa que precisava. Super responsiva! O apartamento está lindo demais! \n\nRafa es una persona muy chevere. Me ajudo mucho y era muy amable! \n\nRafa was great. Very friendly and always helping out. The apartment is beautiful!"
              },
              {
                _id: createId(),
                date: new Date("2017-08-31T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Cyrill",
                comments: "Geräumige Wohnung mit einer guten Lage. Sauber und gepflegt. Netter gastgeber der immer sofort Antwort gibt. Rundherum gibt es viele kleine Läden um einkaufen zu gehen. Weg bis zum strand ist etwa 1 Minute laufen. Würde wieder kommen, war topp "
              },
              {
                _id: createId(),
                date: new Date("2017-09-11T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Denise",
                comments: "Agradecemos por toda hospitalidade, apartamento muito confortável, limpo e bem localizado. Obrigada Rafael, esperamos voltar em breve pra essa cidade maravilhosa!"
              }
            ]
          },
          {
            _id: createId(),
            listing_url: "https://www.airbnb.com/rooms/17132840",
            name: "Les portes jaunes",
            summary: "Belle grande maison sur 2 étages, avec jardin et terrasse. Au cœur du Plateau mais très calme. 2200 pieds carrés, 3 chambres fermées, cuisinière et barbecue au gaz, stationnement privé. Beaucoup de charme! Great house on 2 floors, with garden and terrace. Right in the Plateau's heart, but very quiet. 2200 square feet, gaz stove and bbq, private parking. Lots of charm!",
            space: "",
            description: "Belle grande maison sur 2 étages, avec jardin et terrasse. Au cœur du Plateau mais très calme. 2200 pieds carrés, 3 chambres fermées, cuisinière et barbecue au gaz, stationnement privé. Beaucoup de charme! Great house on 2 floors, with garden and terrace. Right in the Plateau's heart, but very quiet. 2200 square feet, gaz stove and bbq, private parking. Lots of charm!",
            neighborhood_overview: "",
            notes: "",
            transit: "",
            access: "",
            interaction: "",
            house_rules: "- 23h",
            property_type: "House",
            room_type: "Entire home/apt",
            bed_type: "Real Bed",
            minimum_nights: "3",
            maximum_nights: "1125",
            cancellation_policy: "strict_14_with_grace_period",
            last_scraped: new Date("2019-03-11T04:00:00.000Z"),
            calendar_last_scraped: new Date("2019-03-11T04:00:00.000Z"),
            first_review: new Date("2017-05-08T04:00:00.000Z"),
            last_review: new Date("2018-07-01T04:00:00.000Z"),
            accommodates: 6,
            bedrooms: 3,
            beds: 3,
            number_of_reviews: 11,
            bathrooms: 1.5,
            amenities: [
              "TV",
              "Cable TV",
              "Internet",
              "Wifi",
              "Air conditioning",
              "Kitchen",
              "Free parking on premises",
              "Pets allowed",
              "Indoor fireplace",
              "Heating",
              "Family/kid friendly",
              "Washer",
              "Dryer",
              "Smoke detector",
              "Fire extinguisher",
              "Essentials",
              "Shampoo",
              "Hangers",
              "Hair dryer",
              "Iron",
              "Private entrance"
            ],
            price: 229,
            security_deposit: 500.00,
            cleaning_fee: 60.00,
            extra_people: 0.00,
            guests_included: 1,
            images: {
              thumbnail_url: "",
              medium_url: "",
              picture_url: "https://a0.muscache.com/im/pictures/6019a88f-f15a-40ab-af9a-022d9049b6bd.jpg?aki_policy=large",
              xl_picture_url: ""
            },
            host: {
              host_id: createId(),
              host_url: "https://www.airbnb.com/users/show/41753544",
              host_name: "Jean-François",
              host_location: "Montreal, Québec, Canada",
              host_about: "",
              host_thumbnail_url: "https://a0.muscache.com/im/pictures/e3128d34-cca4-4a60-af8e-e7de8f64bc8e.jpg?aki_policy=profile_small",
              host_picture_url: "https://a0.muscache.com/im/pictures/e3128d34-cca4-4a60-af8e-e7de8f64bc8e.jpg?aki_policy=profile_x_medium",
              host_neighbourhood: "Le Plateau",
              host_is_superhost: false,
              host_has_profile_pic: true,
              host_identity_verified: false,
              host_listings_count: 1,
              host_total_listings_count: 1,
              host_verifications: [
                "email",
                "phone",
                "reviews"
              ]
            },
            address: {
              street: "Montréal, Québec, Canada",
              suburb: "Le Plateau-Mont-Royal",
              government_area: "Le Plateau-Mont-Royal",
              market: "Montreal",
              country: "Canada",
              country_code: "CA",
              location: {
                type: "Point",
                coordinates: [
                  -73.57912,
                  45.52563
                ],
                is_location_exact: true
              }
            },
            availability: {
              availability_30: 0,
              availability_60: 0,
              availability_90: 0,
              availability_365: 0
            },
            review_scores: {
              review_scores_accuracy: 10,
              review_scores_cleanliness: 10,
              review_scores_checkin: 10,
              review_scores_communication: 10,
              review_scores_location: 10,
              review_scores_value: 10,
              review_scores_rating: 96
            },
            reviews: [
              {
                _id: createId(),
                date: new Date("2017-05-08T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Conor",
                comments: "Great location. Lovely house. Bigger than it looks in the pictures. Dog friendly. Would definitely recommend it."
              },
              {
                _id: createId(),
                date: new Date("2017-05-16T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Martin",
                comments: " Gorgeous home even better in person. The private parking spot is tight as we rented a van. Street parking is annoying as there's restrictions. We got two parking tickets! \nGreat city with lots of parks, bakeries, markets and restaurants. Short walk to subway. Can't wait to visit again"
              },
              {
                _id: createId(),
                date: new Date("2017-05-22T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Marie",
                comments: "Cette maison a beaucoup de charme. Idéalement située, elle permet de profiter des attraits du plateau tout en étant très au calme."
              },
              {
                _id: createId(),
                date: new Date("2017-05-31T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Alicja & Gabriel",
                comments: "While Jean-Francois was out of the country during our stay, he had gone out of his way to make our experience a pleasure. This included lots of information and personal suggestions for dining and sight seeing as well as an excellent customer service including his friend who welcomed us upon our arrival. \nThe appartement was very beautiful, comfortable and welcoming! We were on our business trip and this appartement, with a terrace and a charming small garden, made us feel like on holidays after long days of work. We would definitely recommend staying here!\n"
              },
              {
                _id: createId(),
                date: new Date("2017-06-05T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Yoland",
                comments: "Appartements extraordinaire. Bien situé. ( Restaurant, bar, piste cyclable) \nParking sur place. "
              },
              {
                _id: createId(),
                date: new Date("2017-07-04T04:00:00.000Z"),
                listing_id: createId(),
                reviewer_id: createId(),
                reviewer_name: "Robin",
                comments: "We loved Jean-François's place. It was comfortable and close to everything. However, there was construction that started really early in the morning, around 7am in the morning! The construction noice woke us up and unfortunately was disruptive. Apart from the construction noise, the house was great and felt like home."
              }
            ]
          }
    ]
}