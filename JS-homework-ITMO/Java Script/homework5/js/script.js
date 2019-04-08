(function(){
'use strict';
let goods = {
        piano: {
            id:1,
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
          id:2,
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
          id:3,
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
          id:4,
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
          id:5,
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };
    console.log('Задача 1');
    //Написать функцию со следующими аргументами: объект, from (значение от), to (значение до). Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to. Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары, у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект goods из файла с урока.

function getGoods(obj, from, to) {
        let resObj = {};
        for (let key in obj) {
            console.log("key", key); // ключи: piano, guitar и тд
            console.log(obj[key]); // объекты
            console.log(obj[key]["price"]); // значения свойства price

            if (obj[key]["price"] >= from
                && obj[key]["price"] <= to){
                // добавляем подходящие товары в результирующий объект
                resObj[key] = obj[key];
            }
        }

        console.log(resObj);
        return resObj;
    }
    getGoods(goods, 2000, 3000);

console.log('Задача 2');
//Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара, count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием, если количество позволяет, то уменьшает количество товара на countToCart, если не позволяет, то выводит информацию об этом в консоль и завершает работу. Для проверки функции используйте объект goods из файла с урока.

function addToCart(obj, title, countToCart){
    for (let key in obj){
      if (obj[key]["title"] === title){
        if (obj[key]['count']>=countToCart){
              obj[key]['count'] -= countToCart;
              console.log('Товара: '+obj[key]["title"]+' осталось на складе: '+obj[key]['count']+' забрали: '+ countToCart);
        } else{
          console.log('Недостаточно товара: '+obj[key]["title"]+' на складе '+' вналичии: '+obj[key]["count"]+'шт');
        } return;
      }
    }
}

addToCart(goods,"Флейта",50);


console.log('Задача 3');
//Напишите функцию, которая отсортирует массив объектов books по значению свойства title. Объект в файле с занятия.
let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

books.sort(function (a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});
console.log('Сортировка по названию: ',books);


console.log('Задача 4');
//Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

let week = {
1:'Monday',
2:'Tuesday',
3:'Wednesday',
4:'Thursday',
5:'Friday',
6:'Saturday',
7:'Sunday'
};

function getDayWeek(object){
    let date = new Date(); // new Date() Создаёт экземпляр объекта Date, представляющего собой момент времени.
    let day = date.getDay(); // getDay() возвращает порядковый номер дня недели указанной даты по местному времени
    console.log(date);
    console.log(day);
    for (let key in object){
        if (day === +key){
            return object[key];
        }
    }
};
console.log('Текущий день недели: ',getDayWeek(week));
}());
