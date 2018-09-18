'use strict';

// noinspection ES6UnusedImports
import style from "../styles/main.scss";

// noinspection ES6UnusedImports
import * as p2 from "./package2/package2"

// noinspection ES6UnusedImports
import * as logger from "./log/logger";

// Import the rest of our application.
//module.exports = require('./log/logger.js');

let n1 = new logger.Name("Gerda","Riedmann");

console.log("Hello World!");

// -r "@babel/register"
