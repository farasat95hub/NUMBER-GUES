#! /usr/bin/env node



import inquirer from "inquirer";

// 1) computer will generate a random number - done

// 2) user input for guessing number - done

// 3) computer user input with computer generated number and show result - done


const randomnumber = Math.floor(Math.random() * 10 + 1);

 const answers =  await inquirer.prompt([
     {
         name: "userguessednumber",
         type: "number",
         message: "please guess a number between 1-10: ",
     }
 ]);

 if(answers.userguessednumber === randomnumber ){
     console.log("congtraulation! you guess right number.")
 }else {
     console.log("you guess wrong number.")
}