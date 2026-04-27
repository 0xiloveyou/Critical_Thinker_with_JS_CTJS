



/*
// set doesn't contains duplicate elemnt
// by defauld it maintaine unique

const set = new Set()

set.add("akm")
set.add("groga")
set.add("meow")

console.log(set.has(akm)) // checks "akm" is exist ro not

console.log(set)
console.log(set.size)
*/


//---------------------------------------------------------




/*
const arr = ["apple", "apple"]

const set = new Set(arr) // array passd

console.log(set.size)
*/


//---------------------------------------------------------


/*
in set we can't use -> map, filter, find and includes
we alos can't push 

just set.add()
&
we can use forEach loop

so when we need to do some opreation 
we useually convert the set to an array


*/




//---------------------------------------------------------


/*

const arr = ["apple", "apple"]
const set = new Set(arr)
const test = Array.from(set)
console.log(test)

// now we can do thoser operation 
// like find filter map 

*/

//---------------------------------------------------------


/*

set.add("akm")
set.add("groga")
set.add("meow")

console.log(set.has(akm)) 
// checks "akm" is exist ro not
// then returns true or false


console.log(set.delete("akm")) 
// if exist then delete -> returs-> true
// else -> returns -> false 

*/
//---------------------------------------------------------

// brute force




/*
// takes  2 musch time 
// 
const arr = [1,1,1,1,321,15,15,41,654]

const removeDuplicate = (arr) => {
    const newArr = []

    arr.forEach((element) => { // anynnomus function used
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    })

    return newArr
}

console.log(removeDuplicate(arr))

*/
//---------------------------------------------------------



/*

// use hash table 
// that's why less time 


const arr = [1, 1, 1, 1, 321, 15, 15, 41, 654]

const removeDuplicate = (arr) => {

const set = new Set(arr)

return Array.from(set)
}

console.log(removeDuplicate(arr))
*/
//---------------------------------------------------------


/*

*///---------------------------------------------------------


/*

*/

//---------------------------------------------------------


/*

*///---------------------------------------------------------


/*

*/
//---------------------------------------------------------


/*

*/
//---------------------------------------------------------


/*

*/
//---------------------------------------------------------


/*

*/
//---------------------------------------------------------


/*

*/
//---------------------------------------------------------


/*

*/