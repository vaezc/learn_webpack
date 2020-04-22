import {show, displayName} from "./show";
// import testExport, {firstName, lastName } from "./export";
import * as testExport from "./export";

show("vae");
displayName("chang");

console.log(testExport.firstName,testExport.lastName);
testExport.testExport();
