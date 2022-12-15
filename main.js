/***************************************************************************************************************************************/
//Assigment 31:37
//Assigment one
// Test Case 1
// let num = 9;
// Test Case 2
// let num = 20; // "020"

// // Test Case 3
// //let num = 110; // "110"
// if(num<10){
//   document.write(`00${num}`)// "009"
//   console.log(`00${num}`)
// }else if(num>10 && num<100){
//     document.write(`0${num}`)// "009"
//     console.log(`0${num}`)
// }else{
//   document.write(`${num}`)// "009"
//   console.log(`${num}`)
// }
// //Assigment two
// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if(num1 == str){
// console.log("{num1} Is The Same Value As {str}")
// }

// if((num1 == str)&& !(typeof num1 == typeof str2)){
// console.log("{num1} Is The Same Value Or The Same Type As {str2}")
// }
// if(!(num1 == str2)&& !(typeof num1 == typeof str2)){
// console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
// }
// if(!(str == str2)&& (typeof str == typeof str2)){
// console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
// }
// //Assigment three
// let nu1 = 10;
// let nu2 = 30;
// let nu3 = "30";
// if((nu3>=nu1 && !(typeof nu2 == typeof nu3))){
//   console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
// }
// if(nu3>nu1 && nu2 == nu3 && typeof nu2 != typeof nu3 ){
//     console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
// }
// if(nu3!=nu1 && !(typeof nu1 == typeof nu3)&&typeof nu2 != typeof nu3){
//   console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
// }
//Assigment 4


let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}