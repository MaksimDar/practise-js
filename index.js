// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }
// let price = 0;
// const racket = "yonex";
// switch (racket) {
//   case "wilson":
//     price = "20$";
//     break;
//   case "babolat":
//     price = "30$";
//     break;
//   case "yonex":
//     price = "45";
//     break;
//   default:
//     console.log("We do not have this kind of racket");
// }
// console.log(price);
// const cars = ["Mercedes", "BMW", "Lexus", "Mazda", "Honda"];
// const myCar = "Cadilac";
// const hasCars = cars.includes(myCar);
// if (hasCars) {
//   console.log(`We have this ${myCar}`);
// }
// console.log(`Sorry , we cannot fix this ${myCar}`);

// const cars = ["Mercedes", "BMW", "Lexus", "Mazda", "Honda"];
// const sovietCars = ["Lada", "Moskvich", "Volga"];
// const uniteCars = cars.concat(sovietCars);
// console.log(uniteCars);

// function calculate(x, y, z) {
//   return (x + y) / z;
// }
// let result = calculate(2, 8, 2);
// console.log(result);
// result = calculate(16, 16, 32);
// console.log(result);
// result = calculate(1, 14, 3);
// console.log(result);

// function calculatePlus() {
//   let total = 0;
//   const args = Array.from(arguments);
//   function fn(...args) {
//     total += argument;
//     return total;
//   }
// }
// console.log(calculatePlus(1, 2, 3, 4, 5));
// console.log(calculatePlus(45, 45, 45, 45));

// const purchaseProgram = function spendMoney(price, balance) {
//   if (price <= 20000) {
//     console.log("You do not have enough money");
//     return;
//   }
//   if (price <= balance) {
//     console.log("Done!");
//     return;
//   }
//   if (price >= balance) {
//     console.log("The price is higher than your balance");
//     return;
//   }
//   if (balance === 0) {
//     console.log("Credit Limit");
//     return;
//   }
// };
// purchaseProgram(3000, 0);
// purchaseProgram(3000, 3000);
// purchaseProgram(320, 4000);
// purchaseProgram(5000, 3000);
// purchaseProgram(30000, 45000);
// purchaseProgram(50000, 0);

// 3 -1 ///
// const ageMy = "age";
// const areaMy = "area";
// const player = {
//   playerName: "Maksym",
//   surname: "Dovhusha",
//   dateOfBirth: "19.03.2006",
//   skills: ["sport", "music", "IT"],
//   languages: {
//     Ukrainian: "Native",
//     Russian: "Native",
//     English: "Upper-Intermediate",
//   },
//   [areaMy]: "spain",
//   [ageMy]: "16",
//   getSkills() {
//     return this.skills;
//   },
//   addSkills(...skillName) {
//     this.skills.push(...skillName);
//   },
//   removeSkill(skillName) {
//     const skillIndex = this.skills.indexOf(skillName);
//     this.skills.splice(skillIndex, 1);
//   },
// };
// const userSurname = player["surname"];
// console.log(userSurname);
// console.log(player["dateOfBirth"]);
// const firstSkill = player["skills"];
// const Russian = player["languages"];
// console.log(firstSkill);
// console.log(Russian);

// player.playerName = "Max";
// player.surname = "Dovgusha";
// player.skills.push = "English";

// console.log(player.playerName);
// console.log(player.surname);
// console.log(player.skills);

// player.fatherName = "Mykolayovich";
// player.class = "11";
// player.sport = ["tennis", "football", "running"];

// console.log(player.fatherName);
// console.log(player.class);
// console.log(player.sport);

// console.log(player.age);
// console.log(player.area);
// console.log(player.getSkills());
// player.addSkills("Cooking", "sightseeing");

// console.log(player.getSkills());
// player.removeSkill("Cooking");
// console.log(player.getSkills());

// 3-2///

// const country = {
//   countryName: "Ukraine",
//   capital: "Kyiv",
//   population: "42000000",
//   language: "Ukrainian",
// };

