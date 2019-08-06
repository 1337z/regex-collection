import * as search from "../src/index";

// No hex color codes

test("abcdefghijklmnop", () => {
  expect(search.getHexColor("abcdefghijklmnop")).toBeNull()
})

// Only hex color codes

test("#fff", () => {
  expect(search.getHexColor("#fff")).toStrictEqual(["#fff"])
})

test("#ffffff", () => {
  expect(search.getHexColor("#ffffff")).toStrictEqual(["#ffffff"])
})

test("#352791", () => {
  expect(search.getHexColor("#352791")).toStrictEqual(["#352791"])
})

test("#464f4a", () => {
  expect(search.getHexColor("#464f4a")).toStrictEqual(["#464f4a"])
})

// Hex color codes in text

test("asd #fff asd", () => {
  expect(search.getHexColor("asd #fff asd")).toStrictEqual(["#fff"])
})

test("asd #ffffff asd", () => {
  expect(search.getHexColor("asd #ffffff asd")).toStrictEqual(["#ffffff"])
})