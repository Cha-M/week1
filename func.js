const subSandwich = (sub1, sub2, sub3, sub4, sub5) =>
{
    console.log(`Sub with ${sub1},${sub2},${sub3},${sub4},${sub5}`)
}

subSandwich(1,2,3,4,5)

const vals = [21,22,23]
vals.unshift(20)
console.log(vals)

let multiplesTwo = [];
let b = 20;
for(let i = 0; i <= b; i++)
{
    if (i % 2 == 0)
    {multiplesTwo.push(i)}
}
console.log(`Numbers divisible by 2 between 0 and ${b} = ${multiplesTwo}`)

const sumOfNums = (min, max) =>
{
    let sums = 0;
    for(let i = min; i <= max; i++)
    {
        sums += i;
        //console.log(sums)
    }
    return sums;
}

console.log(`Sum of numbers 1-10: ${sumOfNums(1, 10)}`);

let example = multiplesTwo.push("FGDGFD");

console.log(`Example: ${example}`);
console.log(`multiplesTwo: ${multiplesTwo}`);

let randomNumber = 0;

while (randomNumber < 10)
{
    console.log("Random no. " + randomNumber + "\n Keep looping");
    randomNumber = (Math.round(Math.random() * 20));
}

console.log("No more looping, with random no " + randomNumber)

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade")
{
    console.log(currentCard)
    currentCard = cards[Math.floor(Math.random()*4)]
}

console.log(currentCard);