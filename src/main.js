import {show, displayName} from "./show";
// import testExport, {firstName, lastName } from "./export";


import * as testExport from "./export";
import {cube} from "./math";
import Print from './print';



console.log(cube(5));
Print('vae');

import(/*webpackChunkName: "lodash" */ "lodash").then(({default: _}) => {
    console.log(_.join(['hello','webpack','']));
}).catch(error => {
    console.log(error);
})



show("vae");
displayName("chang");
console.log('I get called from print.js!');
console.log(testExport.firstName,testExport.lastName);
testExport.testExport();
