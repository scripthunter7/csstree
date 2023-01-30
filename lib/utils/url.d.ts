/**
 * Decodes URL string by replacing escaped characters with their unescaped counterparts
 *
 * @param str The string to decode
 * @returns Decoded string
 */
export function decode(str: string): string;

/**
 * Encodes URL string by replacing characters with their escaped counterparts
 *
 * @param str The string to encode
 * @returns The encoded string
 */
export function encode(str: string): string;
