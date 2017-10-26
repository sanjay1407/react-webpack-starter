# react-webpack-starter
## Getting Started

#### 1. Get the latest version

You can start by cloning the latest version of project on your
local machine by running:

```shell
$ git clone https://github.com/mitalawachat/react-webpack-starter.git MyApp
$ cd MyApp
```
#### 2. Run `yarn install` or `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

#### 3. Run `yarn start` or `npm start`

This command will start the app from the source files (`/src`).
> [http://localhost:8080/](http://localhost:8080/)

Whenever you modify any of the source files inside the `/src` folder, the app will recompile and refresh all the connected browsers.

#### 4. Build, Lint, Test

##### - Build the app:

```shell
$ yarn run build
```
or
`npm run build`

After running this command, the `/dist` folder will contain the compiled
version of the app. Open `index.html` from `/dist` in browser to run the application.

##### - Check the source code against lint rules:

```shell
$ yarn run lint
```
or
`npm run lint`

##### - Execute unit tests:

```shell
$ yarn run test
```
or
`npm run test`
