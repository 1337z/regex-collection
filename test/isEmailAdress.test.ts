import * as search from "../src/index";

// Non valid email address

test("abcdefghijklmnop", () => {
  expect(search.isEmailAddress("abcdefghijklmnop")).toBe(false)
})

test("hello world", () => {
  expect(search.isEmailAddress("hello world")).toBe(false)
})

test("hello @ world.com", () => {
  expect(search.isEmailAddress("hello @ world.com")).toBe(false)
})

// Valid email address

test("hello@world.com", () => {
  expect(search.isEmailAddress("hello@world.com")).toBe(true)
})

test("contact@1337z.ninja", () => {
  expect(search.isEmailAddress("contact@1337z.ninja")).toBe(true)
})

test("googlemail@gmail.com", () => {
  expect(search.isEmailAddress("googlemail@gmail.com")).toBe(true)
})

test("lastname.name@example.com", () => {
  expect(search.isEmailAddress("lastname.name@example.com")).toBe(true)
})

test("lastname.name@subdomain.example.com", () => {
  expect(search.isEmailAddress("lastname.name@subdomain.example.com")).toBe(true)
})


// Email address in text

test("asd hello@world.com asd", () => {
  expect(search.isEmailAddress("asd hello@world.com asd")).toBe(false)
})

test("asd hello@world.com asd", () => {
  expect(search.isEmailAddress("asd hello@world.com asd")).toBe(false)
})