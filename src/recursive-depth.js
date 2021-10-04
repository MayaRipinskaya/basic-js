import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arr) {
        let count = 1,
            maxcount = 0;
        for (let i = 0, length = arr.length; i < length; i++) {
            if (Array.isArray(arr[i])) {
                let depth = this.calculateDepth(arr[i]);
                if (depth > maxcount) maxcount = depth;
            }
        }
        return count + maxcount;
    }
}