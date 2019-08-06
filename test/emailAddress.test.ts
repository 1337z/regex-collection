import * as search from "../src/index";
import * as template from "./template"

const valid = ["hello@world.com", "contact@example.com", "lastname.name@subdomain.example.com", "lastname.name@example.com", "googlemail@gmail.com"]
const invalid = ["hello", "Hello@world", "hello.com", "hello@world."]

template.run(search.isEmailAddress, search.getEmailAddress, valid, invalid)