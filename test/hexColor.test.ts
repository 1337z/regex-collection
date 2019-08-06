import * as search from "../src/index";
import * as template from "./template"

const valid = ["#fff", "#ffffff", "#000", "#000000", "#3027db", "#406948", "#000d03"]
const invalid = ["Hello World", "fff", "ffffff", "000", "000000"]

template.run(search.isHexColor, search.getHexColor, valid, invalid)