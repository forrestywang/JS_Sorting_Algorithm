# JS_Sorting_Algorithm

A small sorting algorithm highlighting the importance of time complexity.

Both algorithms take in a string and a sorted string as parameters. They sort the characters in the same order as the sorted string, while other characters are left in the same order at the end. For example, `order('banana123@', 'nba')` should return `'nnbaaa123@'`.

Sorting Algorithm 1.js has a time complexity of O(n²) since the function uses two nested for loops. However, Sorting Algorithm 2.js has a time complexity of O(2n) since the function uses two unnested for loops.
