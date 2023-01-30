import * as TokenType from "./types";

/**
 * This callback is invoked by the `tokenize` function if a token is found.
 *
 * @param type Type of the token found
 * @param start Start offset of the token
 * @param end End offset of the token
 */
export type TokenizerCallback = (
    type: typeof TokenType[keyof typeof TokenType],
    start: number,
    end: number
) => void;

/**
 * This function is used to tokenize a CSS source code. It will call the
 * `onToken` callback for each token found, passing the token type and the
 * start and end offset of the token.
 *
 * @param source Source code to tokenize
 * @param onToken Function to call for each token found
 */
export function tokenize(source: string, onToken: TokenizerCallback): void;
