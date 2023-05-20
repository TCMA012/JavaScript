const array = [{ good }, null, { great }, undefined]

const truthyArray = array.filter(Boolean)
// truthyArray = [{ good }, { great }]

/*
The filter(Boolean) step does the following:

Passes each item in the array to the Boolean() object
The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
If the item is truthy, we keep it
*/
array.filter(item => Boolean(item)) 
￼
//is the same as this:

array.filter(Boolean)
//a "tacit" or "point-free" style. We don't name each item and pass it into Boolean, but JavaScript understands that Boolean takes one argument, so it takes the argument filter() exposes and passes it to Boolean for you.

