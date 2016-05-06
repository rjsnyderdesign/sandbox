# SnagApple Programming Challenge


## Setup

1. You need to have node.js & npm installed on your local machine ([Download Here](https://nodejs.org))
2. Clone this repo: `git clone git@bitbucket.org:snagapple/sandbox.git`
3. Run `npm install` or `sudo npm install` if it barks errors at you
4. Run `bower install` to get dependencies (jquery, angular, bootstrap - see the bower.json file) 
5. Run `gulp` to run the gulp tasks
6. Webserver: Run `gulp serve` to open a light webserver and watch for CSS or Javascript changes. URL will automatically open, usually as http://localhost:8000
7. Browsersync (using another webserver: docker, vagrant, mamp, etc): Add your development url to the `./assets/manifest.json` devUrl to use BrowserSync. Run `gulp watch` to watch for CSS or Javascript changes and compile automatically (control+C to stop watching)

## Task

1. Setup this development environment on your local computer with the instructions above. You do not have to use gulp or this exact workflow is that is an issue with your machine or dependencies, you can just add scripts, styles, etc, in a static manner. That is fine.
2. Using javascript (incl jquery, angular, backbone - whatever is your preference): do an ajax request to our api and display a filterable list of 10 properties on the page. What the property list looks like or how it functions is extirely up to you.

## Staging API Usage

You will do a `POST` call to the following url: `http://204.93.216.9:8086/property/search` with a Content-Type of `application/json` and a body of `{"basic":{"cities":["LAKEWO"]},"pageNumber":1,"resultsPerPage":10}`. This will shoot back a json document with a list of 10 properties with some information about those properties.
