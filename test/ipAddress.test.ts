import * as search from "../src/index";
import * as template from "./template"

const valid = ["127.0.0.1", "0.0.0.0", "1.1.1.1", "255.255.255.255", "123.123.123.123"]                                // Input valid examples
const invalid = ["123456", "0.0.0", "255.255.255", "1.1.1.0000", "1.1111.1.1"]                              // Input invalid examples

template.run(search.isIpAddress, search.getIpAddress, valid, invalid)