//Challenge 1
let password = "Pass123"
if (password.length < 8)
{
    console.log("The password is too short.")
}

//Challenge 2
let num = 123
if (num % 3 == 0 || num % 5 == 0)
{
    console.log("This number is divisible by 3 or 5.")
}
else
{
    console.log("This number is not divisible by 3 or 5")
}

//Challenge 3
let num = 15

let modFizz = num % 3
let modBuzz = num % 5

if (modFizz == 0 && modBuzz == 0)
{
    console.log("fizz buzz")
}
else if (modFizz == 0 || modBuzz == 0)
{
    switch(true)
    {
        case modFizz == 0:
            console.log("fizz")
            break
        case modBuzz == 0:
            console.log("buzz")
            break        
    }
}

else
{
    console.log(num)
}

//Challenge 4
let num = 1010101
let numStr = num.toString()
let leftSlice = ""
let rightSlice = ""

if (numStr.length % 2)
{
    leftSlice = numStr.slice(0, (numStr.length/2))
    rightSlice = numStr.slice((numStr.length/2) + 1)


    let leftSliceReverse = ""
    leftSliceReverse = (leftSlice.split("").reverse()).join("")

    if (rightSlice == leftSliceReverse)
    {
        console.log("Palindromic")
    }
}
else
{
    leftSlice = numStr.slice(0, (numStr.length/2))
    rightSlice = numStr.slice((numStr.length/2))

    let leftSliceReverse = ""
    leftSliceReverse = (leftSlice.split("").reverse()).join("")

    if (rightSlice == leftSliceReverse)
    {
        console.log("Palindromic")
    }
}

//Challenge 5
let time = 12
let placeOfWork = "the office"
let townOfHome = "Manchester"

switch(true)
    {
        case time <= 7:
            console.log("They are at home in", townOfHome)
            break
        case time == 8:
            console.log("They are commuting")
            break
        case time >= 9 && time <= 16:
            console.log("They are at", placeOfWork)
            break
        case time == 17:
            console.log("They are commuting")
            break
        case time >= 18:
            console.log("They are at home in", townOfHome)
            break
    }

//Challenge 6
let longStr = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ["e","a","i","o","u"]

let selectVowel = 0
let vowelIndex = 0
let highIndex = 0


for (selectVowel; selectVowel < 5; selectVowel++)
{
    vowelIndex = longStr.lastIndexOf(vowels[selectVowel])

    if (vowelIndex > highIndex)
    {
        highIndex = vowelIndex
    }
}
console.log(highIndex)

//Challenge 7
let word = "wallow"
if (word.toLowerCase().charAt(0) == word.charAt(word.length-1))
{
    return true
}
else
{
    return false
}

//Challenge 8
let num1 = 63
let num2 = 49

if (((num1 + num2) % 2) == 0)
{
    console.log(num1 + num2)
}
else
{
    console.log(num1 * num2)
}

