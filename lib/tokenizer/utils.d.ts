/**
 * Calculates the length of a newline in the given source code.
 *
 * @param source The source code being parsed.
 * @param offset The current offset within the source code.
 * @param code The ASCII code of the current character in the source code.
 * @returns The length of the newline.
 */
export function getNewlineLength(
    source: string,
    offset: number,
    code: number
): number;

/**
 * Compares the character at the given offset in the given string to a reference ASCII code.
 * The comparison is case-insensitive.
 *
 * @param testStr The string to test.
 * @param offset The offset of the character to compare.
 * @param referenceCode The reference ASCII code to compare against.
 * @returns true if the character at the given offset in the string matches the reference code,
ignoring case. false otherwise.
*/
export function cmpChar(
    testStr: string,
    offset: number,
    referenceCode: number
): boolean;

/**
 * Compares a substring of a given string with a reference string.
 *
 * @param testStr The string to test.
 * @param start The start index of the substring to compare.
 * @param end The end index of the substring to compare.
 * @param referenceStr The reference string to compare with.
 * @returns `true` if the substring of the given string matches the reference string, `false`
 * otherwise.
 */
export function cmpStr(
    testStr: string,
    start: number,
    end: number,
    referenceStr: string
): boolean;

/**
 * Finds the starting index of a sequence of whitespace characters in the source string,
 * given an initial offset.
 *
 * @param source The source string to search for whitespace characters.
 * @param offset The index to start the search from.
 * @returns The starting index of the sequence of whitespace characters.
 */
export function findWhiteSpaceStart(source: string, offset: number): number;

/**
 * Finds the ending index of a sequence of whitespace characters in the source string, given
 * an initial offset.
 *
 * @param source The source string to search for whitespace characters.
 * @param offset The index to start the search from.
 * @returns The ending index of the sequence of whitespace characters.
 */
export function findWhiteSpaceEnd(source: string, offset: number): number;

/**
 * Finds the ending index of a sequence of digits in the source string, given an initial offset.
 *
 * @param source The source string to search for digits.
 * @param offset The index to start the search from.
 * @returns The ending index of the sequence of digits.
 */
export function findDecimalNumberEnd(source: string, offset: number): number;

/**
 * Consumes an escaped code point from the source string based on CSS Standard § 4.3.7.
 *
 * @param source The source string.
 * @param offset The starting offset of the escaped code point.
 * @returns The end offset of the consumed escaped code point.
 */
export function consumeEscaped(source: string, offset: number): number;

/**
 * Consumes a name from the given source code string, starting at the given offset based on
 * CSS Standard § 4.3.11.
 *
 * @param source The source code being parsed.
 * @param offset The current offset within the source code.
 * @returns The new offset after consuming the name.
 * @note This algorithm does not do the verification of the first few code points that
 * are necessary to ensure the returned code points would constitute an <ident-token>.
 * If that is the intended use, ensure that the stream starts with an identifier before
 * calling this algorithm.
 */
export function consumeName(source: string, offset: number): number;

/**
 * Consumes a number from the given source code string, starting at the given offset based on
 * CSS Standard § 4.3.12.
 *
 * @param source The source code being parsed.
 * @param offset The current offset within the source code.
 * @returns The new offset after consuming the number.
 */
export function consumeNumber(source: string, offset: number): number;

/**
 * Consumes the remnants of a bad URL from the given source code string, starting at the given offset.
 *
 * @param source The source code being parsed.
 * @param offset The current offset within the source code.
 * @returns The new offset after consuming the remnants of the bad URL.
 * @note This function consumes enough of the input stream to reach a recovery point
 * where normal tokenizing can resume.
 */
export function consumeBadUrlRemnants(source: string, offset: number): number;

/**
 * Decodes an escaped code point from the given string based on CSS Standard § 4.3.7.
 *
 * @param escaped The escaped code point string to decode.
 * @returns The decoded code point.
 * @note This algorithm assumes that escaped is valid without leading U+005C REVERSE SOLIDUS (\)
 */
export function decodeEscaped(escaped: string): string;
