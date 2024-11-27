//stringga oid
//1-masala
// function reverce(a) {
//     let text = a;
//     let res = text.split("").reverse().join("");
//     console.log(res);
//     return res
// }

//2-masala
// function rever() {
//     let text = "salom dunyo";
//     let res = text.split(" ");
//     let first = res[0];
//     let last = res.at(-1);
//     res.pop();
//     res.shift();
//     res.push(first);
//     res.unshift(last);
//     let result = res.join(" ");
//     console.log(result);
// }

//3-masala
// let text = 'Berilgan sozda nechta Bosh Harf Bor';
// let res = text.split('');
// let sum = res.filter(value => value === value.toUpperCase());
// console.log(sum);

//4-masala
// let text = 'salom dunyo';
// let res = text.split(' ')
// res=res.map(function(value) {
//     value= value[0].toUpperCase()+value.slice(1)
//     return value
// })
// console.log(res.join(' '));

//5-masala
// let text = "Alifbo A harfi";
// let res = text.replace(/A/g, "B");
// console.log(res);

//6-masala
// let text = 'test'
// let res = text.length
// console.log(res);

//7-masala
// function tek(str) {
//     let res = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     let oz = res.split('').reverse().join('');

//     return res === oz;
// }

// console.log(tek("Hello, world!"));

//8-masala
// let text = 'hello'
// let res = text.split('').reverse().join('')
// console.log(res);

//9-masala
// let text = "hello hello salom";

// let words = text.split(/\s+/);

// let neww = [...new Set(words)];

// let res = neww.join(' ');

// console.log(res);

//10-masala
// let text = 'abdulaziz';
// let char = 'b';

// let index = text.indexOf(char);

// console.log(index);

//11-masala
// let text = "salom dunyo";

// let res = text.split(/s+/);

// console.log(res);

//12-masala
// let text = "Abdulaziz";

// let sortedText = text
//   .split("")
//   .sort()
//   .join("");

// console.log(sortedText);

//13-masala
// let text = "en uzun soz qaysi biri";

// let res = text.split(' ');

// let maxElement = res.reduce((value, index) => {
//     return index.length > value.length ? index : value;
// });

// console.log(maxElement);

//15-masala
// let text = "abdulaziz";
// let res = text.split("");
// let sum = 0;
// res.forEach(function (value) {
//   if (
//     value == "a" ||
//     value == "e" ||
//     value == "i" ||
//     value == "o" ||
//     value == "u" ||
//     value == "o`"
//   ) {
//     sum += 1;
//   }
// });
// console.log(sum);

// console.log(res);

//16-masala
// let text = "Hello-world-how-are-you";
// let res = text.split(' ').join('-');

// console.log(res);

//17-masala
// let text='hello'
// let res = text.toUpperCase()
// console.log(res);

//18-masala
// let text = 'hello'
// let res = text.split(' ')
// console.log(res);

//19-masala
// let text = ' test   '
// let res = text.trim()
// console.log(res);

//Massivga oid
//1-masala
// let arr = [
//     {name:'Ali',age:20},
//     {name:'Bobur',age:26},
//     {name:'Salim',age:30}
// ]
// let sum = arr[0]
// arr.forEach(function(value) {
//     if (sum.age<value.age) {
//         sum=value
//     }
// })
// console.log(sum);

//2-masala
// let arr = [
//   { name: "Ali", age: 20 },
//   { name: "Salim", age: 30 },
//   { name: "Bobur", age: 26 },
// ];
// let res = arr.sort(function(a, b) {
//   return a.age - b.age;
// });
// console.log(res);

//3-masala
// let arr = [
//   { num: 1 },
//   { num: 2 },
//   { num: 3 },
//   { num: 4 },
//   { num: 5 },
//   { num: 6 },
// ];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i].num
// }
// console.log(sum);

//4-masala
// let arr = [
//   { name: "Ali", age: 20 },
//   { name: "Salim", age: 30 },
//   { name: "Bobur", age: 26 },
// ];
// let res = arr.filter(function (value) {

//     return value.age >18
// })
// console.log(res);


//5-masala
// let obj = [
//     { id: 1, key: "Ali" },
//     { id: 2, key: "Abror" },
//     { id: 3, key: "Alica" },
//     { id: 4, key: "Bobur" }
// ];

// let res = [...new Set(obj.map(obj => obj.key))];

// console.log(res);



//6-masala
// const arr = [
//   { firstName: "ABdulaziz", lastName: "Abdurahimov" },
//   { firstName: "Ahliddin", lastName: "Boqijonov'" },
// ];

// arr.forEach((value) => {
//   value.fullName = value.firstName + " " + value.lastName;
// });

// console.log(arr);

//7-masala
// const arr = [
//   { firstName: "dfg", lastName: "fsgdhf" },
//   { firstName: "gdhfjgh", lastName: "fsgd" },
// ];

// const res = arr.find((value) => value.firstName === "dfg");

// if (res) {
//   res.lastName = "new";
// }

// console.log(arr);

//8-masala
// let arr = [
//     {
//         firsName: 'Abdulaziz',
//         lastName: 'Abdurahimov',
//         id:1
//     },
//     {
//         firsName: 'Ahliddin',
//         lastName: 'Boqijonov',
//         id:2
//     }
// ]
// let kalit = 1;
// arr = arr.filter(item => item.id !== kalit);

// console.log(arr);

//9-masala
// let arr = [
//     {
//         firsName: 'Abdulaziz',
//         lastName: 'Abdurahimov',
//         id:1
//     },
//     {
//         firsName: 'Ahliddin',
//         lastName: 'Boqijonov',
//         id:2
//     }
// ]

// export{reverce,rever}
