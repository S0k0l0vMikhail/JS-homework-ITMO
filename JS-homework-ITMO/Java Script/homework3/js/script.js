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
