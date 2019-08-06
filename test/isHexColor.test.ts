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

test("#352791", () => {
  expect(search.isHexColor("#352791")).toBe(true)
})

test("#464f4a", () => {
  expect(search.isHexColor("#464f4a")).toBe(true)
})

// Hex color codes in text

test("asd #fff asd", () => {
  expect(search.isHexColor("asd #fff asd")).toBe(false)
})

test("asd #ffffff asd", () => {
  expect(search.isHexColor("asd #ffffff asd")).toBe(false)
})