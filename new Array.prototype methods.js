/*
4 new Array.prototype methods in ECMAScript 2023
toSorted, toSpliced, toReversed, and with. 
The first 3 methods perform the same operation as their mutating counterparts, but return a new array. 
with also returns a new array, but with a single element updated (as described above).
Array.prototype.toSorted
https://2ality.com/2022/04/change-array-by-copy.html
https://www.sonarsource.com/blog/es2023-new-array-copying-methods-javascript/
https://blog.logrocket.com/guide-four-new-array-prototype-methods-javascript/
*/
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]



const list = [1, 5, 6, 3, 7, 8, 3, 7]
// Sort in ascending order 
const result = list.toSorted()

console.log(result)
// [1, 3, 3, 5, 6, 7, 7, 8]
console.log(list)
// [1, 5, 6, 3, 7, 8, 3, 7]



/*
be careful if you are sorting numbers or strings with accented characters. Make sure you provide a comparator function (like String's localeCompare).
*/
const numbers = [5, 3, 10, 7, 1];
const sorted = numbers.toSorted();
console.log(sorted);
// => [ 1, 10, 3, 5, 7 ]
const sortedCorrectly = numbers.toSorted((a, b) => a - b);
console.log(sortedCorrectly);
// => [ 1, 3, 5, 7, 10 ]



const strings = ["abc", "äbc", "def"];
const sorted = strings.toSorted();
console.log(sorted);
// => [ 'abc', 'def', 'äbc' ]
const sortedCorrectly = strings.toSorted((a, b) => a.localeCompare(b));
console.log(sortedCorrectly);
// => [ 'abc', 'äbc', 'def' ]



const months = ["Feb", "Mar", "Apr", "May"] 
// Insert item "Jan" at index 0 and delete 0 items
const updatedMonths = months.toSpliced(0, 0, "Jan")

console.log(updatedMonths)
// ['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log(months)
// ['Feb', 'Mar', 'Apr', 'May']



/*
toReversed doesn’t exist on the string prototype.
Array.prototype.toReversed.call(arrayLike)
*/
const s = "Ting-Chong.Ma"
console.log(Array.prototype.toReversed.call(s))



//with(index, value) method
//non-destructive version of arr[index]=value
const favorites = ["Dogs", "Cats"]
const result2 = favorites.with(0, "Lions")

console.log(result2)
// ['Lions', 'Cats']
console.log(favorites)
// ["Dogs", "Cats"]


