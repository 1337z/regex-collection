import * as search from "../src/index";

const valid = ["(123) 456-7890", "(123)456-7890", "123-456-7890", "123.456.7890", "1234567890", "+31636363634", "075-63546725"]                                // Input valid examples
const invalid = ["1234", "111", "abc", "Hello World", "00000000000000000", "1234567891011121314"]                              // Input invalid examples

const isFunction = (text: string) => {
  return search.isTelephoneNumber(text)              // Change to the `is` function
} 

const getFunction = (text: string) => {
  return search.getTelephoneNumber(text)             // Change to the `get` function
}

/**
 * Test every valid example against regex
 */
valid.forEach(element => {
  test(element, () => {
    expect(isFunction(element)).toBe(true)
  })
})

/**
 * Test every invalid example against regex
 */
invalid.forEach(element => {
  test(element, () => {
    expect(isFunction(element)).toBe(false)
  })
})

/**
 * Test every valid example in text against regex
 */
valid.forEach(element => {
  test(element, () => {
    expect(isFunction(`asd ${element} asd`)).toBe(false)
  })
})

/**
 * Get every valid example from text
 */
valid.forEach(element => {
  test(element, () => {
    expect(getFunction(`asd ${element} asd`)).toStrictEqual([element])
  })
})

/**
 * Get multiple valid examples from text
 */
valid.forEach(element => {
  test(element, () => {
    expect(getFunction(`asd ${element} asd ${element}`)).toStrictEqual([element, element])
  })
})

/**
 * Get every invalid example from text
 */
invalid.forEach(element => {
  test(element, () => {
    expect(getFunction(`asd ${element} asd`)).toBeNull()
  })
})