 //Part 1: Variables and Data Types (5 Questions)
//Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
var name="sudha";
let age=21;
const country="india";
name="sree";
age=22;
//country="usa"; // This will throw an error because const cannot be reassigned
var name="sai";
//let age=23; // This will throw an error because let cannot be redeclared in the same scope
console.log(name,age,country);
//Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
let name1="saisudha";
let age1=21;
let programmingknowledge=true;
console.log(name1,typeof name1,age1,typeof age1,programmingknowledge,typeof programmingknowledge);
// Create an array of 5 fruits. Print the complete array, the first element, and the last element.
let fruits=["apple","banana","mango","grapes","kiwi"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
//Create an object containing your name, role, and CGPA. Print each property separately.
let employee={
    name3:"yanamala saisudha",
    role:"full stack developer",
    cgpa:8.7
}
console.log(employee.name3);
console.log(employee.role);
console.log(employee.cgpa);
//Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
let username=prompt("enter your name");
let userage=Number(prompt("enter your age"));
alert("your name is"+username);
console.log("your age is"+userage);
//Part 2: Operators (7 Questions)
//Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.
let num=10;
let num1=5;
console.log(`Addition: ${num+num1}, Subtraction: ${num-num1}, Multiplication: ${num*num1}, Division: ${num/num1}, Modulus: ${num%num1}, Exponentiation: ${num**num1}`);
//Predict the output:
let a = 5;
console.log(a++);
console.log(a);
console.log(++a);
//. Predict the output:
let ab= 10;
let b = ab--;
let c = --ab;

console.log(ab);
console.log(b);
console.log(c);
//Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
let d = 10;
d += 5;
console.log(d);
d -= 3;
console.log(d);
d *= 2;
console.log(d);
d /= 4;
console.log(d);
d %= 3;
console.log(d);
//Predict the results of these comparisons:
console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");
//Use &&, ||, and ! to check different combinations of conditions.
let x=5;
let y=10;
console.log(x && y);
console.log(x || y);
console.log(!x);
//Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
let userAge = Number(prompt("Enter your age:"));
let message = (userAge >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message);
//Part 3: Type Casting and Conditions (6 Questions)
//. Predict the data type of each expression:
console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));
//Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
let input=prompt("enter your number");
let number=Number(input);
console.log(number+10);
//Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(0));
console.log(Boolean(true));
//Write an if-else statement to check whether a number is positive or not.
let number1=prompt("enter your number");
if(number1>0){
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}//Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
let time=Number(prompt("enter the time in 24-hour format (0-23)"));
if(time>=0 && time<6){
    console.log("It's early morning.");
} else if(time>=6 && time<12){
    console.log("It's morning.");
} else if(time>=12 && time<17){
    console.log("It's afternoon.");
} else if(time>=17 && time<21){
    console.log("It's evening.");
} else if(time>=21 && time<24){
    console.log("It's night.");
} else {
    console.log("Invalid time entered.");
}
//Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
let age2=Number(prompt("enter your age"));  
let height=Number(prompt("enter your height in cm"));
let weight=Number(prompt("enter your weight in kg"));
if(age2>=18){
    if(height>=170){
        if(weight<=80){
            console.log("You are eligible for the program.");
        } else {
            console.log("You are not eligible due to weight.");
        }
    } else {
        console.log("You are not eligible due to height.");
    }
} else {
    console.log("You are not eligible due to age.");
}
//Part 4: Switch and Loops (8 Questions)
//Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
let trafficLight = prompt("Enter the traffic light color (red, yellow, green):");
switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle.");
        break;
    case "yellow":
        console.log("Prepare to stop the vehicle.");
        break;
    case "green":
        console.log("Proceed with caution.");
        break;
    default:
        console.log("Invalid traffic light color entered.");
}
//Use a for loop to print numbers from 1 to 20.
for(let i=1;i<=20;i++){
    console.log(i);
}
//Use a for loop to print all even numbers from 2 to 20.
for(let i=2;i<=20;i+=2){
    console.log(i);
}
//Use a while loop to print numbers from 10 down to 1.
let j=10;
while(j>=1){
    console.log(j);
    j--;
}
//Use a do-while loop to print numbers from 1 to 10.
let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);
//Use a for-of loop to print each character in the string "JavaScript".
let str1="JavaScript";
for(let char of str1){
    console.log(char);
}
//Use a for-of loop to print every element in an array of 5 student names.
let students=["Alice","Bob","Charlie","David","Eve"];
for(let student of students){
    console.log(student);
}
 //Use a for-in loop to print all keys and values of this object:
 /*const data = {
    name5: "Sudha",
    age5: 21,
    city: "Hyderabad",
    course: "CSE"
};

for (let key in data) {
    console.log(key + ": " +data[key]);*/

//Use a for-in loop to print all keys and values of this object:
 
let   data = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for(key in data){
      console.log(key + ": " +data[key]);
}
//Part 5: Mixed Practice (4 Questions)
//Take two numbers using prompt() and display their sum, difference, product, and remainder.
 
let N1 = Number(prompt("Enter number 1:"));
let N2 = Number(prompt("Enter number 2:"));

console.log("Sum:", N1 + N2);
console.log("Difference:", N1 - N2);
console.log("Product:", N1 * N2);
console.log("Remainder:", N1 % N2);
//Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
 
let numbers = [5, 12, 8, 20, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}
//Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
let age6=Number(prompt("enter your age: "));
if(age6>18){
    alert("you are eligible to watch the movie");
}
else {
    alert("you are not eligible to watch the movie");
}
 //Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
 
let Num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let choice = prompt(
    "Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
);

switch (choice) {
    case "1":
        console.log("Addition:", Num1 + num2);
        break;

    case "2":
        console.log("Subtraction:", Num1 - num2);
        break;

    case "3":
        console.log("Multiplication:",  Num1 * num2);
        break;

    case "4":
        if (num2 !== 0) {
            console.log("Division:", Num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid choice");
}



 
