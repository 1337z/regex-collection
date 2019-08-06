import * as search from "../src/index";

const valid = ["127.0.0.1", "0.0.0.0", "1.1.1.1", "255.255.255.255", "123.123.123.123"]                                // Input valid examples
const invalid = ["123456", "0.0.0", "255.255.255", "1.1.1.0000", "1.1111.1.1"]                              // Input invalid examples

const isFunction = (text: string) => {
  return search.isIpAddress(text)              // Change to the `is` function
} 

const getFunction = (text: string) => {
  return search.getIpAddress(text)             // Change to the `get` function
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