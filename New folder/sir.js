console.log("PJS COURSE")
 // ALERTS
//  window.alert("LogIn Successfully!")
//  alert("User Registered...")

// //CONSOLE DEBUGGER
// console.log("DB Connected...")

// //Document write

// document.write("HEllo World" + "<br>");
// document.write(75+52);

// var nationality = "Pakistani"; //string
// console.log(nationality);

// var idIsValid = true; //boolean

// var year = 2024; //number
// type of that variable

// console.log(typeof(nationality));
// console.log(typeof(idIsValid));
// console.log(typeof(year));

//Initialization & declaration

// var firstName; //Initalization

// firstName = "Anique"; //declare

// document.write(firstName);

// var weight = 72.55; //floating dot
// console.log(typeof(weight))

// Datatypes 06 primitive 
// 1. string || an array of characters
// 2. boolean || true/false
// 3. number || int/ floating values
// 4. null || No value
// 5. undefined || a variable is defined but not given any value
// 6. symbol || a unique value

// Complex Datatypes
// Array
// Object
// 666

// var in string
// var fname = "DoNain";
// console.log(fname)

// fname = "ZunnoRain";
// console.log(fname)

// fname = "Owais"
// console.log(fname) // 

// var in number
// var marks = 23;
// var weight = 55.3;
// var salary = 45000;

// console.log(marks);

// var in bool
// var isTrue = true;
// var isPassed = false;

// var in undefined

// var abc;

// var ref;

// console.log(ref);

// // STATEMENTS
// var a = 1; //statement 1
// var b = "open"; //statement 2
// var c = 44; //statement 3
// var d = 70; //statement 4
// console.log(d) //statement 4
// console.log(c) //statement 4

// // End of statement with semicolon ;
//     i = 23; j = 45; k = 30;

//new line will break the statement
// var a = 45
// a * 2
// console.log(a)

// // Expressions
// a + b; //expression
// 4 / 7; //expression
// var b = 7; 
// a * 4; //expression
// "Ali" + " " + "Usman"; //expression

// Multiline comment && Single line comment
/*
a = 3
a = 3
a = 3
a = 3
a = 3
*/

//console.log(a)
//alert(a)


// Variable legal or illegal names
// legal names

// var hello = 'goodmorning';
// var _abc = 23;
// var $work = true;
// var user2 = 'Owais';
// var my$team = 45;
// var car_registered = 'abc-456'
// var isPassed = false;

// // illegal names
// var 3user = 'abc'; 
// var my-fname = 'owais';
// var my name = 'abc';
// var car#register = 'sedan';
// var user&isavaible = 'abc';
// var user*isavaible = 'abc';
// var user?isavaible = 'abc';

// Case Sensative

// var rose = "Red";
// var Rose = "Pink";
// var ROSE = "White";

// console.log(rose)
// console.log(Rose)
// console.log(ROSE)

// // Camel Case
// var responseTime;
// var responseTimeLimit;
// var userResponseTimeLimit;

// Arithematic Operators

// var a = +prompt("Enter number 1");
// var b = +prompt("Enter number 2");

// console.log(typeof(a));
// console.log(typeof(b));

// var add = a + b;
// console.log("Addition result is: " + add);

// var mult = a * b;
// console.log("Multiplication result is: " + mult);

// var subs = a - b;
// console.log("Substraction result is: " + subs);

// var divide = a / b;
// console.log("Divide result is: " + divide);

// var remainder = a % b;
// console.log("Remainder result is: " + remainder);

// var power = a ** b;
// console.log("Power result is: " + power);


// EXAMPLE                || Same As
// a += 7;                     a = a + 7
// a -= 7;                     a = a - 7
// a /= 7;                     a = a / 7
// a *= 7;                     a = a * 7
// a %= 7;                     a = a % 7
// a **= 7;                    a = a ** 7
 


//var a = 23;

// a += 7;

// console.log(a)

//Ambiguity BODMAS

// var bodmas = 2 + 3 * 5 - 2 / 2;
//            5 * 5 - 1
//              25 -1 = 24

//          2 + 3 * 5 - 1
//         2 + 15 - 1
//         17 - 1
//         16

// var bodmas = 5 + 2 * (3 - 2) / 2;
// //              5 + 2 * 1 / 2
// //              5 + 2 * 0.5
// //              5 + 1
//                 // 6
// console.log(bodmas)

// var a = 3 + 5 * 2; // result 13
// var b = 8 / 2 - 1; // result 3
// var c = 3 % 2 + 4 - 1; // result 4
// var d = a + 5 * c - b / (3 + b);// result 32.5

// INCREMENT(++) && DECREMENT(--) POST/PRE

