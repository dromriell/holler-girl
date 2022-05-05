import camping01 from "../assets/camping01.webp";
import camping02 from "../assets/camping02.webp";
import camping03 from "../assets/camping03.webp";

import gh17 from "../assets/greenhouse17.webp";

export const lineupData = [
  "Rachel Crowe",
  "Ande Fee",
  "Honey Wright",
  "Emma Lee",
  "Sarah Fightmaster",
  "Mary Wright",
  "Lemon Grass",
  "Anna Kline",
  "Second Rodeo",
  "Brittany Dawn Samples",
  "Erin Sliney",
  "Jenn Marie",
  "Elizabeth Hazlett",
  "Liz Frazier",
  "Madylin Goins",
  "Huck & Jesse",
  "Em Jamison",
  "Kadie Meadows",
  "Melody Youngblood",
  "Sydney Adams",
  "Elizabeth Walker",
  "Teresa Prince",
  "Slut Pill",
];

export const ticketData = [
  {
    name: "Two Day Pass",
    price: "85",
    details: ["All ages", "Per person", "Includes camping"],
  },
  {
    name: "Single Day Pass",
    price: "50",
    details: ["All ages", "Per person"],
  },
];

export const eventData = {
  camping: [
    {
      name: "camping",
      images: [camping01, camping02, camping03],
      description: "RV, Tent, & Car Camping",
    },
  ],
  activities: [
    {
      name: "yoga",
      images: [
        "https://images.pexels.com/photos/4793296/pexels-photo-4793296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      description: "Saturday Morning Yoga w/ Ashley Shochat",
    },
    {
      name: "auction",
      images: [gh17],
      description: "Silent Art Auction in Support of GreenHouse17",
    },
  ],
};
