let str_test = "Sha"
let random_num = Math.random()
console.log(str_test);
console.log(str_test.length);
console.log(
    Math.ceil(Math.random() * 10)

);
console.log(
    str_test.toLowerCase()
)
console.log(
    "   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   \n-----------\n   |   |   \n   |   |   \n   |   |   "
)

const i = 10

let favDrink = "tea"
console.log(favDrink)
console.log("My fav drink is "+favDrink)
console.log(`dfgdfgdfg ${favDrink}`)

console.log (i)
console.log("All Around The World"[7].toUpperCase())
console.log("All Around The World".charAt(7).toUpperCase())
console.log("All Around The World"[0].toUpperCase())
console.log("All Around The World".charAt(0).toUpperCase())
console.log("All Around The World"[7].toUpperCase())
console.log("All Around The World".charAt(7).toUpperCase())
console.log("All Around The World"[3].toUpperCase())
console.log("All Around The World".charAt(3).toUpperCase())
console.log("All Around The World"[4].toUpperCase())
console.log("All Around The World".charAt(4).toUpperCase())

//Activity 1
const deets = {forename: "Sha", age: 33, favColour: "red"}
console.log(`This person's name is ${deets.forename}, she is ${deets.age} years old and her favourite colour is ${deets.favColour}.`)

//Activity 2
const food = {breakfast: "toast", lunch: "a sandwich", dinner: "bolognese"}
console.log(`Today I will eat ${food.breakfast} for breakfast and ${food.lunch} for lunch. ${food.dinner[0].toUpperCase()}${food.dinner.slice(1)} will be my final meal of the day.`)

//Activity 3
const birthDay = new Date(2022, 8, 25)
const toDay = new Date()

console.log(
    Math.floor(
        Math.abs(
            (birthDay - toDay) / (1000 * 60 * 60 * 24))
        )
    )

//Activity 4

let space1 = "x"
let space2 = "0"
let space3 = " "
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "

let grid = [["o","o","o"],[" "," "," "],[" "," "," "]]

//let randSquare =

console.log(`   |   |   \n ${grid[0][0]} | ${grid[0][1]} | ${grid[0][2]} \n   |   |   \n-----------\n   |   |   \n ${grid[1][0]} | ${grid[1][1]} | ${grid[1][2]} \n   |   |   \n-----------\n   |   |   \n ${grid[2][0]} | ${grid[2][0]} | ${grid[2][0]} \n   |   |   `)

if (grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x")
{
    console.log("Crosses win on row 1.")
}
else if (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")
{
    console.log("Noughts win on row 1.")
}
else
{
    console.log("No winner on row 1.")
}
