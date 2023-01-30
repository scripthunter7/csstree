/**
 * Gets the descriptor for the given keyword.
 *
 * @param keyword The keyword to get the descriptor for.
 * @returns The descriptor for the keyword.
 */
export function keyword(keyword: string): unknown;

/**
 * Gets the descriptor for the given property.
 *
 * @param property The property to get the descriptor for.
 * @returns The descriptor for the property.
 */
export function property(property: string): unknown;

/**
 * Gets the vendor prefix for the given string.
 *
 * @param str The string to get the vendor prefix for.
 * @param offset The offset within the string to start looking for the vendor prefix.
 * @returns The vendor prefix for the string, or an empty string if no vendor prefix was found.
 */
export function vendorPrefix(str: string, offset?: number): string;

/**
 * Determines whether the given string is a custom property.
 *
 * @param str The string to test.
 * @param offset The offset within the string to start looking for the custom property indicator.
 * @returns `true` if the string is a custom property, or `false` otherwise.
 */
export function isCustomProperty(str: string, offset?: number): boolean;
