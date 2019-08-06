import * as search from "../src/index";

// Non valid email address

test("abcdefghijklmnop", () => {
  expect(search.isIpAddress("abcdefghijklmnop")).toBe(false)
})

test("hello world", () => {
  expect(search.isIpAddress("hello world")).toBe(false)
})

test("999.999.999.999", () => {
  expect(search.isIpAddress("999.999.999.999")).toBe(false)
})

// Valid IP address

test("0.0.0.0", () => {
  expect(search.isIpAddress("0.0.0.0")).toBe(true)
})

test("1.1.1.1", () => {
  expect(search.isIpAddress("1.1.1.1")).toBe(true)
})

test("255.255.255.255", () => {
  expect(search.isIpAddress("255.255.255.255")).toBe(true)
})

test("127.0.0.1", () => {
  expect(search.isIpAddress("127.0.0.1")).toBe(true)
})


// IP address in text

test("asd 127.0.0.1 asd", () => {
  expect(search.isIpAddress("asd 127.0.0.1 asd")).toBe(false)
})

test("asd 127.0.0.1 asd", () => {
  expect(search.isIpAddress("asd 127.0.0.1 asd")).toBe(false)
})