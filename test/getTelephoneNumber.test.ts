import * as search from '../src/index';

// Test without phone number

test("abc", () => {
  expect(search.getTelephoneNumber("abc")).toBeNull()
})

test("1", () => {
  expect(search.getTelephoneNumber("1")).toBeNull()
})

test("111", () => {
  expect(search.getTelephoneNumber("111")).toBeNull()
})

test("1111", () => {
  expect(search.getTelephoneNumber("1111")).toBeNull()
})

// Test only phone number

test("(123) 456-7890", () => {
  expect(search.getTelephoneNumber("(123) 456-7890")).toStrictEqual(["(123) 456-7890"])
})

test("(123)456-7890", () => {
  expect(search.getTelephoneNumber("(123)456-7890")).toStrictEqual(["(123)456-7890"])
})

test("123-456-7890", () => {
  expect(search.getTelephoneNumber("123-456-7890")).toStrictEqual(["123-456-7890"])
})

test("123.456.7890", () => {
  expect(search.getTelephoneNumber("123.456.7890")).toStrictEqual(["123.456.7890"])
})

test("1234567890", () => {
  expect(search.getTelephoneNumber("1234567890")).toStrictEqual(["1234567890"])
})

test("+31636363634", () => {
  expect(search.getTelephoneNumber("+31636363634")).toStrictEqual(["+31636363634"])
})

test("075-63546725", () => {
  expect(search.getTelephoneNumber("075-63546725")).toStrictEqual(["075-63546725"])
})

// Test phone number in text

test("asd (123) 456-7890 asd", () => {
  expect(search.getTelephoneNumber("asd (123) 456-7890 asd")).toStrictEqual(["(123) 456-7890"])
})

test("asd (123)456-7890 asd", () => {
  expect(search.getTelephoneNumber("asd (123)456-7890 asd")).toStrictEqual(["(123)456-7890"])
})

test("asd 123-456-7890 asd", () => {
  expect(search.getTelephoneNumber("asd 123-456-7890 asd")).toStrictEqual(["123-456-7890"])
})

test("asd 123.456.7890 asd", () => {
  expect(search.getTelephoneNumber("asd 123.456.7890 asd")).toStrictEqual(["123.456.7890"])
})

test("asd 1234567890 asd", () => {
  expect(search.getTelephoneNumber("asd 1234567890 asd")).toStrictEqual(["1234567890"])
})

test("asd +31636363634 asd", () => {
  expect(search.getTelephoneNumber("asd +31636363634 asd")).toStrictEqual(["+31636363634"])
})

test("asd 075-63546725 asd", () => {
  expect(search.getTelephoneNumber("asd 075-63546725 asd")).toStrictEqual(["075-63546725"])
})

// Multiple telephone numbers in text

test("asd 1234567890 asd +31636363634", () => {
  expect(search.getTelephoneNumber("asd 1234567890 asd")).toStrictEqual(["1234567890", "+31636363634"])
})

test("asd +31636363634 asd 075-63546725", () => {
  expect(search.getTelephoneNumber("asd +31636363634 asd")).toStrictEqual(["+31636363634", "075-63546725"])
})

test("asd 075-63546725 asd 1234567890", () => {
  expect(search.getTelephoneNumber("asd 075-63546725 asd")).toStrictEqual(["075-63546725", "1234567890"])
})