// var x = 7;

// var y = x + ++x + x + x++ + ++x + x  + x++ + x;
// //      7 +  8  + 8 + 8 +  10 +  10 +  10 + 11 = 72

// console.log(x) //11
// console.log(y) //72

// var a = 3;

// var b = a + a++ + a + ++a + a;
// //      3 + 3  +  4 + 5   + 5

// console.log(a)

// console.log(b)


// var x = 10;
// var y = x + --x + x-- + --x + x++ + x + ++x + --x; 


// console.log(x) //8
// console.log(y) //67

// var fName = "OWais";
// var lName = "Ahmed"

// console.log(fName + " " + lName)

// var a = "6" + 2; // 62
// var b = 3 + "6"; // 36
// var c = "Hello " + 2; // Hello 2
// var d = 2 + "Hello "; //2Hello
// var e = "Hello "+ 3 + 4; //Hello 34 
// // console.log(e)
// var f = 3 + 4 + "Hello "; //7Hello
// console.log(f)
// var g = "Hello "+ (3 + 4); //

// PROMPT
// var ques = "Whats your name?";

// var defaultAns = "Owais Ahmed Khan";

// // prompt("Whats your name");
// var userResponse = prompt(ques,defaultAns);

// alert("Your name is: " + userResponse);
// var age = +prompt("Whats your age?",15);
// var calAge = 10 + age;
// alert(calAge);

// parseInt parseFloat Num

// var age = prompt("Whats your age?");
// var sum = parseInt(age) + 12;

// alert(sum)

// var temp = prompt("Whats current Temp?");
// var tSum = parseFloat(temp) + 12.56;

// alert(tSum)

// var stdMarks = prompt("How many marks you obtain in CS?");
// var stdSum = Number(stdMarks) + 56;

// alert(stdSum)

// var a = Number(true); // 1
// var b = Number(false); // 0
// var c = Number(678); //678
// // var d = Number(678 123); //NaN
// var e = Number("Hello JS"); //NaN 
// console.log(a)
// console.log(b)
// console.log(c)
// // console.log(d)
// console.log(e)

// // Comparison Operators
// var a = '6';
// console.log(a == 6); //return true 
// console.log(a === 6); //return false
// console.log(a != 6); //return false
// console.log(a !== 6); //return true
// console.log(a > 6); //return false
// console.log(a < 6); //return false
// console.log(a >= 6); //return true
// console.log(a <= 6); //return true

//Logical Operator 
// AND &&

// console.log(true && true); //True
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false);//false

// // OR ||

// console.log(true || true); //True
// console.log(true || false); //True
// console.log(false || true); //True
// console.log(false || false); //False

// var a = 60;
// var b = a > 50 && a < 70;
// console.log(b); //true

// var c = 80;
// var d = c > 50 && c < 70;
// console.log(d); // false

// var a = 60;
// var b = a < 50 || a > 70;
// console.log(b); // false

// var c = 80;
// var d = c < 50 || c > 70;
// console.log(d); // true

// var a = 60;
// var b = !(a < 50);
// console.log(b); //true

// var c = 80;
// var d = !(c > 50);
// console.log(d); //false


// // Double NOT
// console.log( !1 ); // false
// console.log( !0); //true

// console.log( !!1 ); //true
// console.log( !!0); //false


// SHORT-CIRCUIT
//returns false, evaluation stops at first value
var a = false && true && false;

//returns false, evaluation stops at last value
var b = true && true && false;

//returns false, evaluation stops at second value
var c = true && false && true;

//returns true, evaluation stops at second value
var d = false || true || false;

//returns true, evaluation stops at first value
var e = true || true || false;

//returns true, evaluation stops at last value
var f = false || false || true


// CONDITIONAL STATEMENTS

// var age = 8;

// if (age > 9) {
//     alert('Your age is: ' + age)
// } else {
//     alert('Under AGE');
// }

// DRIVINE LISENSE 18 ya 18 < tou Eligible for LISENSE

// var age = 23;

// if (age >= 18) {
//     alert("Qualify for driving!!");
// } else {
//     alert("Does not qualify for driving!!")
// }

// var score = +prompt("Enter MArks.");

// if(score >= 80 && score <= 100){
//     alert('A GRADE')
//     if(score > 90){
//         alert('Congrats you win Reward $100')
//     }
// }else if(score >= 70 && score <= 79){
//     alert('B Grade')
// }else if(score >= 60 && score <= 69){
//     alert('C Grade')
// }else if(score >= 50 && score <= 59){
//     alert('D Grade')
// }else{
//     alert('Invalid Marks/ Failed Marks')
// }