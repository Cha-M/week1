//Activity 1
const films = ["Come and See", "Lord of the Rings", "Aladdin"]
films.push("Legally Blonde", "Winnie the Pooh")

for (let i = 0; i < films.length; i++)
{
    console.log(films[i])
}

//Activity 2
const rand1to50 = () => 
{
    return Math.ceil(Math.random() * 50)
}

for (let i = 0; i < 6; i++)
{
    console.log(rand1to50())
}

//Activity 3
for (let i = 9; i >= 0; i--)
{
    console.log(i)
}

//Activity 4
const films2 = ["Come and See", "Lord of the Rings", "Ghostbusters", "Aladdin"]
const filmCheck = () =>
{
    if(films2[2] == "Ghostbusters")
    {
        return "yey it’s ghostbusters"
    }
    else
    {
        return "booo, we want ghostbusters"
    }
}

console.log(filmCheck())

//Activity 5
let randNum = 0
const rand1to30 = () => 
{
    return Math.ceil(Math.random() * 30)
}

for (let i = 0; i < 6; i++)
{
    randNum = rand1to30()
    if (randNum % 7 == 0)
    {
        console.log(`${randNum} is divisible by 7`)
    }
}

//Activity 6
//do while will always execute at least once, because the while statement is evaluated after the do statement

let v = "Hello"
do
{
    console.log(v)
}
while (false)

//Activity 7

for(let n = 1; n <= 20; n++)
{
    let primeCheck = true
    for (let m = 2; m < n; m++)
    {
        if (n % m == 0)// && !(n / m < 1))
        {
            
            //console.log(n, m)
            //console.log(`${n}%${m}= 0`)
            primeCheck = false
        }
    }
    if (primeCheck == true && n != 1)
    {
        console.log(`${n} is prime.`)
    }
 }


 const aaa = (p) => {
        if (p % 1 === 0)
        {
            return true
        }
        else
        {
            return false
        }
    }
 console.log(aaa(1))

 
  //     activity 7      \\

const isPrime = (num) => {
    for(let i = 2; i < num; i++)
    {
        if(num % i === 0) return false;
    }
    return num > 1;
  }

let primeNum = 20;
for (let i = 0; i <= primeNum; i++){
    console.log(i,isPrime(i));
}