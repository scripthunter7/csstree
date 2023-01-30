/**
 * Decodes a quoted string by replacing escaped characters with their unescaped counterparts.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
export function decode(str: string): string;

/**
 * Encodes a quoted string by replacing characters with their escaped counterparts.
 * Based on CSS standard § 2.1. Common Serializing Idioms
 *
 * @param str The string to encode
 * @param apostrophe The quote to use
 * @returns The encoded string
 * @see https://drafts.csswg.org/cssom/#serialize-a-string
 */
export function encode(str: string, apostrophe: number): string;
