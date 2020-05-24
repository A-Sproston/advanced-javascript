const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

// for of loop - iterate over arrays and strings
// iterating = strings and arrays
for (item of basket){
    console.log(item);
}


// for in - enumerating over the object properties
// enumerating = objects

for (item in detailedBasket){
    console.log(item);
}