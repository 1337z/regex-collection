import * as search from "../src/index";

// No IP address

test("abcdefghijklmnop", () => {
  expect(search.getIpAddress("abcdefghijklmnop")).toBeNull()
})

test("999.999.999.999", () => {
  expect(search.getIpAddress("999.999.999.999")).toBeNull()
})

// Only IP address

test("0.0.0.0", () => {
  expect(search.getIpAddress("0.0.0.0")).toStrictEqual(["0.0.0.0"])
})

test("1.1.1.1", () => {
  expect(search.getIpAddress("1.1.1.1")).toStrictEqual(["1.1.1.1"])
})

test("127.0.0.1", () => {
  expect(search.getIpAddress("127.0.0.1")).toStrictEqual(["127.0.0.1"])
})

test("255.255.255.255", () => {
  expect(search.getIpAddress("255.255.255.255")).toStrictEqual(["255.255.255.255"])
})



// IP addresses in text

test("asd 127.0.0.1 asd", () => {
  expect(search.getIpAddress("asd 127.0.0.1 asd")).toStrictEqual(["127.0.0.1"])
})

// Multiple IP addresses in text

test("asd 127.0.0.1 asd 1.1.1.1", () => {
  expect(search.getIpAddress("asd 127.0.0.1 asd 1.1.1.1")).toStrictEqual(["127.0.0.1", "1.1.1.1"])
})