"use strict";
// var msg = "Hello typescript";
// console.log(msg);
// document.write("Bye typescript");
// alert("Programming");
Object.defineProperty(exports, "__esModule", { value: true });
// Type Annotation
// var a: number = 10;
// var b: string = "hi";
// var c: boolean = true;
// console.log(a);
// console.log(typeof a);
// console.log(b);
// console.log(typeof b);
// console.log(c);
// console.log(typeof c);
// function Sum(x: number, y: number) {
//   var z = x + y;
//   console.log(z);
// }
// Sum(2, 3);
// function display(a: string, b: string) {
//   console.log(a + b);
// }
// display("10", "67");
// function test(g: number, h: string) {
//   console.log(g + h);
// }
// test(10, "hi");
// Var vs Let vs Const
// function show() {
//   let a: number;
//   a = 10;
//   if (a > 5) {
//     let b: number;
//       b = 20;
//   }
//   while (a > 5) {
//     console.log(a);
//       ++a;
//       b = 87
//   }
// }
// function show() {
//   var  a: number;
//   a = 10;
//   if (a > 5) {
//     var b: number;
//       b = 20;
//       a = 45;
//   }
//   while (a > 5) {
//     console.log(a);
//     ++a;
//       b = 23
//   }
// }
// console.log(x);
// let x: string = "Salman";
// console.log(x);
// var x: string = "Salman";
// let y: number;
// let y: number;
// var z: number;
// var z: number;
// const a = 5;
// a = 6;             const me ik dafa he value assign hoti change ni hoti
// const a: string;
// a = "bye";                not possible
//Number type in typescript
// let m: number = 22;
// let n: number = 20.23;
// console.log(m);
// console.log(n);
// console.log(typeof m);
// console.log(typeof n);
// let o = 45;
// let p = 87.34;
// console.log(typeof o);
// console.log(typeof p);
// function add(num5: number, num6: number) {
//   let num7 : number = num5 + num6;
//   console.log(num7);
// }
// add(10, 20);
// console.log(Number.MAX_VALUE);   // check max value in number
//  console.log(Number.MIN_VALUE); // check min value in number
// String type in typescript
// let add: string = "Hello world";
// console.log(add);
// console.log(typeof add);
// var str = "";
// console.log(typeof str);
// var empname: string = "Anish";
// var empname1: string = "sci";
// var output: string = empname + " works in the " + empname1 + " department ";
// console.log(output);
// console.log("The output is " , output);
// var a1 = 10;
// a1 = "hi"; typescript me koi type ka data pass krna ka baad data type change ni kr sakta
// Boolean type in typescript
// let ali: boolean = true;
// let modi: boolean = false;
// console.log(ali, modi);
// console.log(typeof ali, typeof modi);
// Void type in typescript
// function show(): void {
//   var num: number = 10;
//   console.log("Hello");
//   document.write("hi");
//   return num; //Void type function me kuch ni return kre ga
// }
// show();
// let a: void;
// a = null,undefined;
// console.log(a);
// console.log(typeof a);  //void only accept null or undefined so its is not useful in ts generally we use void in function igar hume function me kuch retun naa krwana ho
// Null type in typescript
// let a: null;
// a = 9;
// a = null;
// a = "hi";
// a = true;                   igar kisi varaible ki type null kr de toh useless igar null assign kre de then uska baad data pass ke sakta hn
// // var b: string = null;
// b = "hello";
// b = 18
// b = true;
//  var d: null;
// d = 13;
// d = "hi";
// d = true;
// d = null;
// var f: number = null;
// f = 20;
// f = "hi";
// Undefined type in typescript
// let a: undefined;
// a = "hi";
// a = 10;
// a = true;
// a = undefined;
// let b: string = undefined;          null or undefined are similar not are useful
// b = "hi";
// b = 10;
// b = true;
// Any type in typescript
// let a: any;
// a = 10;
// a = "ali";
// a = true;
// a = null;
// a = undefined;
// function add(x: any, y: any) {
//   let z: any;
//   z = x + y;
//   console.log(z);
// }
// add(2, 4);
// add(9, "hi");
// // Array in typescript
// let no: number[] = [12, 34, 56, 77];
// console.log(no);
// let no1: string[] = ["di", "ci", "bi", "hi"];
// console.log(no1);
// console.log(no1[2]);
// let xx: Array<number> = [23, 44, 55, 66];
// console.log(xx);
// let dx: boolean[] = [true, false];
// console.log(dx);
// Touple in typescript
// let id: number = 23;
// let xyz: string = "hi";
// let y: [number, string] = [1, "hi"];
// y = [id, xyz];
// y.push(2, "bye");
// console.log(y);
// console.log(y[1]);
// let user: [number, string, string, boolean, number];
// user = [1, "de", "se", true, 23];
// console.log(user);
// let emp: [number, string][];
// emp = [
//   [10, "hi"],
//   [11, "salman"],
//   [100, "ahmed"],
// ];
// console.log(emp);
// console.log(emp[1]);
// let me: [number, string][];
// me = [
//   [23, "fr"],
//   [32, "rf"],
// ];
// console.log(me);
// let c: [number, string] = [32, "Salman"];
// c[1] = c[1].concat(" Ahmed");
// console.log(c);
// let d: [number, string][];
// d = [
//   [21, "ali"],
//   [12, "ahmed"],
// ];
// d[1] = d[1].concat("ali");
// console.log(d);
// Interface in typescript
// interface keypair{
//     key: number;
//     value: string;
// }
// interface cal {
//     sum: (first: number, second: number)
// }
// let calculator: cal = {
//     sum(first: number, second: number) {
//         return first + second;
//     }
// }
// function show() {
//     let kp1: keypair = { 1, "hi"};
//     let kp2: keypair = { key: 1, value: "hi" };
//     let kp3: keypair = { key: 2, val: "bye" };
// }
// class in typescript          classes are used to reuse code
// class message {
//   constructor() {
//     this.sms();
//   }
//   sms() {
//     console.log("Hello typescript");
//   }
//   show() {
//     console.log("Hello world");
//   }
//   display(name1: string, roll: number) {
//     console.log("Hello", name1, "roll", roll);
//   }
// }
// let sms1 = new message();
// sms1.show();
// sms1.display("Salman", 34);
// Enums in typescript
// enum color {
//   red,
//   green,
//   blue,
//   purple,
// }
// let mycolor = color.blue;
// console.log(mycolor);
// enum direction {
//   up = "up",
//   down = "down",
//   left = "left",
//   right = "right",
// }
// let direction1 = direction.left;
// console.log(direction1);
// Function in typescript
// function display() {
//   console.log("Hello world");
// }
// display();
// function add(x: number, y: number) {
//   console.log(x + y);
// }
// add(4, 6);
// function show(): string {
//   return "10";
// }
// function call(): number {
//   return 12;
// }
// Generic in typescript           generic means if we want output(return) of anytype in function or what type of arugment we enter
// function show<T>(x: T): T {
//   return x;
// }
// let a = show("Hello");
// let b = show(75);
// let c = show(true);
// console.log(a, b, c);
// function test<T>(y: T): T {
//   return y;
// }
// let a1 = test(22);
// let b1 = test("hi");
// let c1 = test(false);
// console.log(a1, b1, c1);
// If Statement in typescript
// if (true) {
//   console.log("Hello world");
// }
// let x = 10;
// if (x > 5) {
//   console.log("True");
// }
// If else statement in typescript
// if (true) {
//   console.log("Condition is true");
// } else {
//   console.log("Condition is false");
// }
// let num: number = 12;
// let result = num % 2;
// if (result == 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }
// Nested if statment in typescript
// let num = Number(prompt("Enter a Number?"));
// if (num > 0) {
//   console.log("Number is greater than 0");
// } else if (num < 0) {
//   console.log("NUmber is less than 0");
// } else {
//   console.log("Number is 0");
// }
// let gender1 = String(prompt("Enter a Gender"));
// let gender2: string[] = ["male", "female"];
// for (let i = 0; i < gender2.length; ++i) {
//   if (gender1 === gender2[0]) {
//     console.log("you are male");
//   } else if (gender1 === gender2[1]) {
//     console.log("You are females");
//   } else {
//     console.log("you are others");
//   }
//   break;
// }
// Switch case in  typescript
// let grade: string = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Fair");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }
// for loops in typescript
// for loop
// for of loop
// for in loop
// for loop
// let arr: number[] = [12, 13, 45, 67];
// for (let i = 0; i < arr.length; ++i) {
//   console.log(arr[i]);
// }
// for of loop       helpful working with arry list or touple
// let arr1: number[] = [23, 54, 66, 77, 88];
// for (let val of arr1) {
//   console.log(val);
// }
// for in loop     gives index with value
// let arr2: number[] = [44, 55, 66, 77, 88];
// for (let val in arr2) {
//   console.log(val);
//   console.log(arr2[val]);
// }
// While loop in typescript
// let i: number = 1;
// while (i <= 10) {
//   console.log(i);
//   console.log("Salman");
//   document.write(i.toString(), ",");
//   ++i;
// }
// Do While loop in typescript
// let i: number = 5;
// do {
//   console.log(i);
//   ++i;
// } while (i < 2);
// let i: number = 1;
// do {
//   console.log(i);
//   ++i;
// } while (i < 10);
// Break statement in typescript
// let i: number = 1;
// while (i < 10) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
//   ++i;
// }
// for (let i = 0; i < 8; ++i) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }
// Continue statement in typescript  continue does not work on while loop
// for (let i = 0; i < 10; ++i) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// Arithmetic operators in typescript
// let a: number = 10;
// let b: number = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(++a);
// console.log(--a);
// Relational operators in typescript and relational operator only return boolean value
// let a: number = 10;
// let b: number = 20;
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a != b);
// Logical operators in typescript
// let a = 10;
// let b = 20;
// console.log(a > b && b > a);
// console.log(a > b || b > a);
// console.log(!(a == 10))
// Assignment operators in typescript
// let a = 20;
// let b = 30;
// let c: number;
// console.log((c = a + b));
// console.log((a += b));
// console.log((a -= b));
// console.log((a *= b));
// console.log((a /= b));
// Negation operators typescript
// let a: number = 10;
// let b = -a;
// let x = -b;
// console.log(a);
// console.log(b);
// console.log(x);
// Concatenation operator in typescript
// let a = "Salman";
// let b = "Ahmed";
// console.log(a + " " + b);
// let a = "Salman";
// console.log(`${a} Ahmed`);
// Conditional operators or ternary operator in typescript
// let a: number = 10;
// // let b: number = 5;
// // let result = a > b ? "Passed" : "Failed";
// console.log(result);
// Type of operator or ernary operator in typescript
// let a: number = 56;
// console.log(typeof a);
// let b: string = "HI";
// console.log(typeof b);
// Data Modifiers in typescript
// Public modifier
// class abc {
//   a = 10;
//   private b = 20;
//   protected x = 45;
//   show() {
//     console.log("Hello World");
//   }
//   display() {
//     this.a = 23;
//     this.b = 34;
//     this.x = 89;
//   }
// }
// let obj = new abc();
// obj.show();
// obj.a = 19;
// obj.b = 34;
// obj.x = 88;
// class xyz extends abc {
//   a = 300;
//   // b = 800;
//   x = 90;
// }
// Function and named function in typescript
// function show() {
//   console.log("HEllo");
// }
// show();
// function add(x: number, y: number) {
//   console.log(x + y);
// }
// add(23, 44);
// Anonymous Function in typescript
// let show = function () {
//   console.log("Hello Salman");
// };
// show();
// let add = function (x: number, y: number): number {
//   return x + y;
// };
// console.log(add(99, 100));
// let greet = function () {
//   console.log("Welcome ");
// };
// greet();
// Function Parameters in typescript
// function show(name1: string) {
//   console.log("Hello " + name1);
// }
// show("Salman");
// Default Parameters in typescript
// function greet(name1: string, greeting: string = "How are you?"): string {
//   return name1 + " " + greeting;
// }
// console.log(greet("Salman,", "Hi"));
// function add(x, y = 8) {
//   console.log(x + y);
// }
// add(3, 6);
// Optional Parameter in typescript
// function display(name1: string, greet?: string) {
//   console.log(name1 + " " + greet);
// }
// display("Salman", "Hello");
// display("Salman");
// Rest Parameters in typescript
// function display(name1: string, ...greet: string[]) {
//   console.log(name1 + " " + greet.join(","));
// }
// display("Salman", "Bye", "Ahmed", "Ali", "Murtaza");
// Declare type in typescript
// type Book = {
//   author: {
//     firstname: string;
//     lastname: string;
//   };
//   name: string;
// };
// let book: Book = {
//   author: {
//     firstname: "Nicolo",
//     lastname: "Machiavello",
//   },
//   name: "The Prince",
// };
// Function Type
// let sum: (x: number, y: number) => number;
// // Function overLoading
// function createDate(timestamp: number): number;
// function createDate(day: number, month: number, year: number): number;
// Type Casting
// let myname: unknown = "salman";
// console.log((myname as string).length);
// Array of union types
// let student: (string | number)[] = ["salman", 20, 20, "haziq"];
// console.log(student);
// combine array of string and number using spread operator
// let a: string[] = ["A", "B"];
// let b: number[] = [1, 2];
// let combine = [...a, ...b];
// console.log(combine);
class A {
}
class B extends A {
    name;
    age;
    city;
    constructor(name, age, city) {
        super();
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sum(x, y) {
        return x + y;
    }
}
let obj = new B("salman", 20, "lahore");
console.log(obj);
