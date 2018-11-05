# Summary
DazboardUI

# Install
 - This microservice requires you to have NodeJS installed. If you do not, please follow instructions here: https://nodejs.org/en/download/
 - Once you have Node installed, from the root directory of this filesystem, run: `npm install`


# Run
We have the option of running in either development mode or production mode.
In development mode we have 2 servers running: the NodeJS server serving the backend, and webpack dev server serving the front end code (this provides hot reloading). The Node server uses nodemon, which automatically restarts the server any time server side code changes.
In production mode we have only the node server running. The client side code is bundled into static files using webpack, and is served by the NodeJS server.

To start the service in production mode, run: `yarn start` or `npm start`

# Use
If running the microservice in development mode, your default browser should automatically open a new tab directed to `localhost:3000`
If running in production mode, direct your browser to `localhost:8080`
