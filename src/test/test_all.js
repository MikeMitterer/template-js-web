// let testsContext = require.context(".", true, /_test\.js$/);
// testsContext.keys().forEach(testsContext);

import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// modify this line to point to your jasmine.json
jasmine.loadConfigFile('src/test/jasmine.conf.json');
jasmine.execute();