// for (const key in country) {
//   console.log(key);
//   console.log(country[key]);
// }

// const dog = {
//   legs: "4",
//   dogName: "Jack",
// };
// const cat = Object.create(dog);
// cat.head = "1";

// console.log(cat.hasOwnProperty("head"));
// const catName = cat.hasOwnProperty("dogname");
// console.log(catName);
// console.log(dog.hasOwnProperty("dogName"));

// const exam = {
//   examName: "IELTS",
//   writing: "6.0",
//   reading: "6.5",
//   speaking: "6.5",
//   listening: "6.5",
// };

// const examKeys = Object.keys(exam);
// for (const key of examKeys) {
//   console.log(key);
//   console.log(exam[key]);
// }
// const grades = Object.values(exam);
// console.log(grades);

// const allInformation = Object.entries(exam);
// console.log(allInformation);

// 3 ____3///___///___///___???
// const players = [
//   {
//     playerName: "Novak",
//     surname: "Djokovich",
//     ranking: "1",
//   },
//   {
//     playerName: "Rafael",
//     surname: "Nadal",
//     ranking: "2",
//   },
//   {
//     playerName: "Danil",
//     surname: "Medvedev",
//     ranking: "3",
//   },
// ];

// let totalRanking = 0;

// for (const player of players) {
//     totalRanking += player.ranking;
//   console.log(player.playerName);
//   console.log(player.surname);
//   console.log(player.ranking);
// }

// const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// console.log(ages);
// console.log(Math.max(...ages));
// console.log(...ages);

// const germanCars = ["Mercedes", "BMW", "OPEL", "AUDI"];
// const japaneseCars = ["LEXUS", "TOYOTA", "HONDA", "SUZUKI"];
// const allCars = [...germanCars, ...japaneseCars];
// console.log(allCars);

// function plus(...args) {
//   console.log(...args);
// }

// plus(1, 2, 3);
// plus(4, 5, 6);
// plus(1, 3);

// const book = {
//   authorName: "Mario",
//   surname: "Puzo",
//   bookName: "The Good Father",
// };
// const { authorName, surname, bookName } = book;
// console.log(
//   `Author name is ${authorName}, surname is ${surname} and his book is ${bookName}`
// );

// function registerGuest(name, callback) {
//   console.log(`Your bedroom is registered on ${name}`);
//   callback(name);
// }

// registerGuest("Maksym", function greetGuest(name) {
//   console.log(`IT IS Nice to see you, ${name}`);
// });

// function isUniversityAvailable(name, isAvailable, notAvailable) {
//   const grade = Math.random() > 0.5;
//   if (grade) {
//     isAvailable(name);
//     return;
//   }
//   notAvailable(name);
// }

// function agree(name) {
//   console.log(`You can study at our university ${name}`);
// }
// function disagree(name) {
//   console.log(`Sorry, but with this grade you cannot study `);
// }

// isUniversityAvailable("Maksym", agree, disagree);

// function plus(value) {
//   console.log(value);
// }
// function minus(value) {
//   console.log("minus value", value);
// }
// function counter(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// counter(3, plus);
// counter(7, minus);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 34, 56, 76];

// numbers.forEach(function (number, index) {
//   console.log(`The index of ${number} is ${index}`);
// });

// const names = ["MAKSYM", "DANYLO", "NIKITA", "ALYOSHA"];

// names.forEach(function (name, index) {
//   console.log(`The index of ${name} is ${index}`);
// });

// const plus = (a, b, c) => {
//   return a + b + c;
// };
// console.log(plus(1, 2, 3));
// console.log(plus(2, 3, 4));
// console.log(plus(1000000, 2000000, 3000000));

// const plus = (a, b, c) => a + b + c;
// console.log(plus(1, 2, 3));
// console.log(plus(100, 10000, 102));
// console.log(plus(3, 45, 6));

