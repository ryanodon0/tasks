/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNumbers = numbers.map((num: number): number => num * 3);
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const isNumber = (num: string): number =>
        !Number.isNaN(Number(num)) ? Number(num) : 0;
    const newNums = numbers.map(isNumber);
    return newNums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removedDollars = amounts.map((amount: string): string =>
        amount[0] == "$" ? amount.slice(1) : amount,
    );
    return stringsToIntegers(removedDollars);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const endsInQuestionMark = messages.filter(
        (message: string): boolean => message[message.length - 1] != "?",
    );
    const endsInExclamationMark = endsInQuestionMark.map(
        (message: string): string =>
            message[message.length - 1] == "!" ?
                message.toUpperCase()
            :   message,
    );
    return endsInExclamationMark;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThanFourWords = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return lessThanFourWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allRGB = colors.every(
        (color: string): boolean =>
            color.toLowerCase() == "red" ||
            color.toLowerCase() == "green" ||
            color.toLowerCase() == "blue",
    );
    return allRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0,
    );
    const equation = addends.join("+");
    return sum + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0,
    );
    let tempValues: number[] = [...values];
    if (firstNegative != -1) {
        tempValues.splice(firstNegative);
    }
    const sum = tempValues.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0,
    );
    if (firstNegative != -1) {
        tempValues.push(values[firstNegative]);
    }
    tempValues.push(sum);
    if (firstNegative != -1) {
        const copyValues = [...values];
        copyValues.splice(0, firstNegative + 1);
        const combinedValues = [...tempValues, ...copyValues];
        return combinedValues;
    }
    return tempValues;
}
