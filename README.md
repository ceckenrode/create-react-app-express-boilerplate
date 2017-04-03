# Create React App With Express Back-end

This Create React App boilerplate is integrated with an express back-end and ready to deploy to Heroku while still taking advantage of Hot-Module-Replacement when run locally.

## Usage

To begin, remove the git remotes after cloning by running `rm -rf .git`.

### Running the Application

To start the application, simply run `npm start`. This will start up the Node server and React application using a WebpackDevServer. The Node server runs on PORT 3001 by default and the WebpackDevServer runs on PORT 3000. All requests from the WebpackDevServer will be proxied to port 3001.

### Managing Front-End Dependencies

One option for managing front-end dependencies would be to cd into the client folder from the project root and install all dependencies from there.

Another option provided if you don't want to cd back and forth between the client and server would be to run all commands from the project root using `yarn client -- <args>`.

Examples:

`yarn client add axios` < - When run from the project root is equivalent to running `yarn add axios` from the client directory. So simply add `client` inbetween yarn and the rest of the command to specify the client.

`yarn client add -- --dev gulp` < - The only exeption is when passing arguments into the yarn command: an additional `--` must be provided before the argument. In this case `yarn client add -- --dev gulp` is equivelent to `yarn add --dev gulp` when run from within the client directory.

To deploy to Heroku, simply run the following commands:

`heroku create <name-of-your-app>` 

followed by:

`npm run deploy`

And that's it.
