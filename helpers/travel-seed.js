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
    "description": "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It's known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison.",
    "price": "2300",
    "rating": "4"
  }, {
    "img": "https://cdn.getyourguide.com/niwziy2l9cvz/3Nl5nGC5fq2CQ0O42awIwq/0cff0ba6cc53c2e0f9c153e820fcc8d0/berlin-Brandenburg-Gate-1112x630.jpg",
    "title": "Berlin",
    "state": "Berlin",
    "country": "Germany",
    "continent": "Europe",
    "description": "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",
    "price": "5400",
    "rating": "3"
  }, {
    "img": "http://cdn.history.com/sites/2/2014/01/42-16719420.jpg",
    "title": "Tulum",
    "state": "Quintana Roo",
    "country": "Mexico",
    "continent": "North America",
    "description": "Tulum is a resort town on Mexico’s Caribbean coast, around 130 km south of Cancún. The 13th-century, walled Mayan archaeological site at Tulum National Park overlooks the sea. It incorporates the clifftop Castillo, built as a watchtower, and the Templo de las Pinturas, with a partially restored mural. Inland, the Cobá archaeological site has pyramid-shaped temples with views over the surrounding jungle.",
    "price": "3300",
    "rating": "5"
  }, {
    "img": "http://www.6am-group.com/wp-content/uploads/2016/11/austin-texas.jpg",
    "title": "Austin",
    "state": "Texas",
    "country": "United States",
    "continent": "North America",
    "description": "Austin is the state capital of Texas, an inland city bordering the Hill Country region. Home to the University of Texas flagship campus, Austin is known for its eclectic live-music scene centered around country, blues and rock. Its many parks and lakes are popular for hiking, biking, swimming and boating. South of the city, Formula One's Circuit of the Americas raceway has hosted the United States Grand Prix.",
    "price": "2000",
    "rating": "3"
  }, {
    "img": "http://www.universal-tourguide.com/wp-content/uploads/2016/09/discoverlondon.jpg",
    "title": "London",
    "country": "United Kingdom",
    "continent": "Europe",
    "description": "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
    "price": "4200",
    "rating": "4"
  }, {
    "img": "https://csumusic.files.wordpress.com/2014/06/marienplatz-munich.jpg",
    "title": "Munich",
    "state": "Bavaria",
    "country": "Germany",
    "continent": "Europe",
    "description": "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums. The city is known for its annual Oktoberfest celebration and its beer halls, including the famed Hofbräuhaus, founded in 1589. In the Altstadt (Old Town), central Marienplatz square contains landmarks such as Neo-Gothic Neues Rathaus (town hall), with a popular glockenspiel show that chimes and reenacts stories from the 16th century.",
    "price": "4300",
    "rating": "2"
  }
];

// Clears out the existing database, then re-seeds with above collection
Destination.insertMany(destinations)
  .then((docs) => {
    return console.log(docs);
  }, (e) => {
    return console.log('Unable to seed data', e);
  });