// const plus = (...args) => {
//   console.log(...args);
// };
// plus(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const numbers = [3, 5, 7, 9, 1, 2, 4, 6, 8, 0];
// const check = (number, index) => {
//   console.log(`The index of this ${number} is ${index}`);
// };
// numbers.forEach(check);

// const numbers = [3, 5, 7, 9, 1, 2, 4, 6, 8, 0];
// numbers.forEach((number, index) => {
//   console.log(`The index of this ${number} is ${index}`);
// });

// function registerRoomNumber(name, callback) {
//   console.log(`Your name is ${name} ?`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerRoomNumber("Maksym", function greet(name) {
//   console.log(`Nice to meet you, ${name}`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerRoomNumber("Makar", function notify(name) {
//   console.log(`You should come at 3:30 p.m`);
// });

// function registerRestaurantTable(table, isFree, notFree) {
//   const isPossible = Math.random() > 0.5;
//   if (isPossible) {
//     isFree(table);
//     return;
//   } else !isPossible;
//   notFree(table);
// }

// function tableIsFree(name) {
//   console.log(`Table is free for ${name}`);
// }
// function tableIsNotFree(name) {
//   console.log(`Sorry, but there is no any free tables for ${name} `);
// }

// registerRestaurantTable("Maksym", tableIsFree, tableIsNotFree);

// function plus(n) {
//   for (let i = 0; i <= n; i += 1) {
//     console.log(i);
//   }
// }
// plus(4);

// const numbers = [1, 3, 45, 63, 12, 34, 78, 564, 789, 45, 55, 66];

// numbers.forEach(function (number, index) {
//   console.log(`The index of this ${number} is ${index} `);
// });

// const tennisPlayers = [
//   "NADAL",
//   "DJOKOVICH",
//   "FEDERER",
//   "CORIC",
//   "DOLGOPOLOV",
//   "MURRAY",
// ];

// tennisPlayers.forEach(function (element, index) {
//   console.log(`${element} number is ${index}`);
// });

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(1, 3, 5));

// const addElements = (a, b, c) => {
//   return a + b + c;
// };
// console.log(addElements(3, 4, 3));

// const addFive = (a) => {
//   return a + 5;
// };
// console.log(addFive(200));

// function plusElements(a, b, c) {
//   return a + b + c;
// }
// console.log(plusElements(5, 5, 5));

// const addSevens = (a, b, c) => a + b + c;
// console.log(addSevens(7, 7, 7));

// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// function arg(...args) {
//   console.log(...args);
// }
// arg(1, 2, 3, 4);

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((number, index) => {
//   console.log(`Index of ${number} is ${index}`);
// });

// const numberIndex = (number, index) => {
//   console.log(`${number}'s index is ${index}`);
// };
// numbers.forEach(numberIndex);

// const names = ["Maksym", "Makar", "Danylo", "Anton", "Vlad"];
// const upperNames = names.map((name) => name.toUpperCase());
// console.log(upperNames);
// const lowerNames = names.map((name) => name.toLowerCase());
// console.log(lowerNames);

// const rankings = [
//   { name: "Maksym", ranking: 7.8 },
//   { name: "Makar", ranking: 8.4 },
//   { name: "Danylo", ranking: 5.3 },
//   { name: "Stepan", ranking: 9.4 },
// ];
// const nameRanking = rankings.map((ranking) => ranking.ranking);
// console.log(nameRanking);

// const students = [
//   { name: "maksym", languages: ["Ukrainian", "Russian", "English", "Spanish"] },
//   { name: "Makar", languages: ["Ukrainian", "English", "Spanish"] },
//   {
//     name: "Mykola",
//     languages: ["Ukrainian", "Russian", "English", "Spanish", "German"],
//   },
//   { name: "Tatiana", languages: ["Ukrainian", "Russian"] },
// ];
// const studentsLanguages = students.flatMap((student) => student.languages);
// console.log(studentsLanguages);
