
//destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//THESE ARE THE SAME
const { player, experience } = obj;
let { wizardLevel } = obj;

///////////////////////////////////////

//object properties

const name = "john snow";

const obj2 = {
    [name]: "hello",
    ["ray" + "smith"]: "hihi",
    [1+2]: "hehe"
}

/////////////////////////////////////////////
//object properties

const a = "Simon";
const b = true;
const c = {};

const obj3 = {
    a : a,
    b : b,
    c : c
}
//now written as below:
const obj4 = {
    a,
    b,
    c
}

///////////////////////////////////////

//template strings back ticks ``

const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";


const greetingImproved = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;

//////////////////////////////////////
//default arguments

function greet(name="", age=30, pet="cat"){
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have.`;
}
/////////////////////
//symbol

//creates a type that will always be unique

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

sym2 === sym3 // this will return false. they are not the same type
///////////////////

// arrow functions

function add(a, b){
    return a + b;
}
const add2 = (a, b) => a + b; // if only one return in a function, this can be omitted. arrow function automatically returns a value

