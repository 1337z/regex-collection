import * as search from "../src/index";
import * as template from "./template"

const valid = ["1", "2", "+3", "1337"]                                // Input valid examples
const invalid = ["-1", "1+1", "a1", "1a", "0,1", "0.1", "+1.5", "-1.5", "+1,5", "-1,5"]                              // Input invalid examples

template.run(search.isPositiveFullNumber, search.getPositiveFullNumber, valid, invalid)