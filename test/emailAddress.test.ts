import * as search from "../src/index";

const valid = ["hello@world.com", "contact@example.com", "lastname.name@subdomain.example.com", "lastname.name@example.com", "googlemail@gmail.com"]
const invalid = ["hello", "Hello@world", "hello.com", "hello@world."]

const isFunction = (text: string) => {
  return search.isEmailAddress(text)
} 

const getFunction = (text: string) => {
  return search.getEmailAddress(text)
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