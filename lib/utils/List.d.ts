/**
 * Represents a list item in the list.
 *
 * @template TData The type of data stored in the list item.
 */
export type ListItem<TData> = {
    /**
     * The previous item in the list, or `null` if this is the first item.
     */
    prev: ListItem<TData> | null;

    /**
     * The next item in the list, or `null` if this is the last item.
     */
    next: ListItem<TData> | null;

    /**
     * The data stored in this list item.
     */
    data: TData;
};

/**
 * Represents a function that can be used to iterate over the list.
 */
export type IteratorFn<TData, TResult, TContext = List<TData>> = (
    this: TContext,
    item: TData,
    node: ListItem<TData>,
    list: List<TData>
) => TResult;

/**
 * Represents a function that can be used to filter the list.
 */
type FilterFn<TData> = (
    item: TData,
    listItem: ListItem<TData>,
    list: List<TData>
) => boolean;

/**
 * Represents a function that can be used to reduce the list.
 */
export type ReduceFn<TData, TValue, TContext = List<TData>> = (
    this: TContext,
    accum: TValue,
    data: TData
) => TValue;

/**
 * Simple doubly linked list implementation.
 *
 *                                 list
 *                               ┌──────┐
 *                ┌──────────────┼─head │
 *                │              │ tail─┼─────────────┐
 *                │              └──────┘             │
 *                ▼                                   ▼
 *              item        item        item        item
 *            ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐
 *    null <──┼─prev │<───┼─prev │<───┼─prev │<───┼─prev │
 *            │ next─┼───>│ next─┼───>│ next─┼───>│ next─┼──> null
 *            ├──────┤    ├──────┤    ├──────┤    ├──────┤
 *            │ data │    │ data │    │ data │    │ data │
 *            └──────┘    └──────┘    └──────┘    └──────┘
 *
 * @template TData The type of data stored in the list items.
 */
export class List<TData> {
    /**
     * Creates a new instance of the List class.
     */
    constructor();

    /**
     * Static factory method for creating list items.
     *
     * @param data Item data.
     * @returns
     */
    static createItem<TData>(data: TData): ListItem<TData>;

    /**
     * Allocates a new cursor and adds it to the current cursor stack.
     *
     * @param prev The previous element in the list relative to the cursor.
     * @param next The next element in the list relative to the cursor.
     * @returns The newly allocated cursor.
     */
    private allocateCursor(
        prev: ListItem<TData> | null,
        next: ListItem<TData> | null
    ): ListItem<TData>;

    /**
     * Releases the current cursor and adds it to the released cursor pool.
     */
    private releaseCursor(): void;

    /**
     * Updates the cursors of this list instance to point to the specified nodes.
     *
     * @param prevOld The old previous node to update.
     * @param prevNew The new previous node to update.
     * @param nextOld The old next node to update.
     * @param nextNew The new next node to update.
     */
    private updateCursors(
        prevOld: ListItem<TData> | null,
        prevNew: ListItem<TData> | null,
        nextOld?: ListItem<TData> | null,
        nextNew?: ListItem<TData> | null
    ): void;

    /**
     * Iterator for the list. Yields the data of each list item in order.
     */
    [Symbol.iterator](): IterableIterator<TData>;

    /**
     * Gets the size of the list.
     *
     * @returns The size of the list.
     */
    get size(): number;

    /**
     * Determines whether the list is empty.
     *
     * @returns `true` if the list is empty, otherwise `false`.
     */
    get isEmpty(): boolean;

    /**
     * Gets the first item in the list, or `null` if the list is empty.
     *
     * @returns The first item in the list, or `null` if the list is empty.
     */
    get first(): TData | null;

    /**
     * Gets the last item in the list, or `null` if the list is empty.
     *
     * @returns The last item in the list, or `null` if the list is empty.
     */
    get last(): TData | null;

    /**
     * Populates the list with the elements of the given array in the same order.
     *
     * @param array The array to create the list from.
     * @returns The list object itself.
     */
    fromArray(array: TData[]): List<TData>;

    /**
     * Converts the list to an array.
     *
     * @returns The array.
     */
    toArray(): TData[];

    /**
     * Converts the list to a JSON object. Practically, this is the same as `toArray()`.
     *
     * @returns The JSON object.
     */
    toJSON(): TData[];

    /**
     * Iterates through each item in the list and applies the given function.
     *
     * @param fn The function to apply to each item.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     */
    forEach(fn: IteratorFn<TData, void>, thisArg: unknown): void;

    /**
     * Iterates through each item in the list in reverse order and applies the given function.
     *
     * @param fn The function to apply to each item.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     */
    forEachRight(fn: IteratorFn<TData, void>, thisArg: unknown): void;

    /**
     * Reduces the list to a single value by iterating through each item and applying the given function.
     *
     * @param fn The reduction function.
     * @param initialValue The initial accumulator value.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     * @returns The final accumulator value.
     */
    reduce<TValue>(fn: ReduceFn<TData, TValue>, initialValue: TValue, thisArg: unknown): TValue;

    /**
     * Reduces the list to a single value by iterating through each item in reverse order and
     * applying the given function.
     *
     * @param fn The reduction function.
     * @param initialValue The initial accumulator value.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     * @returns The final accumulator value.
     */
    reduceRight<TValue>(
        fn: ReduceFn<TData, TValue>,
        initialValue: TValue,
        thisArg: unknown
    ): TValue;

