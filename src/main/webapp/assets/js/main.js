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

//import * as ig from "kotlin_build/kotlinApp";
//import * as ig from "../../../../../kotlin_build/kotlinApp";
import * as ig from "kotlin_build/kotlinApp";

let kn = new ig.app.KotlinName("Mike", "Mitterer");

console.log(`!${kn.fullname}!!`);
//let igx = new ig._

// -r "@babel/register"
