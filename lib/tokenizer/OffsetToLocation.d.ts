/**
 * Represents a CSS source location.
 */
export interface CssLocation {
    /**
     * Offset.
     */
    offset: number;

    /**
     * Line number.
     */
    line: number;

    /**
     * Column number.
     */
    column: number
};

/**
 * Represents a CSS source location range.
 */
export interface CssLocationRange {
    /**
     * Source file name.
     */
    source: string;

    /**
     * The start location.
     */
    start: CssLocation;

    /**
     * The end location.
     */
    end: CssLocation;
}

/**
 * OffsetToLocation is a class that converts character offsets in a source string to line/column locations.
 */
export class OffsetToLocation {
    /**
     * Creates a new instance of OffsetToLocation.
     */
    constructor();

    /**
     * Sets the source string and line/column location information for the instance.
     *
     * @param source The source string to process.
     * @param startOffset The starting character offset of the source string.
     * @param startLine The starting line number of the source string.
     * @param startColumn The starting column number of the source string.
    */
    setSource(source: string, startOffset?: number, startLine?: number, startColumn?: number): void;

    /**
     * Gets the line/column location information for the character at the specified offset in the source string.
     *
     * @param offset The character offset to get location information for.
     * @param filename The filename for the source string.
     * @returns An object with source, offset, line, and column properties containing the location information.
     */
    getLocation(offset: number, filename: string): { source: string; offset: number; line: number; column: number };

    /**
     * Returns the source location range for the given start and end offsets in the source string.
     *
     * @param start The start offset.
     * @param end The end offset.
     * @param filename The file name.
     * @returns The source location range.
     */
    getLocationRange(start: number, end: number, filename: string): CssLocation;
}
