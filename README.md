#Optimizely Full Stack Node.js Demo Suite

##Brief description
This site comprises a variety of "micro-site" that SEs, AEs, and Engineers at Optimizely can use to show how Full Stack works on example sites from a variety of Optimizely's most popular verticals.

As of now, micro-sites included are:
* E-Commerce (Resin & Steel Bikes and Gear)

This Full Stack demo suite attempts to solve the inherent issues with giving real-time demos on Full Stack, namely that it is impossible to demo Full Stack on a customer site like you would with our client-side products.

Each micro-site will serve as a proof of concept of Full Stack's ability to make both UI and functionality/business logic changes.  The current plan is to have, at minimum, a landing page and search results page for each micro-site.

I would encourage anyone who wants to customize the site templates to match a specific customer to do so.  Please fork this repo, customize it and/or make improvements on my existing codebase. If you feel you've made a needed improvement please make a pull request; I want this to be a community project!


##Using the Demo Suite
As of the most updated version of this ReadMe, there is no live, deployed version of this site (although this is in the plan for the future). For now, clone this repo, and run the site locally on your machine. the script, ```npm run server``` will run the site on ```localhost:3000```.

##Technology Used
This suite is built exclusively in Node.js.  This seemed a good choice given the ubiquity of JavaScript, but I would encourage you to port this to another language if you so choose.  I used MongoDB as a database, Mongoose as an ORM, and Handlebars as a templating engine.  For a full list of dependencies please see the ```package.json``` file.

##Seeding data
Use the file, ```seed.js```, to insert several documents into the Product collection in MongoDB. I've provided a default array of products, but this can be changed easily.  I've also provided an API endpoint at ```shop/products``` if you want to manually insert documents into the database. use a client like Postman to make the POST request to this endpoint.

##Future Plans
As I continue to iterate over this demo suite, I will add more verticals in the form of additional micro-sites.  The current backlog is as follows:
* Travel micro-site
* Media micro-site
* Angular micro-site
* Financial services micro-site
