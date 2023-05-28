// Pre-condition: Requires the values of Str and orderString
// Post-condition: Should sort all the characters in Str based on the order of appearance in
// orderString and leave the unsorted ones at the last.
function order(Str, orderString) {
			// Variable(s):
			const orderStringMap = [];
			let sortedString = '';
			let unsortedString = '';
			
			// Traverse Str:
			for (let i = 0; i < Str.length; i++) {
					// Make a orderStringMap of all the letters in Str sorted:
					// If the character is already defined in the map, concatonate it with the other letters:
					if (orderStringMap[Str[i]]) {
							orderStringMap[Str[i]] += Str[i];
					}
					
					// If the character is undefined in the map and exists in orderString, make a new element in the map:
					else if (orderStringMap[Str[i]] == undefined && orderString[i]) {
							orderStringMap[Str[i]] = Str[i];
					}
					
					// If the character is undefined in the map and does not exist in orderString, concatonate it with unsortedString:
					else {
							unsortedString += Str[i];
					}
			}
			
			// Traverse orderString:
			for (i = 0; i < orderString.length; i++) {
					// Make a sortedString using the elements in orderStringMap sorted based on orderString:
					sortedString += orderStringMap[orderString[i]];
					
					// Remove the element from orderStringMap:
					delete orderStringMap[orderString[i]];
			}
			
			// Output:
			console.log(sortedString + unsortedString);
}

// Call the function:
order('banana123@', 'nba');