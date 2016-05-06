## Setup

1. You need to have node.js & npm installed on your local machine ([Download Here](https://nodejs.org))
2. Clone this repo: `git clone git@bitbucket.org:snagapple/sandbox.git`
3. Run `npm install` or `sudo npm install` if it barks errors at you
4. Run `bower install` to get dependencies (jquery, angular, bootstrap - see the bower.json file) 
5. Run `gulp` to run the gulp tasks
6. Webserver: Run `gulp serve` to open a light webserver and watch for CSS or Javascript changes. URL will automatically open, usually as http://localhost:8000
7. Browsersync (using another webserver: docker, vagrant, mamp, etc): Add your development url to the `./assets/manifest.json` devUrl to use BrowserSync. Run `gulp watch` to watch for CSS or Javascript changes and compile automatically (control+C to stop watching)
