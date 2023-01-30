/**
 * Decodes an ident string by replacing escaped characters with their unescaped counterparts.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
export function decode(str: string): string;

/**
 * Encodes an ident string by replacing characters with their escaped counterparts.
 * Based on CSS standard § 2.1. Common Serializing Idioms
 *
 * @param str The string to encode
 * @returns The encoded string
 * @see https://drafts.csswg.org/cssom/#serialize-an-identifier
 */
export function encode(str: string): string;
