import * as Pattern from '../src/index';

test("abc", () => {
  expect(Pattern.isTelephoneNumber("abc")).toBe(false)
})

test("(123) 456-7890", () => {
  expect(Pattern.isTelephoneNumber("(123) 456-7890")).toBe(true)
})