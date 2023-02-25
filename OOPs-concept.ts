// // OOPS classes in TS

// class Car {
//   // information or variable or data members
//   // methods yani function

//   color!: string;
//   hp!: number;
//   Model!: number;
//   _lisence!: string;

//   constructor(color: string, hp: number, Model: number) {
//     this.color = color;
//     this.hp = hp; // Constructor Good Practice
//     this.Model = Model;
//   }

//   get lisence() {
//     return this._lisence;
//   }

//   set lisence(val: string) {
//     this._lisence = val;
//   }

//   carStart() {
//     console.log("Car is Starting");
//   }

//   changeGear() {
//     console.log("Car is changing gear");
//   }

//   carstop() {
//     console.log("Car is Stoping");
//   }
// }

// // let Cultus = new Car();
// // Cultus.color = "Green";
// // Cultus.Model = 2013;     //Bad Practice
// // Cultus.hp = 1000;
// // console.log(Cultus.color);
// // console.log(Cultus.Model);
// // console.log(Cultus.hp);
// // Cultus.carStart();

// let Civic = new Car("Blue", 1800, 2020);
// // // Civic.color = "silver";
// // console.log(Civic.color);
// // console.log(Civic.hp);
// // console.log(Civic.Model);
// Civic._lisence = "STD123";
// console.log(Civic._lisence);
// // Civic.changeGear();

// class Car {
//   Color: string;
//   Company: string;
//   Model: number;
//   _lisence!: string;
//   constructor(color: string, company: string, model: number) {
//     this.Color = color;
//     this.Company = company;
//     this.Model = model;
//   }

//   set lisence(val: string) {
//     this._lisence = val;
//   }

//   get lisence() {
//     return this._lisence;
//   }

//   carStop() {
//     console.log("Car is Stopped");
//   }
// }

// let Civic = new Car("White", "Honda", 2022);
// console.log(Civic.Color);
// console.log(Civic.Company);
// console.log(Civic.Model);
// Civic._lisence = "civ123";
// console.log(Civic.lisence);

// let Grande = new Car("Black", "Toyota", 2022);
// console.log(Grande.Color);
// console.log(Grande.Company);
// console.log(Grande.Model);
// Grande._lisence = "gra123";
// console.log(Grande.lisence);

// Super Call Concept
// class a {
//     k: number;
//     constructor() {
//       this.k = 6;
//     }
//   }

//   class b extends a {
//     constructor() {
//       super();
//       this.k = 9;
//     }
//   }

//   let obj = new b();
//   console.log(obj.k);

// class Car {
//     color: string;
//     model: number;

//     constructor(color: string, model: number) {
//       this.color = color;
//       this.model = model;
//     }
//   }

//   class Mercedes extends Car {
//     allowWheels: boolean;
//     constructor(color: string, model: number, allowWheels: boolean) {
//       super(color, model);
//       this.allowWheels = allowWheels;
//     }
//   }

//   let mymercedes = new Mercedes("Black", 2022, true);
//   console.log(mymercedes);

// ReadOnly concept in class  we can change the value only in constructor
// class A {
//   readonly name: string = "ali";
//   constructor() {
//     this.name = "salman";
//   }
//   abc() {
//     this.name = "haziq";
//   }
// }

// Readonly with string literal
// class A {
//   readonly name: string = "Hello, how are you ?";
//   readonly address = "Hno 6 Stno 72";

//   constructor() {
//     this.name = "I am Fine";
//     this.address = "no";
//   }
// }

//  constructor overloading concept in class
// class B {
//   constructor(x: string, y: number);
//   constructor(s: number, v: string);
//   constructor(x: any) {
//     //   tbf
//   }
// }

// let obj = new B("hi", 3);
// let obj1 = new B(3, "hi");

// Static concept in class
// class Employee {
//   _name: string;
//   _id: number;
//   static _autoId: number = 0;

//   constructor(name: string) {
//     this._name = name;
//     this._id = ++Employee._autoId;
//   }

//   print() {
//     console.log(`${this._name} and Id is ${this._id}`);
//   }
// }

// const person1 = new Employee("Salman");
// person1.print();

// const person2 = new Employee("Ahmed");
// person2.print();

// class A {
//   static x = 0;
//   static sms() {
//     console.log("Hi");
//   }
// }

// A.x;
// A.sms();

// // Generic class
// class Box<type> {
//     content: type;

//     constructor(value: type) {
//       this.content = value;
//     }
//   }

//   const a = new Box<number>(6);
//   console.log(a);

// interface inherit with class

// interface Pingable {
//   ping(): void;
// }

// class A implements Pingable {
//   ping(): void {
//     console.log("Ping");
//   }
// }

// interface A {
//     name: string;
//     display(name: string): void;
//   }

//   class B implements A {
//     name: string;

//     constructor(name: string) {
//       this.name = name;
//     }

//     display(name: string): void {
//       console.log(name);
//     }
//   }

// Abstract class concept

// abstract class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   display(): string {
//     return "Helooo....";
//   }

//   abstract find(name: string): any;
// }

// // let obj = new Person();  cannot create a object of abstract class

// class Student extends Person {
//   id: number;

//   constructor(name: string, id: number) {
//     super(name);
//     this.id = id;
//   }

//   find(name: string) {
//     return `Your name is ${name}`;
//   }
// }

// let stddata = new Student("Salman", 23);
// console.log(stddata);
// console.log(stddata.find("Ahmed"));
// console.log(stddata.display());

// class A {    class concept having same method or function name
//   eat() {
//     console.log("Eating from A");
//   }
// }

// class B extends A {
//   eat() {
//     super.eat();
//     console.log("Eating from B");
//   }
// }

// let obj = new B();
// obj.eat();
