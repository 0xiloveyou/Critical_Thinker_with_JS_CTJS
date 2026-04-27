

/*
const obj = {
    nextlevel : { courseId : "level2"},
    "Programming hero": { courseId: "level1" }
}

// breaket notaion 
console.log(obj["Programming hero"]) // valid acess 


// invalid 
//  . notation doesn't allow  separated key 
// console.log(obj.Programming hero) // Invalid acess 

*///---------------------------------------------------------



/*

const obj = {}

obj.nextLevel = { courseId : "level2"}
obj[true] = {courseId : "level1"}

console.log(obj)
// converted boolean key -> true as a string 
// when console --> we we -> true as string type key 

// limiaion of obj is we can't store key as we want 
// only string 

*/

//---------------------------------------------------------




/*


const course1 = { name : "pgramming hero "}
const couser2 = {name : "next level web 2"}

const obj = {}

obj.nextlevel = {courseId : "level2"}
obj[course1] = {courseId : "level1"}

console.log(obj)
console.log("[object object]")

// problem 
{
  nextlevel: { courseId: 'level2' },
  '[object Object]': { courseId: 'level1' }
}

*///---------------------------------------------------------




/*
const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const obj = {}

obj[couser2] = { courseId: "level2" }
obj[course1] = { courseId: "level1" }

console.log(obj)

// only one object
// cause -> course1   courrser2
// both are converted to  -->> object Object
// 2 object but same key -> object Object
// that's why only 1 working 
/// { '[object Object]': { courseId: 'level1' } }

*/
//---------------------------------------------------------



/*


const map = new Map()

map.set(false, "programmig hero") 
// assinging key & value using set()

console.log(map)

*/
//---------------------------------------------------------






/*





const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, {courseId : "level1"})
map.set(couser2, {courseId : "level2"})


console.log(map)


/// output : 
Map(2) {
  { name: 'pgramming hero ' } => { courseId: 'level1' },
  { name: 'next level web 2' } => { courseId: 'level2' }
}

*/
//---------------------------------------------------------


/*
// map.clear()
// map.size
// map.delete(key)
// map.has(key)

*/
//---------------------------------------------------------

/*


const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })

map.forEach((key, value) => console.log("key : ", key, " ", "value : ", value))

// output : 
key :  { courseId: 'level1' }   value :  { name: 'pgramming hero ' }
key :  { courseId: 'level2' }   value :  { name: 'next level web 2' }
*/
//---------------------------------------------------------





/*


const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })

map.forEach((value, key) => (key.name = "akm groga " + key.name))

console.log(map)


// output 

Map(2) {
  { name: 'akm groga pgramming hero ' } => { courseId: 'level1' },
  { name: 'akm groga next level web 2' } => { courseId: 'level2' }
}
  
*/



/*

*///---------------------------------------------------------

/*


const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })

console.log(map.keys()) // returns iterator



// output : 

[Map Iterator] {
  { name: 'pgramming hero ' },
  { name: 'next level web 2' }
}
*/

//---------------------------------------------------------



/*

const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })

console.log([...map.keys()])  
// array of object using keys only ->-> spread operator used
console.log([...map.values()]) 
// array of object using values only ->-> spread operator used



// output : 

[ { name: 'pgramming hero ' }, { name: 'next level web 2' } ]
[ { courseId: 'level1' }, { courseId: 'level2' } ]

*///---------------------------------------------------------


/*

const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })


for(let key of map.keys()){
  key.name = "akm groga " + key.name
}
console.log(map)



// output :

Map(2) {
  { name: 'akm groga pgramming hero ' } => { courseId: 'level1' },
  { name: 'akm groga next level web 2' } => { courseId: 'level2' }
}

*/
//---------------------------------------------------------

/*

const course1 = { name: "pgramming hero " }
const couser2 = { name: "next level web 2" }

const map = new Map()

map.set(course1, { courseId: "level1" })
map.set(couser2, { courseId: "level2" })

console.log(map.entries())

output : 

[Map Entries] {
  [ { name: 'pgramming hero ' }, { courseId: 'level1' } ],
  [ { name: 'next level web 2' }, { courseId: 'level2' } ]
}

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