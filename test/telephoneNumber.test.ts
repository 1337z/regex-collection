import * as search from "../src/index";
import * as template from "./template"

const valid = ["(123) 456-7890", "(123)456-7890", "123-456-7890", "123.456.7890", "1234567890", "+31636363634", "075-63546725"]                                // Input valid examples
const invalid = ["1234", "111", "abc", "Hello World", "00000000000000000", "1234567891011121314"]                              // Input invalid examples

template.run(search.isTelephoneNumber, search.getTelephoneNumber, valid, invalid)