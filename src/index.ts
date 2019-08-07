/**
 * Matches on: | (123) 456-7890 | (123)456-7890 | 123-456-7890 | 123.456.7890 | 1234567890 | +31636363634 | 075-63546725
 */
export const telephoneNumber = /[\(\+]?\b[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}\b/

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
 * Matches IP addresses
 */
export const ipv4Address = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/

/**
 * Checks if *text* is an IP address
 * @param text Input text
 */
export const isIpv4Address = (text: string) => is(text, ipAddress, "i")

/**
 * Gets all IP addresses from *text*
 * @param text Input text
 */
export const getIpv4Address = (text: string) => get(text, ipAddress, "ig")

/**
 * Matches CSS comments
 */
export const cssComment = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//

/**
 * Checks if *text* is an CSS comment
 * @param text Input text
 */
export const isCssComment = (text: string) => is(text, cssComment, "i")

/**
 * Gets all CSS comments from *text*
 * @param text Input text
 */
export const getCssComment = (text: string) => get(text, cssComment, "ig")

/**
 * Matches a full number / integer (1 | 2 | 1337 | +1 | -2 )
 */
export const fullNumber = /(?<=\s|^|\s\+|\s\-)[+-]?\d+(?=\s|$)/

/**
 * Checks if *text* is a full number
 * @param text Input text
 */
export const isFullNumber = (text: string) => is(text, fullNumber, "i")

/**
 * Gets all full numbers from *text*
 * @param text Input text
 */
export const getFullNumber = (text: string) => get(text, fullNumber, "ig")

/**
 * Matches a positive full number / integer (1 | 2 | +3 | 1337)
 */
export const positiveFullNumber = /(?<=\s|^)\+?\d+(?=\s|$)/

/**
 * Checks if *text* is a positive full number
 * @param text Input text
 */
export const isPositiveFullNumber = (text: string) => is(text, positiveFullNumber, "i")

/**
 * Gets all positive full numbers from *text*
 * @param text Input text
 */
export const getPositiveFullNumber = (text: string) => get(text, positiveFullNumber, "ig")

/**
 * Matches a positive full number / integer (1 | 2 | +3 | 1337)
 */
export const negativeFullNumber = /(?<=\s|^)\-\d+(?=\s|$)/

/**
 * Checks if *text* is a positive full number
 * @param text Input text
 */
export const isNegativeFullNumber = (text: string) => is(text, negativeFullNumber, "i")

/**
 * Gets all positive full numbers from *text*
 * @param text Input text
 */
export const getNegativeFullNumber = (text: string) => get(text, negativeFullNumber, "ig")



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