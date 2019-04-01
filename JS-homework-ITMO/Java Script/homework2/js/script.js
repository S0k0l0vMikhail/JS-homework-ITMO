console.log("Задача 1");

let array =  [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++)
    if ((array[i] + array[j]) === 7) {
        console.log('сумма чисел ' + array[i] + ' и ' + array[j] + ' равна 7');
    }

}

console.log("Задача 2");

for (i = 0; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0 && i!==0){
    console.log(i+" делится на три И пять");
  }
  else if (i % 3 == 0 && i!==0){
    console.log(i+" делится на 3");
  } else if (i % 5 == 0 && i % 3!==0 && i!==0) {
    console.log(i+" делится на пять");
  }
  else {
    console.log(i);
  }
}

console.log("Задача 3");
//Даны три числа. Определите, можно ли из отрезков с такими длинами составить треугольник. Определите вид треугольника (прямоугольный, тупоугольный, остроугольный), если он существует.

// let a = 25;
// let b = 20;
// let c = 15;
let a = prompt("Введите a:");
let b = prompt("Введите b:");
let c = prompt("Введите c:");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
if ((a<b+c) && (b<a+c) && (c<a+b)){
  if ((a*a) === ((b*b)+(c*c)) || (b*b) === ((a*a)+(c*c)) || (c*c) === ((a*a)+(c*c))) {
    console.log("Прямоугольный треугольник");
  } else if (a*a>((b*b)+(c*c)) || b*b>((a*a)+(c*c)) || c*c>((b*b)+(a*a))) {
    console.log("Тупоугольный треугольник!");
  } else if (a*a<((b*b)+(c*c)) || b*b<((a*a)+(c*c)) || c*c<((b*b)+(a*a))) {
    console.log("Остроугольный треугольник!");
  } else {
    console.log("Это не треугольник!");
  }
}

console.log("Задача 4");

// Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке
let num = prompt('введите число');
let arr = [];
let n = 1;
while (n <= num) {
    arr.push(n++); // добавляем элементы в массив с конца пока n(1 начальное значение)не будет равно num
}
arr = arr.reverse(); //Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
console.log(arr);

// Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128
let num1 = 2;
for (let i = 1; i <= 20; i++) {
    console.log(num1);
    num1 = num1 * 2;
}

//Напишите цикл, который выводит в консоль треугольник из символов #, высотой 10 символов.
console.log("с помощью for:");
a = '#';
for(i=0; i<10;i++){
 console.log(a);
 let s="#";
 a=a+s;
}
console.log("с помощью while:");
let s = '#';
let j=0;
while (j < 10) {
    let a = '#';
    console.log(s);
    s=s+a;
    j++;
}

console.log("Задача 5");
// Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку. В цикле выводить сколько моющего средства осталось после мытья каждой тарелки В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.

let plate = 1000;
let fairy = 500;
let ostatkitarelok;
for (i=1; i<=plate; i++){
  if (fairy>0){
    fairy = fairy-0.5;
    console.log("Фери осталось:"+fairy);
    console.log("Помыто тарелок:"+i);
    ostatkitarelok = plate - i;
  }
}
console.log("Моющее средство закончилось, осталось помыть: "+ostatkitarelok+" тарелок");

console.log("Задача 6.1");
// Электронные часы показывают время в формате от 00:00 до 23:59. Подсчитать сколько раз за сутки случается так, что слева от двоеточия показывается симметричная комбинация для той, что справа от двоеточия (например, 02:20, 11:11 или 15:51).

function reverseString(str){
  return str.split('').reverse().join(''); //reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым. Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку. Метод split() возвращает новый массив.
}

let result = 0;
let strHours = '';
let strMinut = '';

