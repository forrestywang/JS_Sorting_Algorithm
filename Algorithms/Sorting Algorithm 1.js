// Pre-condition: Requires the values of Str and orderStr
// Post-condition: Should sort all the characters in Str based on the order of appearance in
// orderStr and leave the unsorted ones at the last.
function order(Str, orderStr) {
		// Variable(s):
    let letter;
    let sortedStr = '';
    
    // Algorithm:
    // Traverse orderStr and store each character:
    for (let a = 0; a < orderStr.length; a++) {
    		letter = orderStr[a];
        
        // Traverse Str:
        for (let b = 0; b < Str.length; b++) {
            // Take out a repeating character and concatonate it into a new string while removing 
            // it from orderStr:
            if (Str[b] == letter) {
                sortedStr += letter;
                Str = Str.replace(letter, '');
            }
        }
    }
    
    // Output:
    console.log(sortedStr + Str);
}

// Call the method:
order('banana123@', 'nba');
