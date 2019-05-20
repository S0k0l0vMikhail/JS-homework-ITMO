console.log('Canvas');
let canvasCollection = document.getElementsByTagName('canvas');
let canvas = canvasCollection[0]; // взяли первый тег из html

canvas.width = 600;
canvas.height = 600;


let dogs = [];
dogs.push({
  x: 100,
  y: 420,
  dx: 0,
  dy: 0
});
let dogImg = new Image(); //собака
dogImg.src = "img/dog.png";


let cats = [];
cats.push({
  a: 100,
  b: 420,
  dxc: 2,
  dyc: 0
});
let catImg = new Image(); //кот
catImg.src = "img/cat.png";


let context = canvas.getContext('2d'); // getContext('2d')  (получили context)
let fonImg = new Image(); // Фоновое изобраение
fonImg.src = 'img/fon.png';

let timer = 0;

fonImg.onload = function() {
  game();
};
//основной игровой цикл
function game() {
  update();
  render();
  requestAnimFrame(game); //обновляем картинку
};

//функция обновления состояния игры
function update() {
  //генерация котов
  timer++;
  if (timer % 150 == 0) {
    cats.push({
      a: Math.random() * 2,
      b: Math.random() * 2,
      dxc: Math.random() * 2,
      dyc: Math.random() * 2,
      del: 0
    });
  }
  //физика (движение котов)
  for (i in cats) {
    cats[i].a = cats[i].a + cats[i].dxc;
    cats[i].b = cats[i].b + cats[i].dyc;
    //граничные условия
    if (cats[i].a <= 0 || cats[i].x >= 500) cats[i].dxc = -cats[i].dxc;
    if (cats[i].b >= 500) cats.splice(i, 1);
    //проверим котов  на столкновение с собакой
    for (j in dogs) {
      if (Math.abs(cats[i].a + 50 - dogs[j].x - 50) < 100 && Math.abs(cats[i].b - dogs[j].y) < 50) {
        //произошло столкновение

        //помечаем кота на удаление
        cats[i].del = 1;
        break;
      }
    }
    //удаляем котов
    if (cats[i].del == 1) cats.splice(i, 1);
  }
  //границы для собаки
  if (dogs[i].x >= 500) dogs[i].x = 500;
  if (dogs[i].x <= 0) dogs[i].x = 0;
  if (dogs[i].y >= 500) dogs[i].y = 500;
  if (dogs[i].y <= 0) dogs[i].y = 0;


};

function render() { // отображение на экране
  context.drawImage(fonImg, 0, 0, 600, 600); //фон
  context.drawImage(dogImg, dogs[i].x, dogs[i].y, 100, 100); //пес
  for (i in cats) context.drawImage(catImg, cats[i].a, cats[i].b, 100, 100); //коты
};

let requestAnimFrame = (function() { //обновляем картинку
  return window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();


document.addEventListener("keypress", movePic); // обработчик событий на собаку
function movePic(event) {
  console.log(event);

  if (event.code === "KeyD") {
    dogs[i].x += 20;
  } else if (event.code === "KeyA") {
    dogs[i].x -= 20;
  } else if (event.code === "KeyW") {
    dogs[i].y -= 20;
  } else if (event.code === "KeyS") {
    dogs[i].y += 20;
  }
}
