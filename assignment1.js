// Task 1

let a = prompt("Enter your number")
a%2===0 ? console.log(`${a} is an even number` ) : console.log(`${a} is an odd number` )

//Task 2

let age = prompt("enter your age")
age >= 18 ? console.log("Eligible to vote") : console.log( "Not eligible");

// Task 3

for(let num = 1 ; num <=10 ; num++){console.log(num)};

// Task 4

let i=1
while (i<=10){
    let c = i*2
    console.log(c)
    i++;
}

// Task 5
let string = "babur";
let reversed = "";
for(let i = word.length-1; i>=0; i--){
    reversed += string[i];
}
console.log(reversed);


// Task 6
let num1 = +(prompt("enter your first number"));
let num2 = +(prompt("enter your second number"));
    console.log(`${num1} + ${num2} = ${num1+num2}`);

// Task 7
let facNumber = 6;
let factorial = 1;
for(let i = 1; i<=facNumber; i++){
    factorial *= i;
}
console.log(`factorial : ${factorial}`);

// Task 8
let word = "madam";
let reverse ="";
for (let i = word.length-1; i>=0; i--){
    reverse += word[i]
}
reverse === word ? console.log("palindrome hai") : console.log("palindrome nahi ha");

//  Task 9
const student = {
    name : "saad" ,
    rollNo :14 ,
    marks : 345, 
    isPassed : true,
}

// Task 10
console.log(student.name);

//Task 11
student.greet = function(){console.log(`Hello, I am ${this.name}`)};

// Task 12
for(let key in student){
    console.log(`${key}:${student[key]}`);
}

// Task 13
let favoriteFruits = [ "Graps","mangoe" ,"Dates" ,"Banana"];

// Task 14
favoriteFruits.push("orange");

// Task 15
favoriteFruits.pop()

// Task 16
console.log(favoriteFruits.includes("Banana"))

// Task 17
let numbers = [1, 2, 3, 4,5]
for(let i=0 ; i<numbers.length ; i++){
    numbers[i]*= 2
}
console.log(numbers)

// Task 18
let ages = [12 ,15 ,17 ,18 ,20 ,24];
let adults = ages.filter(age => age >= 18)
console.log(adults)

// Task 19
let num = [2 ,6 ,8 ,12 ,13 ,15]
console.log( num.find(num => num >10));

// Task 20
let names = ["saad" ,"ali" ,"abdullah" ,"ahad"];
names.forEach(name =>console.log( name));

// Task 21
const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];

// Task 22
let name = students.map(student => student.name );
console.log(name);

// Task 23
let score = students.filter(student => student.marks > 50);
console.log(score);

// Task 24
let zara = students.find(student => students.name === "Zara");
console.log(zara);

// Task 25
students.forEach(student => console.log(student));

// Task 26
let array = ["Ali", "Zara", "Umar", "Ahmed"];
array.map(name => console.log(name));

// Task 27
let ages1 =[12, 25, 17, 20, 16, 30];
console.log(ages1.filter(adult => adult>18))

// Task 28
let fruitList = ["banana", "mango", "grapes", "apple"];
console.log(fruitList.includes("apple"));

// Task 29
let studentMarks = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
]
let scores = studentMarks.find(score => score.marks > 90);
console.log(scores);

// Task 30
let number1 = [200, 150, 300, 100];
let sum = 0 ;
for (let num of number1){
    sum += num ;
}
console.log(sum);

// Task 31
let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
]
let Name = users.map(name =>name.username)
console.log(Name)

// Task 32
let nums = [1, 2, 3, 4, 5, 6];
let odd =nums.filter(odd => odd%2 != 0)
console.log(odd)

// Task 33
let str = "javascript";
let count = 0;
for(let val of str){
    if( val === "a" || 
        val === "e" || 
        val === "i" || 
        val === "o" || 
        val === "u" )
    {
        count++
    }
}
console.log(`${count} vowels are present in the word ${str}`)

// Task 34
let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(t =>
  console.log(`Task: ${t.task} - Status: ${t.completed == true ? "Completed" : "Incomplete"}`)
);

// Task 35
let employees = [
  { name: "Ali", dept: "IT" },
  { name: "Zara", dept: "HR" }
];
let updatedEmployees = employees.map(employee => ({...employee, status: "active" }));
console.log(updatedEmployees);
