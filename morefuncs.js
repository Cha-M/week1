const drinksType = ["apple", "orange", "ribena"]
const drinksPrice = [30, 45, 30]
const balance = 40

const checkDrink = () =>
{
    for (let x = 0; x < 3; x++)
    {
        console.log(`${drinksType[x]} is available`);
    }
}


const checkBalance = () =>
{
    for (let x = 0; x < 3; x++)
    {
        console.log(`${drinksType[x]} is available for ${drinksPrice[x]}`);
    }
    console.log(`Your remaining balance is ${balance}`);
}

const chooseDrink = (drinkNum) =>
{
    if (balance >= drinksPrice[drinkNum])
    {
        console.log(`Enjoy your ${drinksType[drinkNum]}, you've got good taste!`)
    }
}

checkDrink();
checkBalance();
chooseDrink(2)


const person =
{
    name : "Sha",
    _fullName : "Charlotte",
    myFunc: () =>
    {
        //return this._fullName;
        return 69
    } 
};

person.age = 33
person["sign"] = "virgo"

console.log(person.sign);
console.log(person.myFunc())

const alarmObj =
{
    weekendAlarm : "No alarm needed",
    weekdayAlarm : "Get up at 7 AM"
}

let day = "Saturday";
let alarm = "";

const setAlarm = (dayAlarm) =>
{
    if (dayAlarm == "Saturday" || dayAlarm == "Sunday")
    {
        alarm = alarmObj.weekendAlarm
    }
    else
    {
        alarm = alarmObj.weekdayAlarm
    }
}

setAlarm(day)
console.log(alarm)
