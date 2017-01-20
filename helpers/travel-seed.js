// local packages
let {Destination} = require('../models/destinations');
let {mongoose} = require('../db/mongoose');

// collection of documents pertaining to Product models
let destinations = [
  {
    "img": "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ",
    "title": "San Francisco",
    "state": "California",
    "country": "United States",
    "continent": "North America",
    "description": "Visit the wonderful, eclectic, city by the Bay",
    "rate": "2300"
  }, {
    "img": "https://cdn.getyourguide.com/niwziy2l9cvz/3Nl5nGC5fq2CQ0O42awIwq/0cff0ba6cc53c2e0f9c153e820fcc8d0/berlin-Brandenburg-Gate-1112x630.jpg",
    "title": "Berlin",
    "state": "Berlin",
    "country": "Germany",
    "continent": "Europe",
    "description": "An historic city with a lot of modern charm",
    "rate": "5400"
  }, {
    "img": "http://cdn.history.com/sites/2/2014/01/42-16719420.jpg",
    "title": "Tulum",
    "state": "Quintana Roo",
    "country": "Mexico",
    "continent": "North America",
    "description": "Tulum is a resort town on Mexico’s Caribbean coast, around 130 km south of Cancún. The 13th-century, walled Mayan archaeological site at Tulum National Park overlooks the sea. It incorporates the clifftop Castillo, built as a watchtower, and the Templo de las Pinturas, with a partially restored mural. Inland, the Cobá archaeological site has pyramid-shaped temples with views over the surrounding jungle.",
    "rate": "3300"
  }, {
    "img": "http://www.6am-group.com/wp-content/uploads/2016/11/austin-texas.jpg",
    "title": "Austin",
    "state": "Texas",
    "country": "United States",
    "continent": "North America",
    "description": "Austin is the state capital of Texas, an inland city bordering the Hill Country region. Home to the University of Texas flagship campus, Austin is known for its eclectic live-music scene centered around country, blues and rock. Its many parks and lakes are popular for hiking, biking, swimming and boating. South of the city, Formula One's Circuit of the Americas raceway has hosted the United States Grand Prix.",
    "rate": "2000"
  }, {
    "img": "http://www.universal-tourguide.com/wp-content/uploads/2016/09/discoverlondon.jpg",
    "title": "London",
    "country": "United Kingdom",
    "continent": "Europe",
    "description": "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
    "rate": "4200"
  }
];

// Clears out the existing database, then re-seeds with above collection
Destination.insertMany(destinations)
  .then((docs) => {
    return console.log(docs);
  }, (e) => {
    return console.log('Unable to seed data', e);
  });