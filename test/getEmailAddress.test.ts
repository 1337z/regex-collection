import * as search from "../src/index";

// No valid email address

test("abcdefghijklmnop", () => {
  expect(search.getEmailAddress("abcdefghijklmnop")).toBeNull()
})

test("hello world", () => {
  expect(search.getEmailAddress("hello world")).toBeNull()
})

test("hello @ world.com", () => {
  expect(search.getEmailAddress("hello @ world.com")).toBeNull()
})

// Valid email address

test("hello@world.com", () => {
  expect(search.getEmailAddress("hello@world.com")).toStrictEqual(["hello@world.com"])
})

test("contact@1337z.ninja", () => {
  expect(search.getEmailAddress("contact@1337z.ninja")).toStrictEqual(["contact@1337z.ninja"])
})

test("googlemail@gmail.com", () => {
  expect(search.getEmailAddress("googlemail@gmail.com")).toStrictEqual(["googlemail@gmail.com"])
})

test("lastname.name@example.com", () => {
  expect(search.getEmailAddress("lastname.name@example.com")).toStrictEqual(["lastname.name@example.com"])
})

test("lastname.name@subdomain.example.com", () => {
  expect(search.getEmailAddress("lastname.name@subdomain.example.com")).toStrictEqual(["lastname.name@subdomain.example.com"])
})

// Multiple email addresses

test("hello@world.com | world@hello.com", () => {
  expect(search.getEmailAddress("hello@world.com asd world@hello.com")).toStrictEqual(["hello@world.com", "world@hello.com"])
})

// Email address in text

test("asd lastname.name@example.com asd", () => {
  expect(search.getEmailAddress("asd lastname.name@example.com asd")).toStrictEqual(["lastname.name@example.com"])
})

test("asd lastname.name@subdomain.example.com asd", () => {
  expect(search.getEmailAddress("asd lastname.name@subdomain.example.com asd")).toStrictEqual(["lastname.name@subdomain.example.com"])
})