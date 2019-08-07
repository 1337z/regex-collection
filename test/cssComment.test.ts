import * as search from "../src/index";
import * as template from "./template"

const valid = ["/* Hello World */", "/* Hello \n World */", "/* Hello \n World \n What's \n up \n ? */"]                                // Input valid examples
const invalid = ["Hello World"]                              // Input invalid examples

template.run(search.isCssComment, search.getCssComment, valid, invalid)