    /**
     * Determines if at least one item in the list passes the given test.
     *
     * @param fn The test function.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     * @returns `true` if at least one item passes the test, `false` otherwise.
     */
    some(fn: IteratorFn<TData, boolean>, thisArg: unknown): boolean;

    /**
     * Creates a new list with the results of calling the given function on every item in the list.
     *
     * @param fn The map function.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     * @returns The new list.
     */
    map<TValue>(fn: IteratorFn<TData, TValue>, thisArg: unknown): List<TValue>;

    /**
     * Creates a new list with the items that pass the given test.
     *
     * @param fn The test function.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     * @returns The new list.
     */
    filter(fn: FilterFn<TData>, thisArg: unknown): List<TData>;

    /**
     * Iterates through the list until the given function returns a truthy value or the end of the list
     * is reached.
     *
     * @param start The starting point for the iteration.
     * @param fn The test function.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     */
    nextUntil(
        start: ListItem<TData> | null,
        fn: IteratorFn<TData, boolean>,
        thisArg: unknown
    ): void;

    /**
     * Iterates through the list in reverse order until the given function returns a truthy value or the
     * beginning of the list is reached.
     *
     * @param start The starting point for the iteration.
     * @param fn The test function.
     * @param thisArg The `this` value for the function. Defaults to the list instance.
     */
    prevUntil(
        start: ListItem<TData> | null,
        fn: IteratorFn<TData, boolean>,
        thisArg: unknown
    ): void;

    /**
     * Removes all items from the list.
     */
    clear(): void;

    /**
     * Creates a new list with the same items as this list.
     *
     * @returns A new list with the same items as this list.
     */
    copy(): List<TData>;

    /**
     * Prepends an item to the beginning of the list.
     *
     * @param item The item to prepend.
     * @returns The list instance.
     */
    prepend(item: ListItem<TData>): List<TData>;

    /**
     * Prepends an item containing the given data to the beginning of the list.
     *
     * @param data The data to prepend.
     * @returns The list instance.
     */
    prependData(data: TData): List<TData>;

    /**
     * Appends an item to the end of the list.
     *
     * @param item The item to append.
     * @returns The list instance.
     */
    append(item: ListItem<TData>): List<TData>;

    /**
     * Appends an item containing the given data to the end of the list.
     *
     * @param data The data to append.
     * @returns The list instance.
     */
    appendData(data: TData): List<TData>;

    /**
     * Inserts an item into the list.
     *
     * @param item The item to insert.
     * @param before The item before which the new item should be inserted. If not provided, the item will
     * be inserted at the end of the list.
     * @returns The list instance.
     */
    insert(
        item: ListItem<TData>,
        before: ListItem<TData> | null
    ): List<TData>;

    /**
     * Inserts data into the list.
     *
     * @param data The data to insert.
     * @param before The item before which the new item should be inserted. If not provided, the item will
     * be inserted at the end of the list.
     * @returns The list instance.
     */
    insertData(data: TData, before: ListItem<TData> | null): List<TData>;

    /**
     * Removes an item from the list.
     *
     * @param item The item to remove.
     * @returns The removed item.
     */
    remove(item: ListItem<TData>): ListItem<TData>;

    /**
     * Adds an item to the end of the list.
     *
     * @param data The data to be added to the list.
     */
    push(data: TData): void;

    /**
     * Removes the last item from the list and returns it.
     *
     * @returns The removed item, or `null` if the list is empty.
     */
    pop(): ListItem<TData> | null;

    /**
     * Adds an item to the beginning of the list.
     *
     * @param data The data to be added to the list.
     */
    unshift(data: TData): void;

    /**
     * Removes the first item from the list and returns it.
     *
     * @returns The removed item, or `null` if the list is empty.
     */
    shift(): ListItem<TData> | null;

    /**
     * Prepends the given list to the beginning of this list.
     *
     * @param list The list to be prepended.
     * @returns this list.
     */
    prependList(list: List<TData>): List<TData>;

    /**
     * Appends the given list to the end of this list.
     *
     * @param list The list to be appended.
     * @returns this list.
     */
    appendList(list: List<TData>): List<TData>;

    /**
     * Inserts the given list into the current list.
     * The `before` parameter is optional and it indicates the position where the list should be
     * inserted. If it is not provided, the list will be appended to the end of the current list.
     *
     * @param list The list to be inserted
     * @param before The position where the list should be inserted. If not provided, the list will be
     * appended to the end of the current list.
     */
    insertList(list: List<TData>, before?: ListItem<TData> | null): List<TData>;

    /**
     * Replaces the given `oldItem` with the given `newItemOrList`.
     * If `newItemOrList` is a List, it will be inserted in place of `oldItem`.
     * If `newItemOrList` is a ListItem, it will be inserted in place of `oldItem`.
     *
     * @param oldItem The item to be replaced
     * @param newItemOrList The item or list to replace `oldItem` with
     */
    replace(
        oldItem: ListItem<TData>,
        newItemOrList: List<TData> | ListItem<TData>
    ): void;
}
