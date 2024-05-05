#! /usr/bin/env/ node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);

if (pinAnswer.pin === myPin) 
    console.log("correct your pin!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your ammount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance")


        myBalance -= amountAns.amount;

        
    }

    

    else if (operationAns.operation === "check balance")
        console.log("Your remaining balance is: " + myBalance);
} 

else {
    console.log("incorrect pin number");
}
