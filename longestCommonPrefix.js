let longestCommonPrefix = function (strs) {
    //find a prefix variable, prefix = ' '
    //loop through all characters (char, index)
    //  inside loop want to loop through strings, gives us single string we can use
    //    if str of index is equal to our character, we know we can continue, if not equal we want to exit out and return prefix.
    //prefix = prefix + char
    //return prefix

    let prefix = '';
    if (strs.length === 0) return prefix;
    //edge case if all strings length is 0

    //looping through all different characters of our first string
    //strs[0] is first string in array
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
}