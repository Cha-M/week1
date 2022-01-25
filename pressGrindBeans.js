const pressGrindBeans = () => {
    console.log("Hello.")
}

pressGrindBeans()

let account1 = {number: 67600001, balance: 40000}
let billPayment = 560

const cashWithdrawal = (account, debit) => {
    console.log(`Withdrawing ${debit} from account ${account.number}.`)
    account1.balance = account1.balance - debit
    console.log(`${account.balance} remaining in account ${account.number}.`)
}

cashWithdrawal(account1, billPayment)

const square = function(number) {
    return number * number
}

console.log(square(5))
//variable which stores anonymous function

const power = (number1, number2) => {
    return number1 ** number2
}
//function with arrow

console.log(square(5))
console.log(power(2,2))
