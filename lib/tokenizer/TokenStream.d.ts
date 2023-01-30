import { tokenize as tokenizeFn } from ".";

/**
 * Represents a tokenizer function or a noop function.
 */
export type TokenizeOrNoopFn = typeof tokenizeFn | (() => void);

/**
 * A stream of tokens, represented as a pair of buffers and an index into those buffers.
 * The `offsetAndType` buffer stores a 24-bit token type and a 24-bit token end offset for
 * each token. The `balance` buffer stores the index of the matching closing token for each
 * token.
 */
export class TokenStream {
    /**
     * Create a new token stream.
     *
     * @param source The source code to tokenize.
     * @param tokenizer The tokenizer function to use.
     */
    constructor(source: string, tokenize: TokenizeOrNoopFn);

    /**
     * Resets the token stream to its initial state. This is called by the tokenizer
     * when it is finished tokenizing the source string. It is also called by the
     * `setSource` method to reset the stream before tokenizing a new source string.
     */
    reset(): void;

    /**
     * Sets the source to tokenize and tokenizes it.
     *
     * @param source The source string to tokenize.
     * @param tokenizer A function that tokenizes the source string. It should call
     * the provided onToken callback for each token.
     */
    setSource(source, tokenizer: TokenizeOrNoopFn): void;

    /**
     * Returns the type of the token at the specified offset from the current token.
     *
     * @param offset The offset of the token to look up, relative to the current token.
     * @returns The type of the token.
     */
    lookupType(offset: number): number;

    /**
     * Returns the end offset of the token at the specified offset from the current token.
     *
     * @param offset The offset of the token to look up, relative to the current token.
     * @returns The end offset of the token.
     */
    lookupOffset(offset: number): number;

    /**
     * Returns `true` if the token at the specified offset from the current token has the
     * specified value.
     *
     * @param offset The offset of the token to look up, relative to the current token.
     * @param referenceStr The reference string to compare the value of the token to.
     * @returns `true` if the token has the specified value, `false` otherwise.
     */
    lookupValue(offset: number, referenceStr: string): boolean;

    /**
     * Returns the start offset of the token at the specified index.
     *
     * @param tokenIndex The index of the token.
     * @returns The start offset of the token.
     */
    getTokenStart(tokenIndex: number): number;

    /**
     * Returns a substring of the source string, starting at the specified offset and ending at
     * the start offset of the current token.
     *
     * @param start The start offset of the substring.
     * @returns The substring.
     */
    substrToCursor(start: number): string;

    /**
     * Returns `true` if the token at the current index is a balance edge, i.e. it is the opening
     * or closing token of a balanced pair.
     *
     * @param pos The position to check.
     * @returns `true` if the token at the current index is a balance edge, `false` otherwise.
     */
    isBalanceEdge(pos: number): boolean;

    /**
     * Returns `true` if the token at the specified offset from the current token (or the current
     * token if no offset is specified) is a delimiter with the specified code.
     *
     * @param code The code of the delimiter to check for.
     * @param offset The offset of the token to check, relative to the current token.
     * @returns `true` if the token is a delimiter with the specified code, `false` otherwise.
     */
    isDelim(code: number, offset?: number): boolean;

    /**
     * Advances the token stream by the specified number of tokens.
     *
     * @param tokenCount The number of tokens to skip.
     */
    skip(tokenCount: number): void;

    /**
     * Advances the token stream to the next token.
     */
    next(): void;

    /**
     * Skips all white space and comment tokens in the token stream until a non-white space and
     * non-comment token is encountered.
     */
    skipSC(): void;

    /**
     * Skips tokens in the token stream until a balanced block of tokens is encountered, as determined
     * by the `stopConsume` callback.
     *
     * @param startToken The index of the token to start skipping from.
     * @param stopConsume
     * A callback that determines whether to stop skipping tokens and return. The callback takes in a
     * single argument: the code of the current token being skipped. It should return one of the following
     * values:
     *   - `0` to continue skipping tokens
     *   - `1` to stop skipping tokens and return
     *   - `2` to stop skipping tokens and return, including the current token in the result
     */
    skipUntilBalanced(
        startToken: number,
        stopConsume: (code: number) => number
    ): void;

    /**
     * Iterates over all the tokens in the token stream and calls the provided callback function for each
     * token.
     *
     * @param fn A callback function that is called for each token in the token stream. It is passed the
     * token type, start offset, end offset, and index of the token as arguments.
     */
    forEachToken(
        fn: (type: number, start: number, end: number, index: number) => void
    ): void;

    /**
     * Returns an array of objects containing information about each token in the token stream.
     *
     * @returns Token dump, practically a JSON representation of the token stream.
     */
    dump(): {
        /**
         * The index of the token in the token stream.
         */
        idx: number;

        /**
         * The name of the token type.
         */
        type: string;

        /**
         * The text of the token.
         */
        chunk: string;

        /**
         * The index of the token that balances the current token, or `null` if the current token
         * is not balanced.
         */
        balance: number | null;
    }[];
}
