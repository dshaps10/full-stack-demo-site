#Optimizely Full Stack Node.js Demo Suite

##Brief description
This site comprises a variety of "micro-site" that SEs, AEs, and Engineers at Optimizely can use to show how Full Stack works on example sites from a variety of Optimizely's most popular verticals.

As of now, micro-sites included are:
* E-Commerce - Addison & Boss
* Media - The Daily Optiverse (partially complete)

This Full Stack demo suite attempts to solve the inherent issues with giving real-time demos on Full Stack, namely that it is impossible to demo Full Stack on a customer site like you would with our client-side products.

Each micro-site will serve as a proof of concept of Full Stack's ability to make both UI and functionality/business logic changes.  The current plan is to have, at minimum, a landing page and search results page for each micro-site.

I would encourage anyone who wants to customize the site templates to match a specific customer to do so.  Please fork this repo, customize it and/or make improvements on my existing codebase. If you feel you've made a needed improvement please make a pull request; I want this to be a community project!


##Using the Demo Suite
As of the most updated version of this ReadMe, there is no live, deployed version of this site (although this is in the plan for the future). For now, clone this repo, and run the site locally on your machine. the script, ```npm run server``` will run the site on ```localhost:3000```.

##Understanding the Experiments
Information about each experiment, including the experiment name, the variation into which the user has been bucketed, as well as what's actually being changed will be available to the client through the use of modals.  On each page where an experiment is running there will be a modal titled 'Experiment Info' which will toggle the modal when clicked.

##Technology Used
This suite is built exclusively in Node.js.  This seemed a good choice given the ubiquity of JavaScript, but I would encourage you to port this to another language if you so choose.  I used MongoDB as a database, Mongoose as an ORM, and Handlebars as a templating engine.  For a full list of dependencies please see the ```package.json``` file.

##Seeding Data
Each micro-site contains it's own seed file, found under the ```helpers``` directory. To seed the data, make sure that Mongo is installed on your machine, establish a connection to Mongo, and run the script ```npm run``` followed by the name of the seed file. As of now, that is ```shop-seed``` and ```travel-seed```.  A full list of these seed scripts is defined in ```package.json```. Because this process won't automatically end on its own be sure to press ```Ctrl + c``` to end the seeding process.  This should be done once you see the seeded JSON file output to the console.

##Notes on Code Style
You'll notice I didn't abstract much of the code within each micro-site's respective controller away into functions.  While this would make the code cleaner, I wanted most of the logic to be in one place in order to make the demo flow a bit smoother. I'll continue to abstract away much of the Node-specific functionality and if there is enough demand, I can move even more of the rendering logic into separate modules. 

##Future Plans
As I continue to iterate over this demo suite, I will add more verticals in the form of additional micro-sites.  The current backlog is as follows:
* Media micro-site
* Angular micro-site
* Financial services micro-site
* B2B micro-site
