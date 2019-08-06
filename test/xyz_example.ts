import * as search from "../src/index";
import * as template from "./template"

const valid = [""]                                // Input valid examples
const invalid = [""]                              // Input invalid examples

template.run(search.isEmailAddress, search.getEmailAddress, valid, invalid)