for(let hours = 0; hours <= 23; hours++){
  strHours = (hours < 10) ? '0' + hours.toString() : hours.toString() // toString() возвращает строку, представляющую указанный объект.
  for (let minutes = 0; minutes <= 59; minutes++){
    strMinut = (minutes < 10) ? '0' + minutes.toString() : minutes.toString()
    if (strHours == reverseString(strMinut)){
      console.log(strHours + ':' + strMinut)
      result +=1;
    }
  }
}
console.log("совпадений найдено: "+ result);


console.log("Задача 6.1 Способ 2");

   let h1 = 0; // первая цифра часов
   let h2 = 0; // вторая цифра часов
   let m1 = 0; // первая цифра минут
   let m2 = 0; // вторая цифра минут
   //h1h2:m1m2 так я их представляю
   let sutki = 0; // счетчик суток
   let sovpad = 0; // совпадения

  while (sutki < 1440) { //Делаем цикл на 1440 итераций. 60х24=1440 минут.
  if (h1==m2 && h2==m1){
    console.log(h1.toString() + h2.toString() +':'+ m1.toString() + m2.toString());
        sovpad++; // количество совпадений

    } m2++; // отсчет минут
    if (m2%10 == 0){ //в случае достижения 10 минут обнуляем вторую цифру минут и увеличиваем первую цифру минут на единицу
      m2=0;
      m1++;
    } if (m1 == 6){ // при достижении 60 минут увеличиваем счетчик часа на единицу, обнуляем десятки минут
      m1=0;
      h2++;
    } if (h2 > 0 && h2%10 == 0){// в случае достижения 10 часов обнуляем вторую цифру часа и увеличиваем первую цифру часа на единицу
      h2=0;
      h1++;
    } if (h1 == 2 && h2 == 4){ // если время достигло 24 часа, останавливаем цикл
      break;
    } sutki++;
}
console.log("совпадений найдено: "+sovpad);
console.log("Задача 6.2");
//В американской армии считается несчастливым число 13, а в японской — 4. Перед международными учениями штаб российской армии решил исключить номера боевой техники, содержащие числа 4 или 13 (например, 40123, 13313, 12345 или 13040), чтобы не смущать иностранных коллег. Если в распоряжении армии имеется 100 тыс. единиц боевой техники и каждая боевая машина имеет номер от 00001 до 99999, то сколько всего номеров придётся исключить?
let iskluchitTehniku=0;
let numeral_1=10000;
let numeral_2=1000;
let numeral_3=100;
let numeral_4=10;
let numeral_5=1;

  for (let z=1;z<100000;z++){
	i=z;
  let cifra1=(i-i%numeral_1)/numeral_1;
  i-=numeral_1*cifra1;
	let cifra2=(i-i%numeral_2)/numeral_2;
	i-=numeral_2*cifra2;
	let cifra3=(i-i%numeral_3)/numeral_3;
	i-=numeral_3*cifra3;
	let cifra4=(i-i%numeral_4)/numeral_4;
	i-=numeral_4*cifra4;
	let cifra5=(i-i%numeral_5)/numeral_5;
	i-=numeral_5*cifra5;
		if(cifra1==4||cifra2==4||cifra3==4||cifra4==4||cifra5==4){
		    iskluchitTehniku++;
		}
		else if(cifra1==1&&cifra2==3||cifra2==1&&cifra3==3||cifra3==1&&cifra4==3||cifra4==1&&cifra5==3){
		    iskluchitTehniku++;
		}
		else{}
	}
console.log("Нужно исключиь " + iskluchitTehniku + " шт техники");

console.log("Задача 7");
// let month = new Date().getMonth(); // номер месяца, где 0 - январь, 11 - декабрь. Зная, номер месяца, определить время года

var Xmas = new Date();
var month = Xmas.getMonth();
console.log(month); // 03
let season = month.toString();
switch (month) {
	  case 11:
    case 00:
    case 01:
		console.log("Зима");
		break;
    case 02:
    case 03:
    case 04:
		console.log("Весна");
		break;
    case 05:
    case 06:
    case 07:
		console.log("Лето");
		break;
    case 08:
    case 09:
    case 10:
    console.log("Осень");
    break;
}
