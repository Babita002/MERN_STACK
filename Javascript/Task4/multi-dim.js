// ----------QUESTION 1-------
var songs = [];
songs.push(
  { song_name: "Sway", singer: "Michael Buble", Language: "English" },
  {
    song_name: "Senorita",
    singer: "Farhan Akhtar, Hrithik Roshan & Maria del Mar Fernandez",
    Language: "Hindi",
  },
  { song_name: "Akhiyan", singer: "Harkirat Sangha", Language: "Punjabi" },
  {
    song_name: "Lalkara",
    singer: "Diljit Dosanjh,Intense,Sultaan",
    Language: "Punjabi",
  },
  {
    song_name: "Ye Tune Kya Kiya",
    singer: "Pritam,Javed Bashir",
    Language: "Hindi",
  }
);
for (i of songs) {
  console.log(i);
}
console.log("Song name at location 3: ", songs[2].song_name);

// -----------QUESTION 2-----------
let random = [
  [
    ["Babita", "Gautam", "Mufy", "Alicia", "Albatross"],
    [23, 22, 15, 24],
    ["70k", "90k", "50k", "40k", "90k"],
  ],
  [
    ["White", "Black", "Lavender", "Brown"],
    ["clouds", "Night", "Dress", "Chocolate"],
    ["Light", "Dark", "Lightest", "Darkest"],
  ],
];
console.log(random);
console.log("Value of random[1][1]: ",random[1][1]);  

//QUESTION 3
let food_items = {
  veg: {
    w: "wheat",
    c: "cheese",
  },
  non_veg: {
    ck: "chicken kabaab",
    ec: "egg curry",
  },
};
console.log("Printing Cheese: ", food_items.veg.c);

//QUESTION 4
function flatten(nested_array){
  let flattened_array = nested_array.flat(Infinity);
  console.log(flattened_array);
}
const nested_array = [
  ["Name",
    "Age",
    "Gender",
    [
      "City",
      "State",
      "Country",
      [
        "Pincode",
        "Shipping ID"
      ]
    ]
  ]
]
flatten(nested_array);




