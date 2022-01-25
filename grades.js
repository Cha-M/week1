const grade = 87;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

if (grade >= 70)
{
    console.log("Distinction"); 
}
else if (grade >= 60)
{
    console.log("Merit"); 
}
else if (grade >= 50)
{
    console.log("Pass"); 
}
else
{
    console.log("Failed"); 
}

let age = 42

if (age > 17)
{
    console.log("Yes I can serve you.")
}
else
{
    console.log("You aren't old enough.")
}

let word = "wallow"
if (word.toLowerCase().charAt(0) == word.charAt(word.length-1))
{

    console.log("!!!y")
}
else
{
}

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