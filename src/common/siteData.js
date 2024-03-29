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

export const sponsorsArray = [
  {
    name: "jarfly",
    images: [
      "https://res.cloudinary.com/dnmokvouu/image/upload/v1659317138/hollergirl2022/jf_logo_hehqtw.webp",
    ],
    link: "http://jarflybrewing.com/",
  },
  {
    name: "blueStallion",
    images: [
      "https://res.cloudinary.com/dnmokvouu/image/upload/v1659318564/hollergirl2022/bs_logo_msvwxg.webp",
    ],
    link: "https://www.bluestallionbrewing.com/",
  },
];

export const partnersArray = [
  {
    name: "jarfly",
    logoSrc:
      "https://res.cloudinary.com/dnmokvouu/image/upload/v1659317138/hollergirl2022/jf_logo_hehqtw.webp",
    link: "http://jarflybrewing.com/",
  },
  {
    name: "blueStallion",
    logoSrc:
      "https://res.cloudinary.com/dnmokvouu/image/upload/v1659318564/hollergirl2022/bs_logo_msvwxg.webp",
    link: "https://www.bluestallionbrewing.com/",
  },
  {
    name: "barnhill chimney",
    logoSrc:
      "https://res.cloudinary.com/dnmokvouu/image/upload/v1659321215/hollergirl2022/bhc_logo_dxt1ol.webp",
    link: "https://barnhillchimney.com/",
  },
  {
    name: "girlsgirlsgirls burritos",
    logoSrc: "https://www.girlsgirlsgirlsburritos.com/images/logo.png",
    link: "https://www.girlsgirlsgirlsburritos.com/"
  }
];

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Festival",
  name: "HollerGirl 2022 Music Festival",
  description:
    "HollerGirl is so much more than an amazing weekend of music, it is a concept. A female focused music event where we highlight all of the incredibly talented women musicians we have here in Kentucky.",
  startDate: "2022-08-12",
  endDate: "2022-08-13",
  url: "https://hollergirl.live",
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
    "https://res.cloudinary.com/dnmokvouu/image/upload/v1658460292/hollergirl2022/hgLogo1x1_v7c12a.webp",
    "https://res.cloudinary.com/dnmokvouu/image/upload/v1658460296/hollergirl2022/hgLogo4x3_ffapxn.webp",
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.tickettailor.com/events/hollergirl/695993#",
    price: "50",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  organizer: {
    "@type": "Organization",
    name: "HollerGirl",
    url: "https://www.hollergirl.live",
  },
};
