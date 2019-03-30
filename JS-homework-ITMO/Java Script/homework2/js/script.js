console.log("Задача 1");

let array =  [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++)
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
