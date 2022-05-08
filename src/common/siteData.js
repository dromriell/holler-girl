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
    name: "Two Day General Admission w/ Tent Camping",
    price: "50",
    details: ["All ages", "Per person", "Includes primitive camping"],
  },
  {
    name: "Two Day General Admission w/ Car Camping",
    price: "60",
    details: ["All ages", "Per person", "Includes car camping"],
  },
  {
    name: "RV Site Pass",
    price: "65",
    details: ["Does not include general admission"],
  },
];

export const eventData = {
  camping: [
    {
      name: "The Site",
      images: [camping01, camping02, camping03],
      description: `
      Located on nearly 200 acres of serene Kentucky woodlands, Rockcastle Riverside offers a number open-air activities to experience alongside the music. 
      Enjoy kayaking, swimming, or fishing on a mile of Rockcastle River or adventure along the captivating hiking trails. 
      `,
    },
  ],
  activities: [
    {
      name: "",
      images: [
        "https://images.pexels.com/photos/4793296/pexels-photo-4793296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      description: "Saturday Morning Yoga w/ Ashley Shochat",
    },
    {
      name: "",
      images: [
        "https://greenhouse17.org/wp-content/uploads/2018/04/30859108_10212520898678271_1249968857_n-600x601.jpg",
      ],
      description: "Silent Art Auction in Support of GreenHouse17",
    },
  ],
};

export const partnersArray = [
  {
    name: "GreenHouse17",
    logoSrc: gh17,
  },
  {
    name: "Rockcastle Riverside",
    logoSrc:
      "https://static.wixstatic.com/media/c0bb12_1f109e260fed4e1b8f5b061a430d23a8~mv2.jpg/v1/fill/w_538,h_208,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rockcastlelogo.jpg",
  },
];
