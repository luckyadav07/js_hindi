const heroes=["thor","lki","spidy"]

const dchero=["superman","wonderwoman"]

// heroes.push(dchero);

// console.log(heroes);
// console.log(dchero);



//arrays treated everone as obj

// console.log(heroes.concat(dchero))

 const anotherarray=[1,2,3,[4,5,6],7,[7,6,5,[75]]]
 const realanotherarray=anotherarray.flat(Infinity)

console.log(realanotherarray)

//flat connects all array inside array
//--------------------------------------------------------

//FINISH

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

