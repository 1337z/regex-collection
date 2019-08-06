/**
 * Matches on: | (123) 456-7890 | (123)456-7890 | 123-456-7890 | 123.456.7890 | 1234567890 | +31636363634 | 075-63546725
 */
export const telephoneNumber = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/

/**
 * Checks if *text* is a telephone number.
 * @param text Input text
 */
export const isTelephoneNumber = (text: string) => is(text, telephoneNumber, "i")

/**
 * Gets all telephone numbers from *text*
 * @param text Input text
 */
export const getTelephoneNumber = (text: string) => get(text, telephoneNumber, "ig")

/**
 * Matches hex color codes like #fff | #ffffff
 */
export const hexColor = /#([a-f0-9]{6}|[a-f0-9]{3})/

/**
 * Checks if *text* is a hex color code
 * @param text Input text
 */
export const isHexColor = (text: string) => is(text, hexColor, "i")

/**
 * Gets all hex color codes from *text*
 * @param text Input text
 */
export const getHexColor = (text: string) => get(text, hexColor, "ig")

/**
 * Matches email addresses
 */
export const emailAddress = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

/**
 * Checks if *text* is an email address
 * @param text Input text
 */
export const isEmailAddress = (text: string) => is(text, emailAddress, "i") 

/**
 * Gets all email addresses from *text*
 * @param text Input text
 */
export const getEmailAddress = (text: string) => get(text, emailAddress, "ig")



/**
 * @hidden
 * @param text Input text
 * @param regex A valid regex (Can be a variable from this module)
 * @param flags The flags that will be added to the regex
 */
function is(text: string, regex: RegExp, flags: string = "") {
  return new RegExp("^" + regex.toString().substring(1, regex.toString().length - 1) + "$", flags).test(text)
}

/**
 * @hidden
 * @param text Input text
 * @param regex A valid regex (Can be a variable from this module)
 * @param flags The flags that will be added to the regex
 */
function get(text: string, regex: RegExp, flags: string = "") {
  return text.match(new RegExp(regex, flags))
}

/**
 * Adds flags to a regex
 * @param regex A valid regex (Can be a variable from this module)
 * @param flags The flags that will be added to the regex
 */
export function modify(regex: RegExp, flags: string) {
  return new RegExp(regex, flags)
}