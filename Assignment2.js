// 1. Unique Words Counter
const text = "JavaScript is great and JavaScript is powerful";

function countWords(str) {
  const words = str.toLowerCase().split(" ");
  const result = {};

  for (let word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}
console.log(countWords(text));

// 2. Group Students by Class
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];

function groupByClass(arr) {
  const result = {};

  for (let student of arr) {
    const cls = student.class;
    if (!result[cls]) {
      result[cls] = [];
    }
    result[cls].push(student);
  }

  return result;
}

console.log(groupByClass(students));

// 3. Filter Products by Price Range
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];

function filterByPrice(min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
}
console.log(filterByPrice(100, 600));

// 4. Check Palindrome Using Function
function isPalindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  reverse === str ? console.log("palindrome hai") : console.log("palindrome nahi ha");
}
console.log(isPalindrome("madam"));

// 5. Flatten Array
const nestedArray = [1, [2, [3, 4]], 5];
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(nestedArray));


// 6. Total Salary Calculation
const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

// 10. Sum of All Even Numbers in Nested Array

const data = [1, 2, [4, 5, [6, 8]], 10];

function sumEven(arr) {
  let sum = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += sumEven(item);
    } else if (item % 2 === 0) {
      sum += item;
    }
  }

  return sum;
}
console.log(sumEven(data));

// 11. Rest Operator in Function
let arr = [5, 10, 20, 25]
let sum = 0
for (let val of arr) {
  sum += val
}
console.log(sum / arr.length)

// 12. Frequency Count with Spread & Reduce
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequency = [...fruits].reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// 13. Toggle Status by ID
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
function toggleTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.done = !task.done;
    }
  }
}
toggleTask(1);
console.log(tasks);

// 14. Sort by Name Length
const names = ["Ali", "Zara", "Ahmed", "Usman"];
names.sort((a, b) => a.length - b.length);
console.log(names);
