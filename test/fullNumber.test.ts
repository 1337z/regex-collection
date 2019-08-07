import * as search from "../src/index";
import * as template from "./template"

const valid = ["1", "2", "3", "3", "1337", "+1337", "-1337"]                                // Input valid examples
const invalid = ["0,1", "0.1", "1.5", "1,5", "1+1", "1337+", "1337-", "a1", "1a"]                              // Input invalid examples

template.run(search.isFullNumber, search.getFullNumber, valid, invalid)