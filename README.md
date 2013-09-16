Explanatory blog post for this demo is available on [Viget.com](http://viget.com/extend)

## Project Setup via [Backbone-Require-Boilerplate-Lite](https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate-Lite)
   1. Download and install [Node.js](http://nodejs.org/#download)
   2. Clone this repository
   3. On the command line, type `npm install nodemon -g` to install the [nodemon](https://github.com/remy/nodemon) library globally.  If it complains about user permissions type `sudo npm install nodemon -g`.
   4.  If you have installed [Grunt](http://gruntjs.com/) globally in the past, you will need to remove it first by typing `npm uninstall -g grunt`.  If it complains about user permissions, type `sudo npm uninstall -g grunt`.
   5.  Next, install the latest version of [Grunt](http://gruntjs.com/) by typing `npm install -g grunt-cli`.  If it complains about user permissions, type `sudo npm install -g grunt-cli`.
   6. Navigate inside of the grunt-git-hooks-demo folder and type `npm install`
   7. Next, type `nodemon` (this will start your Node.js web server and restart the server any time you make a file change thanks to the wonderful **nodemon** library)
   8. To view the demo page, go to `http://localhost:8001`
   9. To view the Jasmine test suite page, go to `http://localhost:8001/specRunner.html`

## Git Hooks Setup

Type `grunt githooks` to set up the pre-commit hook specified in `Gruntfile.js`. You may also type `grunt` since githooks is a default task in this example.
