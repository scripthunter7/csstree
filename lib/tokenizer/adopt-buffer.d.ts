/**
 * Adopt a buffer for use by the tokenizer. If the provided buffer is not large
 * enough or if no buffer is provided, a new buffer with the required size will
 * be allocated.
 *
 * @param buffer The buffer to adopt, if any.
 * @param size The minimum size required for the buffer.
 * @returns A buffer with at least the required size.
 */
export function adoptBuffer(
    buffer: Uint32Array | null,
    size: number
): Uint32Array;
