import * as search from "../src/index";

const valid = ["#fff", "#ffffff", "#000", "#000000", "#3027db", "#406948", "#000d03"]
const invalid = ["fff", "ffffff", "000", "000000"]

const isFunction = (text: string) => {
  return search.isHexColor(text)
} 

const getFunction = (text: string) => {
  return search.getHexColor(text)
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