import * as search from '../src/index';

test("abc", () => {
  expect(search.isTelephoneNumber("abc")).toBe(false)
})

test("1", () => {
  expect(search.isTelephoneNumber("1")).toBe(false)
})

test("111", () => {
  expect(search.isTelephoneNumber("111")).toBe(false)
})

test("1111", () => {
  expect(search.isTelephoneNumber("1111")).toBe(false)
})

test("(123) 456-7890", () => {
  expect(search.isTelephoneNumber("(123) 456-7890")).toBe(true)
})

test("(123)456-7890", () => {
  expect(search.isTelephoneNumber("(123)456-7890")).toBe(true)
})

test("123-456-7890", () => {
  expect(search.isTelephoneNumber("123-456-7890")).toBe(true)
})

test("123.456.7890", () => {
  expect(search.isTelephoneNumber("123.456.7890")).toBe(true)
})

test("1234567890", () => {
  expect(search.isTelephoneNumber("1234567890")).toBe(true)
})

test("+31636363634", () => {
  expect(search.isTelephoneNumber("+31636363634")).toBe(true)
})

test("075-63546725", () => {
  expect(search.isTelephoneNumber("075-63546725")).toBe(true)
})

// Telephone number between text

test("(123) 456-7890", () => {
  expect(search.isTelephoneNumber("abc (123) 456-7890 abc")).toBe(false)
})