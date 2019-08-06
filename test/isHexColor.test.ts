import * as search from "../src/index";

// No hex color codes

test("abcdefghijklmnop", () => {
  expect(search.isHexColor("abcdefghijklmnop")).toBe(false)
})

// Only hex color codes

test("#fff", () => {
  expect(search.isHexColor("#fff")).toBe(true)
})

test("#ffffff", () => {
  expect(search.isHexColor("#ffffff")).toBe(true)
})

// Hex color codes in text

test("#fff", () => {
  expect(search.isHexColor("asd #fff asd")).toBe(false)
})

test("#ffffff", () => {
  expect(search.isHexColor("asd #ffffff asd")).toBe(false)
})