import {show, displayName} from "./show";
// import testExport, {firstName, lastName } from "./export";


import * as testExport from "./export";
import {cube} from "./math";

console.log(cube(5));

// console.log(
//     _.join([["Main", "module", "loaded!"], " "])
// );
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
