console.log('Задача 1');
//Написать функцию поиска в строке указанной подстроки и замены ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь.
//
let dataString = prompt('Введите строку: '); //12-12-12
let dataPodString = prompt('Что заменить: '); //-
let dataNewString = prompt('На что заменяем: '); //:

function Zamena (str,podsring,zamenastring){
  //Конструктор RegExp создаёт объект регулярного выражения для сопоставления текста с шаблоном.
  let re = new RegExp(podsring,'g') ;
  let newStr = str.replace(re, zamenastring);

  return newStr;
}
console.log(Zamena(dataString,dataPodString,dataNewString)); //12:12:12

console.log('Задача 2');
//Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы. Написать функцию, которая реализует следующий функционал: требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив. Например, если дана строка "дом 48, корпус 9, парадная 7, этаж 4", то в массиве должны оказаться числа 48, 9, 7 и 4

let string1 = prompt('Введите строку: ','дом 48, корпус 9, парадная 7, этаж 4');//дом 48, корпус 9, парадная 7, этаж 4
function arrSring (str){
  let arrstork = str.match(/(\d+)/g);
    return arrstork;
}
console.log(arrSring(string1));

console.log('Задача 3');
//Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной. Переставьте названия так, чтобы они были упорядочены по алфавиту.
let string2 = prompt('Введите названия городов через пробел: ','Москва Майами Лондон Сочи Омск Париж Мадрит Барселона');
let space1 = ' ';
function splitString(stringToSplit,separator) {
  let arrayOfStrings = stringToSplit.split(separator);

  console.log('Оригинальная строка: "' + stringToSplit + '"');
  console.log('Разделитель: "' + separator + '"');
  console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
  let sortArr = arrayOfStrings.sort();
  return sortArr;
}
console.log(splitString(string2,space1));
