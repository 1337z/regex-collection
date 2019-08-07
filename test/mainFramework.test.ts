import * as search from "../src/index";
import * as template from "./template"

test("modify", () => {
  expect(search.modify(/a/, "g")).toStrictEqual(/a/g)
})