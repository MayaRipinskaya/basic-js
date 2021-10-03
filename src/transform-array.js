import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function NoArrayException(message) {
    this.message = message;
    this.name = "NoArrayException";
}

export default function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new NoArrayException("\'arr\' parameter must be an instance of the Array!")
    }
    let mas = [...arr]
    for (let i = 0; i < mas.length; i++) {
        switch (mas[i]) {
            case "--discard-next":
                mas[i] = null;
                mas[i + 1] = null;
                break;
            case "--discard-prev":
                mas[i] = null;
                mas[i - 1] = null;
                break;
            case "--double-next":
                mas[i] = null;
                if (mas[i + 1] != null) {
                    mas[i] = mas[i + 1];
                }
                break;
            case "--double-prev":
                mas[i] = null;
                if (mas[i - 1] != null) {
                    mas[i] = mas[i - 1];
                }
                break;
            default:
            case null:
                break;
        }
    }
    return mas.filter((element) => element != null)
}