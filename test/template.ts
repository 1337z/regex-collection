export const run = (isFunction: Function, getFunction: Function, valid: string[], invalid: string[]) => {

  /**
   * Test every valid example against regex
   */
  valid.forEach(element => {
    test(`Valid: ${element}`, () => {
      expect(isFunction(element)).toBe(true)
    })
  })

  /**
   * Test every invalid example against regex
   */
  invalid.forEach(element => {
    test(`Invalid: ${element}`, () => {
      expect(isFunction(element)).toBe(false)
    })
  })

  /**
   * Test every valid example in text against regex
   */
  valid.forEach(element => {
    test(`Invalid: asd ${element} asd`, () => {
      expect(isFunction(`asd ${element} asd`)).toBe(false)
    })
  })

  /**
   * Get every valid example from text
   */
  valid.forEach(element => {
    test(`Valid: asd ${element} asd`, () => {
      expect(getFunction(`asd ${element} asd`)).toStrictEqual([element])
    })
  })

  /**
   * Get multiple valid examples from text
   */
  valid.forEach(element => {
    test(`Multiple valid: asd ${element} asd ${element}`, () => {
      expect(getFunction(`asd ${element} asd ${element}`)).toStrictEqual([element, element])
    })
  })

  /**
   * Return null for every invalid example
   */
  invalid.forEach(element => {
    test(`Return null for: ${element}`, () => {
      expect(getFunction(element)).toBeNull()
    })
  })
}