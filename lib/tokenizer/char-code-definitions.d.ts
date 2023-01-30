/**
 * Check if a given character code represents a digit.
 *
 * @param code The character code to check.
 * @returns `true` if the character code represents a digit, `false` otherwise.
 */
export function isDigit(code: number): boolean;

/**
 * Check if a given character code represents a hexadecimal digit.
 *
 * @param code The character code to check.
 * @returns `true` if the character code represents a hexadecimal digit, `false` otherwise.
 */
export function isHexDigit(code: number): boolean;

/**
 * Check if a given character code represents an uppercase letter.
 *
 * @param code The character code to check.
 * @returns `true` if the character code represents an uppercase letter, `false` otherwise.
 */
export function isUppercaseLetter(code: number): boolean;

/**
 * Check if a given character code represents a lowercase letter.
 *
 * @param code The character code to check.
 * @returns `true` if the character code represents a lowercase letter, `false` otherwise.
 */
export function isLowercaseLetter(code: number): boolean;

/**
 * Check if a given character code represents a letter.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a letter.
 */
export function isLetter(code: number): boolean;

/**
 * Check if a given character code represents a non-ASCII character.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a non-ASCII code point.
 */
export function isNonAscii(code: number): boolean;

/**
 * Check if a given character code represents a name-start code point.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a name-start code point.
 */
export function isNameStart(code: number): boolean;

/**
 * Check if a given character code represents a name code point.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a name code point.
 */
export function isName(code: number): boolean;

/**
 * Check if a given character code represents a non-printable code point.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a non-printable code point.
 */
export function isNonPrintable(code: number): boolean;

/**
 * Check if a given character code represents a newline code point.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a newline code point.
 */
export function isNewline(code: number): boolean;

/**
 * Check if a given character code represents a whitespace code point.
 *
 * @param code The character code to check.
 * @returns Whether the provided character code is a whitespace code point.
 */
export function isWhiteSpace(code: number): boolean;

/**
 * Check if a given pair of character codes represents a valid escape sequence.
 *
 * @param first The first character code to check.
 * @param second The second character code to check.
 * @returns Whether the provided character codes represent a valid escape sequence.
 * @see § 4.3.8. Check if two code points are a valid escape
 */
export function isValidEscape(first: number, second: number): boolean;

/**
 * Check if a given trio of character codes would start an identifier.
 *
 * @param first The first character code to check.
 * @param second The second character code to check.
 * @param third The third character code to check.
 * @returns Whether the provided character codes would start an identifier.
 * @see § 4.3.9. Check if three code points would start an identifier
 */
export function isIdentifierStart(
    first: number,
    second: number,
    third: number
): boolean;

/**
 * Check if three code points would start a number.
 *
 * @param first The first code point to check.
 * @param second The second code point to check.
 * @param third The third code point to check.
 * @returns The number of code points that would start a number, or 0 if none of them would.
 * @see § 4.3.10. Check if three code points would start a number
 */
export function isNumberStart(
    first: number,
    second: number,
    third: number
): number;

/**
 * Detect BOM (Byte Order Mark).
 *
 * @param code The code point to check.
 * @returns The number of code points in the BOM, or 0 if it's not a BOM.
 * @see https://en.wikipedia.org/wiki/Byte_order_mark
 */
export function isBOM(code: number): number;

/**
 * Get the code category for a given code point.
 *
 * @param code The code point to get the category for.
 * @returns The code category for the given code point.
 */
export function charCodeCategory(code: number): number;
