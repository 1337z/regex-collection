import * as search from "../src/index";
import * as template from "./template"

test("modify g flag", () => {
  expect(search.modify(/a/, "g")).toStrictEqual(/a/g)
})

test("modify i flag", () => {
  expect(search.modify(/a/, "i")).toStrictEqual(/a/i)
})