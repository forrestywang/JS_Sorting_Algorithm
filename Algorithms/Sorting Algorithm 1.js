// Pre-condition: Requires the values of Str and orderString
// Post-condition: Should sort all the characters in Str based on the order of appearance in
// orderString and leave the unsorted ones at the last.
function order(Str, orderString) {
		// Variable(s):
    let letter;
    let sortedString = '';
    
    // Algorithm:
    // Traverse orderString and store each character:
    for (let a = 0; a < orderString.length; a++) {
    		letter = orderString[a];
        
        // Traverse Str:
        for (let b = 0; b < Str.length; b++) {
        		// Take out a repeating character and concatonate it into a new String while removing 
            // it from orderString:
            if (Str[b] == letter) {
                sortedString += letter;
                Str = Str.replace(letter, '');
            }
        }
    }
    
    // Output:
    console.log(sortedString + Str);
}

// Call the method:
order('banana123@', 'nba');
