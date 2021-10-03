import { NotImplementedError } from '../extensions/index.js';


/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
    // throw new NotImplementedError('Not implemented');
    let count = 0
    let deep = backyard.flat()
    for (let i = 0; i < deep.length; i++) {
        if (deep[i] === '^^') {
            count++
        }
    }
    return count
}