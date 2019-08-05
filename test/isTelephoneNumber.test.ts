import * as Pattern from '../src/index';

test("abc", () => {
  expect(Pattern.isTelephoneNumber("abc")).toBe(false)
})

test("1", () => {
  expect(Pattern.isTelephoneNumber("1")).toBe(false)
})

test("111", () => {
  expect(Pattern.isTelephoneNumber("111")).toBe(false)
})

test("1111", () => {
  expect(Pattern.isTelephoneNumber("1111")).toBe(false)
})

test("(123) 456-7890", () => {
  expect(Pattern.isTelephoneNumber("(123) 456-7890")).toBe(true)
})

test("(123)456-7890", () => {
  expect(Pattern.isTelephoneNumber("(123)456-7890")).toBe(true)
})

test("123-456-7890", () => {
  expect(Pattern.isTelephoneNumber("123-456-7890")).toBe(true)
})

test("123.456.7890", () => {
  expect(Pattern.isTelephoneNumber("123.456.7890")).toBe(true)
})

test("1234567890", () => {
  expect(Pattern.isTelephoneNumber("1234567890")).toBe(true)
})

test("+31636363634", () => {
  expect(Pattern.isTelephoneNumber("+31636363634")).toBe(true)
})

test("075-63546725", () => {
  expect(Pattern.isTelephoneNumber("075-63546725")).toBe(true)
})
