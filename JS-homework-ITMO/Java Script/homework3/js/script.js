console.log("Задача1");
//Написать функцию сравнения двух массивов. Функция принимает на вход два массива, сравнивает их и возвращает true, если массивы равны и false, если не равны.
function SravniArr(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Это - не массивы!");
    return false;
  }
  if (arr1.length !== arr2.length) {
    console.log("Массивы разной длинны!");
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { // сравниваем элементы массивов
      console.log("Элементы массивов не совпадают!");
      return false;
    }

  }
  return true;

}
// arrA = "gfhb"; // Это - не массивы! false
// arrB = [1,2,3,4,5]; // Это - не массивы! false
// arrA = [1,2,3,4]; // Массивы разной длинны! false
// arrB = [1,2,3,4,5]; // Массивы разной длинны! false
// arrA = [1,5,3,4,6]; // Элементы массивов не совпадают! false
// arrB = [1,2,3,4,5]; // Элементы массивов не совпадают! false
arrA = [1, 2, 3, 4, 5]; // Массивы совпадают! true
arrB = [1, 2, 3, 4, 5]; // Массивы совпадают! true

console.log(SravniArr(arrA, arrB));

console.log("Задача2");
//Дано натуральное число N. Вычислите сумму его цифр, использую рекурсию (строки, массивы и циклы использовать запрещено).

function SumRecursia(natN) {
  if (natN < 10) {
    return natN;
  } else {
    return natN % 10 + SumRecursia(natN / 10);
  }
}
let natX = SumRecursia(123);
console.log(parseInt(natX)); //6

console.log("Задача 3");
//Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
let arrR = [];
let count = 0;

function range(start, end, step) {
  if (!step) {
    step = 1;
  }
  if (!start || !end || end < start) {
    console.log("введите стартовые значения");
    return;
  }
  for (i = start; i <= end; i = i + step) {
    arrR.push(i);
  }
  return arrR;
}
console.log(range(1, 10, 2));


console.log("Задача 4");

//Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count, будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд).
 // let countTovar = prompt("введите количесто товаров:");
let text1;
let text2;
let text3;

 function diTovar(n) {
   if (n%100===11 || n%100===12 ||n%100===13 ||n%100===14){
     return text3 = (n + " товаров");
   }
  if ((n - 1) % 10 === 0 ) {
    return text1 = (n + " товар");
      }
  if ((n - 2) % 10 === 0) {
    return text2 = (n + " товара");

  }
  if ((n - 3) % 10 === 0) {
    return text2 = (n + " товара");

  }
  if ((n - 4) % 10 === 0) {
      return text2 = (n + " товара");

  } else {
    return text3 = (n + " товаров");

  }
}
var vvodi = prompt('Добавте товары в корзину', 10);


let korzina = diTovar(vvodi);

console.log("У вас в корзине: " + korzina);
