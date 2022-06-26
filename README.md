# Mediatheque

to turn on this project you need NodeJS and Angular/Client installed ( this project used Angular/Client version 13.3.6.)s

## Download modules

Run `npm install` to install modules

## Turn on the data server

Run `npm i json-server` to install the data server

Run `npm run start:db` for a data server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

To access or see data just add the object name to the URL (exemple `http://localhost:3000/Films` to see the array Filns)

PS: if the port 3000 is in use just change it to another one exe: 5000 but you have to change the environement variable API_URL

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
