"use strict";

let  money = 1000;  //“Доход за месяц”
console.log(typeof money);
let  income = 'Курьер'; // Дополнительный доход.
console.log(typeof income);
let addExpenses ="Такси, Проживание, Питание, Налоги";
console.log(addExpenses.length , addExpenses.toLowerCase() , addExpenses.split(', ') );

let  deposit = true; //любое булево значение,
console.log(typeof deposit);
let  mission = 50000; //любое число(Какую сумму хотите накопить)

let  period = 6; //число от 1 до 12(месяцев)
console.log( mission + ' доллар, за ' + period  + ' месяцев');

let budgetDay = money / 30;
  console.log(budgetDay + " $");


