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
      name: "camping",
      images: [
        "https://res.cloudinary.com/dnmokvouu/image/upload/v1652038180/hollergirl2022/camping01_rp723m.webp",
        "https://res.cloudinary.com/dnmokvouu/image/upload/v1652038187/hollergirl2022/camping02_uflzfz.webp",
        "https://res.cloudinary.com/dnmokvouu/image/upload/v1652038192/hollergirl2022/camping03_vfpvkl.webp",
      ],
      title: `
      Located on nearly 200 acres of serene Kentucky woodlands, Rockcastle Riverside offers a number open-air activities to experience alongside the music. 
      Enjoy kayaking, swimming, or fishing on a mile of Rockcastle River or adventure along the captivating hiking trails. 
      `,
      description: "",
    },
  ],
  activities: [
    {
      name: "yoga",
      images: [
        "https://res.cloudinary.com/dnmokvouu/image/upload/v1652029645/hollergirl2022/Ashley_xb6gmm.webp",
      ],
      title: "Saturday Morning Yoga w/ Ashley Shochat",
      description:
        "Ashley Shochat has been practicing yoga for over 30 years and teaching for 15. She has studied with Sharon Gannon, Rodney Yee, Bikram Choudery, and Mary Jarvis, among others. She holds certification from the Bikram Yoga College of India, Core Power Vinyasa, and the Prison Yoga Project. She is also a visual artist and lives in Lexington with her lovely wife.",
    },
    {
      name: "auction",
      images: [
        "https://res.cloudinary.com/dnmokvouu/image/upload/v1652029914/hollergirl2022/greenhouse17_01_j4jn60.webp",
      ],
      title: "Silent Art Auction in Support of GreenHouse17",
      description:
        "Greenhouse 17 is a nonprofit organization committed to ending intimate partner abuse in families and the community. Their shelter in rural Fayette County, Kentucky is surrounded by a beautiful 40-acre property. We farm this land to offer nature-based healing, nutritious field-to-table produce, and job training for survivors. Nurturing lives harmed by intimate partner abuse.",
    },
  ],
};

export const partnersArray = [
  {
    name: "GreenHouse17",
    logoSrc: "",
  },
  {
    name: "Rockcastle Riverside",
    logoSrc:
      "https://static.wixstatic.com/media/c0bb12_1f109e260fed4e1b8f5b061a430d23a8~mv2.jpg/v1/fill/w_538,h_208,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rockcastlelogo.jpg",
  },
];

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HollerGirl 2020 Music Festival",
  description:
    "HollerGirl is so much more than an amazing weekend of music, it is a concept. A female focused music event where we highlight all of the incredibly talented women musicians we have here in Kentucky.",
  startDate: "2022-08-12T09:00:00-04:00",
  endDate: "2022-08-13T23:45:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Rockcastle Riverside",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4211 Lower River Road",
      addressLocality: "Livingston",
      addressRegion: "KY",
      postalCode: "40445",
    },
  },
  image: [
    "https://res.cloudinary.com/dnmokvouu/image/upload/v1652038645/hollergirl2022/lineupPoster_zmb0u1.webp",
    "https://res.cloudinary.com/dnmokvouu/image/upload/v1652038180/hollergirl2022/camping01_rp723m.webp",
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.tickettailor.com/events/hollergirl/695993#",
    price: "50",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "Kira and Morrison",
  },
  organizer: {
    "@type": "Organization",
    name: "HollerGirl",
    url: "https://www.hollergirl.live",
  },
};
