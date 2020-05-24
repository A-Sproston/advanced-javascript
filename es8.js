"Turtle".padStart(10);
//"          Turtle"
"Turtle".padEnd(10);
//"Turtle          "

const fun = (a,b,c,d,) => {     // trailing comma
    console.log(a)
}

fun(1,2,3,4,)   //trailing comma

const fun = (
            a,
            b, 
            c, 
            d, 
            ) => {     // trailing comma
    console.log(a)
}



Object.values
Object.entries
Object.keys //old

let obj = {
    username0: "santa",
    username1: "rudolf",
    username3: "mr.grinch"
}

Object.values(obj).forEach(value => {
    console.log(value);
});
//loops through the object as if it were an array and prints the values


Object.entries(obj).forEach(value => {
    console.log(value);
});
//loops through the object as if it were an array and prints the key and values as an array


Object.entries(obj).map(value => {
    return value[1] + value[0].replace("username", "")
})
//loop through obj and concatonate value in index 1 with index 0, and replace username with an empty string

// santa0, rudolf1, mr.grinch2

