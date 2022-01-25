const power = (num1, num2) => {
    return num1 ** num2;
}

console.log(power(2,3));

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

coffeeOrder.push("Sha - Cappucino");
coffeeOrder.push("Donald - Americano");

coffeeOrder.pop();

console.log(coffeeOrder);
console.log(coffeeOrder.length);















//Arrays Activity 1
const websites = ["google.com", "facebook.com", "instagram.com"];
websites.push("a.com","b.com");
websites.pop();

console.log(websites);

//Arrays Activity 2
//map()
const shaMap = new Map();
shaMap.set(1, "First");
shaMap.set(2, "Second");
shaMap.set(3, "Third");

for (let a = 1; a < 4; a++)
{
    console.log(shaMap.get(a));
}

//shift()
const colours = ["Red", "Orange", "Yellow", "Green", "Blue"];

console.log(`The colour of a tomato is ${colours.shift()}.`);
console.log(`The colour of an orange is ${colours.shift()}.`);

const shaElement = colours.shift();

console.log(`The colour of a lawn is ${shaElement}.`);

//unshift()
const fruits = ["Apple", "Orange", "Lemon"];
console.log(`${fruits.unshift("Mango", "Guava", "Jackfruit")} is the number of fruits in the array now`);

//slice()
const cake = ["Large Piece", "Large Piece", "Small Piece", "Large Piece", "Medium Piece", "Large Piece"];
console.log(cake.slice(4));
console.log(cake.slice(1,3));

//splice()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

months.splice(5, 1, "Smarch");
console.log(months, months.length);
months.splice(0, 2, "Smarch");
console.log(months, months.length);

//concat()
const breads = ["Brown Bread", "Olive Loaf", "Sourdough Loaf", "Baguette"];
const cakes = ["Homer Donut", "Teacake"];

const leavened = breads.concat(cakes);
console.log(leavened);

//indexOf()
const months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const a = months2.indexOf("January");
console.log(`The ${a+1}st month of the year is ${months2[0]}.`);

//includes()
const colours2  = ["Red", "Orange", "Yellow", "Green", "Blue"];

if (colours2.includes("Blue"))
{
    console.log("Blue is a colour.");
}

//join()
const blurb = ["Once", "upon", "a", "time"]
console.log(blurb.join(" "))

const factorial = (a) => {
    if ((a === 0) || (a === 1))
    {
        return 1;
    }
    else
    {
        return (a * factorial(a-1))
    }
}

console.log(factorial(33))

//
let show = function() {
    console.log('Anonymous function');
};

show();

//...

const shaTest = function() {
    //return ["a","b","c"].join(".")
    return 0
}
console.log(shaTest)

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())
