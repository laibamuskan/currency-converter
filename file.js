import inquirer from 'inquirer';
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    BGP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_anwser = await inquirer.prompt([
    {
        name: "from",
        message: "Enter My Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'BGP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'BGP', 'INR', 'PKR']
    },
    {
        name: "amount",
        Message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_anwser.from]; // exchangr rate
let toAmount = currency[user_anwser.to]; // exchange rate
let amount = user_anwser.amount;
let baseAmount = amount / fromAmount; // usd base currency
let converted = baseAmount * toAmount;
console.log(converted);
