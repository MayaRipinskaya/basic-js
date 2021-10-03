import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    if (!Array.isArray(members)) {
        return false
    }
    let result = []
    members.forEach((name) => {
        if (typeof(name) === 'string') {
            name = name.trim().toUpperCase()
            result.push(name[0])
        }
        // else { return false }
    })
    return (result.sort().join(''))
}