// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	
	this.greet = function(){
		console.log(`Hello, my name is ${this.name}, I am, ${this.age} years old.`);
	};
}

// Person.prototype.greet = function() {
// 	console.log(`Hello, my name is ${name}, I am, ${age} years old.`)
// }

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
	
	this.jobGreet = function(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	};
}
const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Create Employee instance
const employee1 = new Employee('Bob', 30, 'Manager');
employee1.jobGreet();

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function () {
// 	console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`)
// }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
