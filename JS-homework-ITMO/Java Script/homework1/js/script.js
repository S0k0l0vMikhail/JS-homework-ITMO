// задача 1
console.log("Задача 1");
let height = 100;//высота
let length = 50;//длина
let width = 30;//ширина
let sq;//площадь
let res;// сравнение

sq = 2*(height*length+length*width+height*width);
console.log("площадь параллелепипеда "+ sq);
res = (height >= width) ? "Высота больше" : "Ширина больше";
console.log(res);

// задача 2
console.log("Задача 2");
let sqPlot = '10соток';
let sqGarden;

sqGarden = 15*25;
console.log("Площадь грядки " + sqGarden  + " м2");

sqPlot = parseInt(sqPlot)*100; // переводим сотки в метры2


let rem = sqPlot % sqGarden;
console.log("осталось незанято "+ rem + " м2");

//задача 3
console.log("Задача 3");
let ellipseBig = '15дм2';
let ellipseSmall = 600;
let transform;

transform = parseInt(ellipseBig)*100; // дм2 сотки в см2
ellipseBig = transform;

let bagel = ellipseBig - ellipseSmall;
console.log("Площадь пончика: " + bagel + " см2");

//Задача 4
console.log("Задача 4");
let x = 500;
let y = 100;
let z;
console.log("x = " + x);
console.log("y = " + y);

let redefine = (x < y) ?(x=x,y=y):(z=x, x=y, y=z);
console.log("Переопределили");
console.log("x = " + x);
console.log("y = " + y);

console.log("сбособ 2");
let a = 500;
let b = 100;
console.log("a = " + a);
console.log("b = " + b);
 redefine = (a < b) ?(a=a,b=b):(b=a+b,a=b-a,b=b-a);
 console.log("Переопределили");
 console.log("a = " + a);
 console.log("b = " + b);
//Задача 5
console.log("Задача 5");

let m = 8.5 , n = 11.45;
let dist = 10;
let mod = (Math.abs(dist-m) === Math.abs(dist-n))? console.log(m +"="+ n) : (Math.abs(dist-m) > Math.abs(dist-n))? console.log(n + " Ближе к " + dist) :  console.log(m + " Ближе к " + dist);
