const defaultSingleUser = {
  kind: "multi",
  user: {
    key: "f9f060ac-6d4f-4827-a74c-de01f8842b29",
    name: "Dr. Raquel Lindgren",
    state: "Oregon",
    city: "Reinamouth",
    country: "Sweden",
  },
  subscription: {
    key: "enterprise",
  },
  application: {
    key: "autobahn",
    version: "4.8.5",
  },
  department: {
    key: "Baby",
  },
  company: {
    key: "Huel, Johns and Hodkiewicz",
  },
};

const defaultMultiUser = [
  {
    kind: "multi",
    user: {
      key: "f9f060ac-6d4f-4827-a74c-de01f8842b29",
      name: "Dr. Raquel Lindgren",
      state: "Oregon",
      city: "Reinamouth",
      country: "Sweden",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "4.8.5",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "Huel, Johns and Hodkiewicz",
    },
  },
  {
    kind: "multi",
    user: {
      key: "c6da21c8-778b-4de6-aeec-c40116772e9e",
      name: "Sophie Boehm",
      state: "Maine",
      city: "West Kaley",
      country: "Saint Helena",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "2.2.9",
    },
    department: {
      key: "Jewelery",
    },
    company: {
      key: "Langworth, Moen and Klein",
    },
  },
  {
    kind: "multi",
    user: {
      key: "f81a186a-24c1-4caf-987f-dfc39e8f6718",
      name: "Danny Farrell",
      state: "North Carolina",
      city: "West Domenickview",
      country: "United States of America",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "9.1.5",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Predovic LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "eac3ea72-e6d2-438a-a098-e3c97ee24bbf",
      name: "Dennis Lang",
      state: "New Hampshire",
      city: "West Salliehaven",
      country: "Romania",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "0.1.9",
    },
    department: {
      key: "Garden",
    },
    company: {
      key: "Bode, Grant and Adams",
    },
  },
  {
    kind: "multi",
    user: {
      key: "346f5c5c-68e6-48d1-8052-28c86df19f25",
      name: "Melissa Mante",
      state: "Oregon",
      city: "Yuba City",
      country: "Ecuador",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "9.6.2",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Donnelly Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "c67828eb-e2a7-42d7-96a2-f983b1acd37b",
      name: "Margie Medhurst",
      state: "Florida",
      city: "Cedar Rapids",
      country: "Maldives",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "0.5.8",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Kovacek, Herzog and Lehner",
    },
  },
  {
    kind: "multi",
    user: {
      key: "da3e78b2-1011-4100-8379-87c17d48db20",
      name: "Barbara West",
      state: "Montana",
      city: "Borerport",
      country: "Tokelau",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "9.5.2",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Leannon, Trantow and Pfeffer",
    },
  },
  {
    kind: "multi",
    user: {
      key: "d82dcfb1-665f-4dd3-9feb-449b511bfca3",
      name: "Ms. Melanie Zboncak",
      state: "Arizona",
      city: "Whitneyworth",
      country: "French Southern Territories",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "9.4.1",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Fadel LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "dc9f8d15-8822-4517-b183-c02097fbdeaa",
      name: "Kerry Hammes",
      state: "Rhode Island",
      city: "Pollichcester",
      country: "Antarctica",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "0.9.9",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Nader, Schmitt and Hand",
    },
  },
  {
    kind: "multi",
    user: {
      key: "b159cf31-eaad-4efa-bb49-c4d3cb29cbeb",
      name: "Christine Prosacco",
      state: "Connecticut",
      city: "South Alfredaview",
      country: "Italy",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "1.3.4",
    },
    department: {
      key: "Tools",
    },
    company: {
      key: "Spencer, Champlin and Sawayn",
    },
  },
  {
    kind: "multi",
    user: {
      key: "96a9ae5d-48b8-4704-95c0-92ea074a2e96",
      name: "Beatrice Mills",
      state: "Kentucky",
      city: "Mayeland",
      country: "Singapore",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "3.1.9",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Padberg, Mayert and Schneider",
    },
  },
  {
    kind: "multi",
    user: {
      key: "75635407-8086-40e5-bb71-9d162cc3d2b5",
      name: "Christopher Bayer DDS",
      state: "Florida",
      city: "West Betty",
      country: "Congo",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "7.3.4",
    },
    department: {
      key: "Books",
    },
    company: {
      key: "Kub Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "13f2a0f7-f2eb-43d8-8020-b5fde6b2bbbb",
      name: "Fernando Grant MD",
      state: "Tennessee",
      city: "Feeneyview",
      country: "Tanzania",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "8.4.7",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Maggio - Shanahan",
    },
  },
  {
    kind: "multi",
    user: {
      key: "a8951212-5d00-4917-a7c1-96b897c7ffae",
      name: "Holly Hackett",
      state: "Iowa",
      city: "Kerlukefort",
      country: "China",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "8.1.5",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "Barton - Kuhn",
    },
  },
  {
    kind: "multi",
    user: {
      key: "8e4543d1-3aeb-4287-81e7-f2bf6d78b7d7",
      name: "Josefina Reynolds",
      state: "Connecticut",
      city: "Joaniecester",
      country: "Uruguay",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "8.8.5",
    },
    department: {
      key: "Toys",
    },
    company: {
      key: "Crooks - Borer",
    },
  },
  {
    kind: "multi",
    user: {
      key: "36c092e6-1c25-4c70-8363-823c199694ef",
      name: "Terence Wolff",
      state: "New Hampshire",
      city: "Cranston",
      country: "Eritrea",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "2.1.1",
    },
    department: {
      key: "Garden",
    },
    company: {
      key: "Roberts and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "a264b22d-724f-4d9f-b66c-cbafdedb0a20",
      name: "Vanessa Hickle II",
      state: "Texas",
      city: "South Jonathon",
      country: "Trinidad and Tobago",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "1.9.6",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Sanford - Cormier",
    },
  },
  {
    kind: "multi",
    user: {
      key: "87a8c9c3-6f30-44e2-a240-dde64a35a4fc",
      name: "Sophie Roberts",
      state: "Utah",
      city: "New Janastad",
      country: "Bahrain",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "2.2.2",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Grant and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "f2d26d62-564c-4b55-9581-33519347c914",
      name: "Cory Vandervort",
      state: "Nevada",
      city: "Layton",
      country: "India",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "6.2.8",
    },
    department: {
      key: "Beauty",
    },
    company: {
      key: "Schowalter, Gerhold and Monahan",
    },
  },
  {
    kind: "multi",
    user: {
      key: "ad343249-a69d-4ccb-9627-775e80b3d9da",
      name: "Johnathan Parker",
      state: "New York",
      city: "Port Orin",
      country: "Pitcairn Islands",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "1.6.1",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Fay, Funk and Casper",
    },
  },
  {
    kind: "multi",
    user: {
      key: "78f7c32c-afa4-4df4-89b4-f18f942d824c",
      name: "Beatrice Gerhold",
      state: "West Virginia",
      city: "Haneton",
      country: "Jamaica",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "7.5.8",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "Mohr - Zulauf",
    },
  },
  {
    kind: "multi",
    user: {
      key: "132628a4-a2a8-48e9-9653-88021b7dafa1",
      name: "Alfredo Flatley I",
      state: "California",
      city: "Walnut Creek",
      country: "Falkland Islands (Malvinas)",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "0.6.2",
    },
    department: {
      key: "Jewelery",
    },
    company: {
      key: "Lesch - Sauer",
    },
  },
  {
    kind: "multi",
    user: {
      key: "73f139c2-2515-4290-9a98-712a83b032dd",
      name: "Tonya Mohr",
      state: "Montana",
      city: "Fort Dillon",
      country: "Senegal",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "0.3.2",
    },
    department: {
      key: "Health",
    },
    company: {
      key: "Shanahan - Heller",
    },
  },
  {
    kind: "multi",
    user: {
      key: "fd2f4c86-7e6c-4891-b2fd-6a400b48ba7a",
      name: "Mr. Lyle Bashirian",
      state: "Idaho",
      city: "Pinkiefort",
      country: "Saint Helena",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "8.4.6",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "Marvin - Kilback",
    },
  },
  {
    kind: "multi",
    user: {
      key: "b16b62f1-aa41-45e0-9bfc-52e3016b6978",
      name: "Mattie McDermott",
      state: "New Hampshire",
      city: "South Trystan",
      country: "Yemen",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "4.4.8",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Blanda - Rippin",
    },
  },
  {
    kind: "multi",
    user: {
      key: "44073484-ee08-4955-a7c3-0f6407f72572",
      name: "Vivian Weimann",
      state: "California",
      city: "New Nella",
      country: "United States Minor Outlying Islands",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "1.9.4",
    },
    department: {
      key: "Automotive",
    },
    company: {
      key: "Fay - Hettinger",
    },
  },
  {
    kind: "multi",
    user: {
      key: "618d87c7-70dc-414f-8acd-3256a674daf0",
      name: "Ms. Ada Hyatt",
      state: "California",
      city: "Mohrfurt",
      country: "Anguilla",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "4.0.3",
    },
    department: {
      key: "Tools",
    },
    company: {
      key: "Lang Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "7f922f6d-e336-415b-b97e-1c6e9ca4c016",
      name: "Tony Lind PhD",
      state: "Iowa",
      city: "New Gregorychester",
      country: "Azerbaijan",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "7.8.5",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "Klocko LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "1caee2a6-12ac-425b-9101-0527e100130e",
      name: "Evelyn Skiles",
      state: "Maine",
      city: "Wunschmouth",
      country: "Ireland",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "6.8.0",
    },
    department: {
      key: "Games",
    },
    company: {
      key: "Harris, Sawayn and Cartwright",
    },
  },
  {
    kind: "multi",
    user: {
      key: "172c4945-72fa-4686-b9f2-140e83a84967",
      name: "Marie Ortiz",
      state: "Kansas",
      city: "Travisshire",
      country: "Ireland",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "5.3.0",
    },
    department: {
      key: "Jewelery",
    },
    company: {
      key: "Botsford and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "9af48e06-f0bb-4fa5-832c-5c54a4d9f1d5",
      name: "Cary Runte",
      state: "Connecticut",
      city: "Trystanworth",
      country: "Egypt",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "2.4.0",
    },
    department: {
      key: "Music",
    },
    company: {
      key: "Kirlin Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "91660ca4-323f-4906-a901-9326d3435273",
      name: "Theresa Gutkowski",
      state: "Nebraska",
      city: "Georgianastead",
      country: "Australia",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "5.1.5",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Bradtke, Kulas and King",
    },
  },
  {
    kind: "multi",
    user: {
      key: "7f9ac9b2-0ac3-45fd-af0f-5f7c024303b7",
      name: "Sheryl Mertz",
      state: "Connecticut",
      city: "West Dougtown",
      country: "Central African Republic",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "6.1.1",
    },
    department: {
      key: "Shoes",
    },
    company: {
      key: "Kunze Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "6a2185d3-9abe-42fe-a3ab-d6dafa066386",
      name: "Roxanne Mosciski DVM",
      state: "Maryland",
      city: "Sethfort",
      country: "Guinea-Bissau",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "3.5.1",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Johnson - Jones",
    },
  },
  {
    kind: "multi",
    user: {
      key: "2c1be15e-487f-46e0-b30a-199787212152",
      name: "Jeffrey Hoeger",
      state: "Ohio",
      city: "Poinciana",
      country: "Tajikistan",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "3.7.2",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Dicki Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "72ba97ca-3c91-4663-bb4a-0b8d08ec7b36",
      name: "Anna Botsford",
      state: "West Virginia",
      city: "West Quinton",
      country: "Trinidad and Tobago",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "3.3.8",
    },
    department: {
      key: "Beauty",
    },
    company: {
      key: "Lebsack - Hoppe",
    },
  },
  {
    kind: "multi",
    user: {
      key: "0e242544-b412-4ceb-8cbe-b30d51339960",
      name: "Gregory Prosacco",
      state: "South Carolina",
      city: "Concepcionshire",
      country: "Sint Maarten",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "3.1.3",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Jacobson Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "1c9e571b-35e7-4088-9d70-def6e61453b3",
      name: "Eileen Senger",
      state: "North Carolina",
      city: "New Lavonneburgh",
      country: "Jordan",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "9.1.1",
    },
    department: {
      key: "Shoes",
    },
    company: {
      key: "Jones - Murphy",
    },
  },
  {
    kind: "multi",
    user: {
      key: "6ca0c7f4-0474-4e9c-bcbc-b7b5df821419",
      name: "Ebony Gislason",
      state: "Alabama",
      city: "Spinkaborough",
      country: "Ireland",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "3.0.0",
    },
    department: {
      key: "Movies",
    },
    company: {
      key: "Luettgen - Kohler",
    },
  },
  {
    kind: "multi",
    user: {
      key: "b7cbadc6-f0ed-4009-a22b-8513ab3cf845",
      name: "Barbara Stracke",
      state: "California",
      city: "Hauckcester",
      country: "South Sudan",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "6.9.0",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Grant - Ziemann",
    },
  },
  {
    kind: "multi",
    user: {
      key: "171efa29-9fad-4262-aa75-fa48fa73991c",
      name: "Tracy Howe",
      state: "Wyoming",
      city: "North Port",
      country: "Montenegro",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "7.6.1",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Wolff - Willms",
    },
  },
  {
    kind: "multi",
    user: {
      key: "9757f15f-fc97-4e55-881f-67048190886d",
      name: "Edith Mayer I",
      state: "New Mexico",
      city: "West Reanna",
      country: "Christmas Island",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "2.4.1",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "Mayer and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "a30859e2-5d8d-4b48-8296-b0e3e9a03175",
      name: "Sam Pagac",
      state: "Michigan",
      city: "Richmond",
      country: "Belgium",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "5.2.2",
    },
    department: {
      key: "Electronics",
    },
    company: {
      key: "Pollich Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "4361f447-0146-4d4d-b704-8502fa4aa51f",
      name: "Lydia Durgan",
      state: "Florida",
      city: "Huelsfort",
      country: "Uruguay",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "6.8.7",
    },
    department: {
      key: "Industrial",
    },
    company: {
      key: "Adams - Oberbrunner",
    },
  },
  {
    kind: "multi",
    user: {
      key: "9284cf35-b19d-4d37-ad12-b97f2f0c3fae",
      name: "Eddie Harris",
      state: "Maryland",
      city: "Ondrickaside",
      country: "Indonesia",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "5.3.7",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Roberts Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "64986622-88e6-46ad-8498-f43b8cdd6de2",
      name: "Michele Barton",
      state: "Mississippi",
      city: "Port Annabellemouth",
      country: "Saint Martin",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "3.8.7",
    },
    department: {
      key: "Automotive",
    },
    company: {
      key: "Kreiger - Bechtelar",
    },
  },
  {
    kind: "multi",
    user: {
      key: "e230c8c5-d86a-4000-b272-4ab1b62f6104",
      name: "Edmund Goldner",
      state: "Idaho",
      city: "Cummingsfurt",
      country: "United States of America",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "8.4.4",
    },
    department: {
      key: "Home",
    },
    company: {
      key: "Homenick - McKenzie",
    },
  },
  {
    kind: "multi",
    user: {
      key: "36348647-d68d-4f56-b54e-3f546271ce79",
      name: "Harold Franey IV",
      state: "Texas",
      city: "Bernhardton",
      country: "Slovakia",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "2.9.0",
    },
    department: {
      key: "Garden",
    },
    company: {
      key: "Cremin - Prosacco",
    },
  },
  {
    kind: "multi",
    user: {
      key: "59209ade-61ac-482c-bd00-242701737e23",
      name: "Ana Bartoletti",
      state: "Georgia",
      city: "New Yazmin",
      country: "Niger",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "2.6.4",
    },
    department: {
      key: "Electronics",
    },
    company: {
      key: "Konopelski, McKenzie and Schoen",
    },
  },
  {
    kind: "multi",
    user: {
      key: "347969f6-b55a-424e-b61b-602a006cf845",
      name: "Brandy Koch",
      state: "Maryland",
      city: "South Delfinaton",
      country: "Lebanon",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "2.1.0",
    },
    department: {
      key: "Electronics",
    },
    company: {
      key: "Turcotte LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "abc57bff-b2cd-4e69-bb64-e412135daebe",
      name: "Elaine Herzog",
      state: "New York",
      city: "Lake Bennett",
      country: "Mexico",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "6.9.5",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Streich, Runolfsson and Prosacco",
    },
  },
  {
    kind: "multi",
    user: {
      key: "7da2c5cd-11ca-499c-8519-b7cbc6f32994",
      name: "Kimberly Klocko",
      state: "Iowa",
      city: "Zechariahburgh",
      country: "French Polynesia",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "3.4.3",
    },
    department: {
      key: "Books",
    },
    company: {
      key: "Raynor - Ward",
    },
  },
  {
    kind: "multi",
    user: {
      key: "a44abb2e-147b-47a3-a730-bbb758ebd5ce",
      name: "Rosie Osinski DVM",
      state: "Mississippi",
      city: "Lake Elian",
      country: "Saint Pierre and Miquelon",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "8.9.8",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Daugherty LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "e6b57c05-b1b2-4508-93a8-dfac77ec7054",
      name: "Van Bartoletti",
      state: "Indiana",
      city: "Bethesda",
      country: "Iceland",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "3.0.7",
    },
    department: {
      key: "Toys",
    },
    company: {
      key: "Funk, Jakubowski and Kiehn",
    },
  },
  {
    kind: "multi",
    user: {
      key: "ebaf30e4-5950-474e-9212-08d32793e652",
      name: "Roy Bergstrom",
      state: "Massachusetts",
      city: "Kylermouth",
      country: "Sweden",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "8.6.9",
    },
    department: {
      key: "Garden",
    },
    company: {
      key: "Schulist, Hudson and Schoen",
    },
  },
  {
    kind: "multi",
    user: {
      key: "cf0ad405-2118-4621-ad7c-5ca49b81bee3",
      name: "Henry Hoppe",
      state: "New Jersey",
      city: "Swaniawskiton",
      country: "Lithuania",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "0.8.8",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "Labadie - Dach",
    },
  },
  {
    kind: "multi",
    user: {
      key: "67b3cad0-320e-43c3-9ca2-2784d6f6dfd6",
      name: "Erika Padberg",
      state: "Florida",
      city: "Bethlehem",
      country: "San Marino",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "3.3.0",
    },
    department: {
      key: "Games",
    },
    company: {
      key: "Renner, Langosh and Morissette",
    },
  },
  {
    kind: "multi",
    user: {
      key: "d4b53b1e-0f18-43fa-af10-0ac4afd0cc93",
      name: "Alexis Mitchell",
      state: "Texas",
      city: "Schmidtborough",
      country: "American Samoa",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "8.7.0",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Orn Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "0bf984cb-109c-45c7-9ead-6dce380e72c2",
      name: "Pearl Senger",
      state: "Ohio",
      city: "Wehnerbury",
      country: "Wallis and Futuna",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "1.3.4",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "Pfannerstill, Aufderhar and Quitzon",
    },
  },
  {
    kind: "multi",
    user: {
      key: "0f9b8394-f3ea-429b-b2f4-bc06cfea32a3",
      name: "Leah Glover",
      state: "Pennsylvania",
      city: "Legroston",
      country: "Antarctica",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "7.8.6",
    },
    department: {
      key: "Tools",
    },
    company: {
      key: "Hills, O'Kon and D'Amore",
    },
  },
  {
    kind: "multi",
    user: {
      key: "c7a6252c-bd8c-438a-b097-558be00709dc",
      name: "Mr. Max Lueilwitz",
      state: "Hawaii",
      city: "Fort Alycia",
      country: "Cook Islands",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "0.9.0",
    },
    department: {
      key: "Automotive",
    },
    company: {
      key: "Dibbert, Effertz and Jacobson",
    },
  },
  {
    kind: "multi",
    user: {
      key: "74b36975-2b7c-40dc-83a0-8c298e4c6273",
      name: "Abraham Ankunding",
      state: "Arizona",
      city: "Port Van",
      country: "Liechtenstein",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "6.5.5",
    },
    department: {
      key: "Industrial",
    },
    company: {
      key: "Boyle, Dibbert and McClure",
    },
  },
  {
    kind: "multi",
    user: {
      key: "e3ecef5c-7738-4088-8911-e8e74a17fd4c",
      name: "Dianna Dicki",
      state: "Missouri",
      city: "Lansing",
      country: "Armenia",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "5.3.0",
    },
    department: {
      key: "Automotive",
    },
    company: {
      key: "Monahan Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "69d48818-1e71-4250-8833-4aa6af26d707",
      name: "Jimmie Bartoletti-Ernser",
      state: "Massachusetts",
      city: "Vonberg",
      country: "Turkey",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "0.2.1",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Little, Prohaska and D'Amore",
    },
  },
  {
    kind: "multi",
    user: {
      key: "f6289da4-4dfb-4415-92f6-50b5dc706193",
      name: "Jacob Hammes",
      state: "Kentucky",
      city: "Warwick",
      country: "Guadeloupe",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "0.1.1",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Hansen, Haley and Stanton",
    },
  },
  {
    kind: "multi",
    user: {
      key: "7c766f0a-697c-4072-89f2-432c44cac127",
      name: "Alberta Prosacco",
      state: "Maine",
      city: "Port Marafurt",
      country: "Portugal",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "electfast",
      version: "1.7.4",
    },
    department: {
      key: "Toys",
    },
    company: {
      key: "Klein, Kuhic and Wolff",
    },
  },
  {
    kind: "multi",
    user: {
      key: "03da7d0e-09cc-4b6a-b466-8a4fc477f97d",
      name: "Abraham Pagac Sr.",
      state: "South Carolina",
      city: "Miloport",
      country: "Cape Verde",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "7.3.6",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Smitham, Marvin and Upton",
    },
  },
  {
    kind: "multi",
    user: {
      key: "86b7cc5d-7b95-42c8-a187-d5115c7dde24",
      name: "Gustavo Kuhic",
      state: "New York",
      city: "North Edgardoton",
      country: "Tokelau",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "4.4.7",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Glover Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "d6d7ce7a-5d66-41e6-919e-b6409c7ef529",
      name: "Sherri D'Amore",
      state: "Washington",
      city: "Colestead",
      country: "Togo",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "5.5.2",
    },
    department: {
      key: "Games",
    },
    company: {
      key: "Bergnaum Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "16134d3a-f5a6-4e20-9f33-7944bfcf7c8b",
      name: "Edwin Stoltenberg",
      state: "Kentucky",
      city: "Borerview",
      country: "Bermuda",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "5.0.2",
    },
    department: {
      key: "Electronics",
    },
    company: {
      key: "Gislason and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "dbb8d9f8-2b45-4ae7-8595-f9d39bb767bf",
      name: "Ernest Kovacek",
      state: "Arizona",
      city: "Harrisonburg",
      country: "Saint Helena",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "9.1.6",
    },
    department: {
      key: "Tools",
    },
    company: {
      key: "Gorczany - Ebert",
    },
  },
  {
    kind: "multi",
    user: {
      key: "e23d4b40-29b7-4d8f-9d91-bc987b0c93f7",
      name: "Ada Schowalter",
      state: "Ohio",
      city: "Fullerton",
      country: "Syrian Arab Republic",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "autobahn",
      version: "1.6.6",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Rippin, Dickinson and Turner",
    },
  },
  {
    kind: "multi",
    user: {
      key: "0c9123cc-c39d-4249-9190-2d20ac994c5e",
      name: "Cynthia Simonis",
      state: "Oregon",
      city: "Temple",
      country: "South Sudan",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "electfast",
      version: "2.7.7",
    },
    department: {
      key: "Industrial",
    },
    company: {
      key: "Runolfsson Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "96e4d53a-e984-4104-81b4-70ea2a093cc9",
      name: "Richard Corwin",
      state: "Oregon",
      city: "Schmittfield",
      country: "Cyprus",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "8.5.7",
    },
    department: {
      key: "Industrial",
    },
    company: {
      key: "Bogisich - Cole",
    },
  },
  {
    kind: "multi",
    user: {
      key: "d53c8a82-4eec-4fef-8f49-91a192d15045",
      name: "Brittany Haag",
      state: "North Carolina",
      city: "South Carmineburgh",
      country: "Guernsey",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "2.3.9",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Lindgren Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "b2ac123f-d52d-4ed9-8f9c-666b21278065",
      name: "Marjorie Schoen",
      state: "Louisiana",
      city: "Smithfort",
      country: "Kyrgyz Republic",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "5.9.3",
    },
    department: {
      key: "Home",
    },
    company: {
      key: "Sauer, Dicki and Grimes",
    },
  },
  {
    kind: "multi",
    user: {
      key: "3aca2983-fcea-4121-9fe8-4e2dcf374992",
      name: "Clay Torp",
      state: "Alaska",
      city: "Darronton",
      country: "Kuwait",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "0.4.0",
    },
    department: {
      key: "Books",
    },
    company: {
      key: "Witting and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "5ecbfe37-189a-4ef0-9dc1-af835c2bf49e",
      name: "Miss Beatrice Bogan Jr.",
      state: "Texas",
      city: "Murazikhaven",
      country: "Sweden",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "9.7.9",
    },
    department: {
      key: "Health",
    },
    company: {
      key: "Ruecker, Goyette and Maggio",
    },
  },
  {
    kind: "multi",
    user: {
      key: "df6e9b7f-2a87-4420-81aa-047baebe8b15",
      name: "Abel Davis DVM",
      state: "South Dakota",
      city: "Jaredland",
      country: "Cameroon",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "0.1.9",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Nikolaus Group",
    },
  },
  {
    kind: "multi",
    user: {
      key: "888e447d-8ee9-4435-9437-744bcba3f847",
      name: "Arlene Douglas",
      state: "Louisiana",
      city: "East Alice",
      country: "Kuwait",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "0.8.0",
    },
    department: {
      key: "Clothing",
    },
    company: {
      key: "Towne, Lemke and Hickle",
    },
  },
  {
    kind: "multi",
    user: {
      key: "408024c6-331c-47d6-af20-1c6aa5a6a4f2",
      name: "Harriet Swaniawski",
      state: "Connecticut",
      city: "Fort Tad",
      country: "Suriname",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "7.5.3",
    },
    department: {
      key: "Computers",
    },
    company: {
      key: "White, Morar and Turner",
    },
  },
  {
    kind: "multi",
    user: {
      key: "cae3b54d-f6e1-495e-8415-a8665cb6e419",
      name: "Freddie Mohr Sr.",
      state: "Iowa",
      city: "Eldoracester",
      country: "Netherlands",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "1.6.6",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Mayert - Lebsack",
    },
  },
  {
    kind: "multi",
    user: {
      key: "105c0b73-2401-481d-97b7-129f5130404b",
      name: "Lindsay Altenwerth-Moen",
      state: "California",
      city: "New Pamela",
      country: "Jordan",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "electfast",
      version: "7.0.2",
    },
    department: {
      key: "Shoes",
    },
    company: {
      key: "Beatty - Ullrich",
    },
  },
  {
    kind: "multi",
    user: {
      key: "4d2df277-d3fe-4a4b-bd96-93a317456826",
      name: "Marcia Schinner",
      state: "Arizona",
      city: "South Timmyworth",
      country: "Japan",
    },
    subscription: {
      key: "pro",
    },
    application: {
      key: "bluelightning",
      version: "6.8.0",
    },
    department: {
      key: "Kids",
    },
    company: {
      key: "Anderson - Orn",
    },
  },
  {
    kind: "multi",
    user: {
      key: "9213abf7-0391-4312-9751-b489a00d07cb",
      name: "Luz Monahan",
      state: "Texas",
      city: "Port Sydney",
      country: "Iran",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "0.0.8",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Jakubowski LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "c693a8ee-c793-4192-a3bb-5a884c95b8bb",
      name: "Mrs. Lula Kunze",
      state: "South Carolina",
      city: "East Giafurt",
      country: "Portugal",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "2.2.4",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "Ernser, Moore and Kutch",
    },
  },
  {
    kind: "multi",
    user: {
      key: "91ad0871-664c-41fb-bfe2-8f12b248e782",
      name: "Monica Brown",
      state: "Illinois",
      city: "Baldwin Park",
      country: "Norway",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "0.5.4",
    },
    department: {
      key: "Outdoors",
    },
    company: {
      key: "Price Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "a9b7ba22-18ff-4373-84ba-b60a1b991b28",
      name: "Bert Powlowski",
      state: "Utah",
      city: "West Rowenaburgh",
      country: "China",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "6.0.6",
    },
    department: {
      key: "Shoes",
    },
    company: {
      key: "Lindgren, McClure and Bernhard",
    },
  },
  {
    kind: "multi",
    user: {
      key: "ba31025b-1f53-4011-b85e-96b66a9de7ec",
      name: "Lorena Bradtke",
      state: "Florida",
      city: "Myrtistown",
      country: "Japan",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "9.6.7",
    },
    department: {
      key: "Toys",
    },
    company: {
      key: "Jakubowski, Rau and Keeling",
    },
  },
  {
    kind: "multi",
    user: {
      key: "64cf72b8-5145-412c-acbc-0b4cce63dc7c",
      name: "Rebecca Rutherford",
      state: "Virginia",
      city: "Port Emie",
      country: "Panama",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "0.8.4",
    },
    department: {
      key: "Baby",
    },
    company: {
      key: "West, Reinger and Stoltenberg",
    },
  },
  {
    kind: "multi",
    user: {
      key: "429778fa-a465-4c25-bb41-e6bc35cb82ae",
      name: "Carmen Barrows",
      state: "Maryland",
      city: "Fideltown",
      country: "Tanzania",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "electfast",
      version: "9.8.1",
    },
    department: {
      key: "Beauty",
    },
    company: {
      key: "Rippin - Schinner",
    },
  },
  {
    kind: "multi",
    user: {
      key: "03bda30f-393c-4ef9-b83c-2cb3589ca9b4",
      name: "Chad Pfeffer",
      state: "Wyoming",
      city: "Blocktown",
      country: "Benin",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "autobahn",
      version: "5.4.7",
    },
    department: {
      key: "Jewelery",
    },
    company: {
      key: "Schiller - D'Amore",
    },
  },
  {
    kind: "multi",
    user: {
      key: "d91ddd9c-950a-481b-b584-3438563b2242",
      name: "Danielle Watsica",
      state: "Arizona",
      city: "Catonsville",
      country: "Angola",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "6.9.2",
    },
    department: {
      key: "Grocery",
    },
    company: {
      key: "Collier and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "57b43dc6-0ace-46d0-bceb-ce684c6711c1",
      name: "Arnold Pacocha PhD",
      state: "Utah",
      city: "Feeneyburgh",
      country: "Monaco",
    },
    subscription: {
      key: "enterprise",
    },
    application: {
      key: "bluelightning",
      version: "8.3.9",
    },
    department: {
      key: "Home",
    },
    company: {
      key: "Gleason and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "13f2188c-5a4c-41e4-b790-1ddf29b00e94",
      name: "Derrick Jast",
      state: "Nevada",
      city: "Jonatanfurt",
      country: "Hong Kong",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "1.7.9",
    },
    department: {
      key: "Games",
    },
    company: {
      key: "Muller, Schmitt and Russel",
    },
  },
  {
    kind: "multi",
    user: {
      key: "c46d9e2d-a62f-4371-b638-8d9332252191",
      name: "Tina Kautzer",
      state: "North Carolina",
      city: "Palm Beach Gardens",
      country: "Ireland",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "autobahn",
      version: "4.4.3",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Marvin - Bartoletti",
    },
  },
  {
    kind: "multi",
    user: {
      key: "dc798278-d3bb-4e3f-90a4-fd98e913f10e",
      name: "Woodrow Purdy",
      state: "Illinois",
      city: "West Alethacester",
      country: "Paraguay",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "0.8.4",
    },
    department: {
      key: "Home",
    },
    company: {
      key: "O'Connell LLC",
    },
  },
  {
    kind: "multi",
    user: {
      key: "e0f5fa25-2ec3-4bde-94c8-9bc593abb629",
      name: "Ms. Faye Funk",
      state: "Michigan",
      city: "Auerhaven",
      country: "Guernsey",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "bluelightning",
      version: "1.8.2",
    },
    department: {
      key: "Health",
    },
    company: {
      key: "Cormier Inc",
    },
  },
  {
    kind: "multi",
    user: {
      key: "0ad565f6-e621-4d7f-a211-6c3aa5382610",
      name: "Shane McDermott",
      state: "Minnesota",
      city: "Gastonia",
      country: "South Georgia and the South Sandwich Islands",
    },
    subscription: {
      key: "basic",
    },
    application: {
      key: "bluelightning",
      version: "0.0.4",
    },
    department: {
      key: "Sports",
    },
    company: {
      key: "Koelpin and Sons",
    },
  },
  {
    kind: "multi",
    user: {
      key: "1bfd4fe4-2247-450d-8bb9-2f4abd785062",
      name: "Ben Mueller",
      state: "Hawaii",
      city: "Highlands Ranch",
      country: "Lithuania",
    },
    subscription: {
      key: "free",
    },
    application: {
      key: "autobahn",
      version: "8.4.7",
    },
    department: {
      key: "Garden",
    },
    company: {
      key: "Legros - Kiehn",
    },
  },
];

export { defaultMultiUser, defaultSingleUser };
