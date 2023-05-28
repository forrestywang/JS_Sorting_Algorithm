// Pre-condition: Requires the values of Str and orderStr
// Post-condition: Should sort all the characters in Str based on the order of appearance in
// orderStr and leave the unsorted ones at the last.
function order(Str, orderStr) {
			// Variable(s):
			const orderStrMap = [];
			let sortedStr = '';
			let unsortedStr = '';
			
			// Traverse Str:
			for (let i = 0; i < Str.length; i++) {
					// Make a orderStrMap of all the letters in Str sorted:
					// If the character is already defined in the map, concatonate it with the other letters:
					if (orderStrMap[Str[i]]) {
							orderStrMap[Str[i]] += Str[i];
					}
					
					// If the character is undefined in the map and exists in orderStr, make a new element in the map:
					else if (orderStrMap[Str[i]] == undefined && orderStr[i]) {
							orderStrMap[Str[i]] = Str[i];
					}
					
					// If the character is undefined in the map and does not exist in orderStr, concatonate it with unsortedStr:
					else {
							unsortedStr += Str[i];
					}
			}
			
			// Traverse orderStr:
			for (i = 0; i < orderStr.length; i++) {
					// Make a sortedStr using the elements in orderStrMap sorted based on orderStr:
					sortedStr += orderStrMap[orderStr[i]];
					
					// Remove the element from orderStrMap:
					delete orderStrMap[orderStr[i]];
			}
			
			// Output:
			console.log(sortedStr + unsortedStr);
}

// Call the function:
order('banana123@', 'nba');
