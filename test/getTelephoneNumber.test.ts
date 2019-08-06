import * as Pattern from '../src/index';

// Test without phone number

test("abc", () => {
  expect(Pattern.getTelephoneNumber("abc")).toBeNull()
})

test("1", () => {
  expect(Pattern.getTelephoneNumber("1")).toBeNull()
})

test("111", () => {
  expect(Pattern.getTelephoneNumber("111")).toBeNull()
})

test("1111", () => {
  expect(Pattern.getTelephoneNumber("1111")).toBeNull()
})

// Test only phone number

test("(123) 456-7890", () => {
  expect(Pattern.getTelephoneNumber("(123) 456-7890")).toStrictEqual(["(123) 456-7890"])
})

test("(123)456-7890", () => {
  expect(Pattern.getTelephoneNumber("(123)456-7890")).toStrictEqual(["(123)456-7890"])
})

test("123-456-7890", () => {
  expect(Pattern.getTelephoneNumber("123-456-7890")).toStrictEqual(["123-456-7890"])
})

test("123.456.7890", () => {
  expect(Pattern.getTelephoneNumber("123.456.7890")).toStrictEqual(["123.456.7890"])
})

test("1234567890", () => {
  expect(Pattern.getTelephoneNumber("1234567890")).toStrictEqual(["1234567890"])
})

test("+31636363634", () => {
  expect(Pattern.getTelephoneNumber("+31636363634")).toStrictEqual(["+31636363634"])
})

test("075-63546725", () => {
  expect(Pattern.getTelephoneNumber("075-63546725")).toStrictEqual(["075-63546725"])
})

// Test phone number in text

test("(123) 456-7890", () => {
  expect(Pattern.getTelephoneNumber("hello world (123) 456-7890 bye world")).toStrictEqual(["(123) 456-7890"])
})

test("(123)456-7890", () => {
  expect(Pattern.getTelephoneNumber("hello world (123)456-7890 bye world")).toStrictEqual(["(123)456-7890"])
})

test("123-456-7890", () => {
  expect(Pattern.getTelephoneNumber("hello world 123-456-7890 bye world")).toStrictEqual(["123-456-7890"])
})

test("123.456.7890", () => {
  expect(Pattern.getTelephoneNumber("hello world 123.456.7890 bye world")).toStrictEqual(["123.456.7890"])
})

test("1234567890", () => {
  expect(Pattern.getTelephoneNumber("hello world 1234567890 bye world")).toStrictEqual(["1234567890"])
})

test("+31636363634", () => {
  expect(Pattern.getTelephoneNumber("hello world +31636363634 bye world")).toStrictEqual(["+31636363634"])
})

test("075-63546725", () => {
  expect(Pattern.getTelephoneNumber("hello world 075-63546725 bye world")).toStrictEqual(["075-63546725"])
})