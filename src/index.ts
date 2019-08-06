/**
 * Matches on: | (123) 456-7890 | (123)456-7890 | 123-456-7890 | 123.456.7890 | 1234567890 | +31636363634 | 075-63546725
 */
export const telephoneNumber = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/
export const isTelephoneNumber = (text: string) => modify(telephoneNumber, "i").test(text);
export const getTelephoneNumber = (text: string) => text.match(modify(telephoneNumber, "ig"))









/**
 * Adds flags to a regex
 * @param regex A valid regex (Can be a variable from this module)
 * @param flags The flags that will be added to the regex
 */
export function modify(regex: RegExp, flags: string) {
  return new RegExp(telephoneNumber, flags)
}