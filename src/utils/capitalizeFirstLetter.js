/**
 * Converts the first letter of a string to uppercase
 * @param {string} str - The string to capitalize
 * @returns {string} The string with the first letter capitalized
 */

export function capitalizeFirstLetter(str) {
  if (!str) return str; // Return the string as is if it's empty or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
}
