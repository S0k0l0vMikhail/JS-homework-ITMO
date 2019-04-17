console.log('задание 1');
// lesson6/dom2.js: добавить стили для элементов, которые создаются функцией createElems(goods)
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: 'piano.jpg'
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: 'guitar.jpg'
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: 'drum.jpg'
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: 'flute.jpg'
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: 'harp.jpg'
    }
};

function createElems(obj) {
  for (let key in obj) {
    console.log(obj[key].title); // Заголовок
    let title = document.createElement("h2");
    title.innerText = obj[key].title;

    console.log(obj[key].img);
    let img = document.createElement("img"); // картинка
    img.setAttribute("src", "img/" + obj[key].img);

    console.log(obj[key].price);
    let p = document.createElement("p"); // цена
    p.innerText = obj[key].price;

    let div = document.createElement('div'); //див

    let divpicture = document.createElement('div'); //див для картинки
    divpicture.classList.add("picturestyle"); //див для картинки//див для картинки

    div.classList.add('divstyle'); //добавили стиль
    title.classList.add('titlestyle'); //добавили стиль
    img.classList.add('imgstyle'); //добавили стиль
    p.classList.add('pstyle'); //добавили стиль

    div.appendChild(title); // Заголовок
    div.appendChild(divpicture); //див для картинки
    divpicture.appendChild(img); // картинка
    div.appendChild(p); // цена

    let goodsDiv = document.getElementById("goods");
    goodsDiv.appendChild(div); //
  }
}

createElems(goods);
console.log('задание 2');
//Написать функцию генегации таблицы (для тестирования функции использовать массив articles).

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];

let tableGenerator = {
    init: function (arr_data) {
        let data = arr_data; // локальная переменная метода
        // ее видно только внутри данного метода
        this.data = arr_data; // свойство объекта - доступно
        // в других методах объекта
        this.table = document.createElement('table');
        this.table.setAttribute('border', '1');
    },
    // названия столбцов
    genCaption: function () {
        let captionRow = this.table.insertRow();
        for (let key in this.data[0]){
            let cell = captionRow.insertCell();
            cell.innerText = key.toUpperCase();
            cell.classList.add('caption-cell');
        }
    },

    genContent: function () {
        for (let i = 0; i < this.data.length; i++){
            let row = this.table.insertRow();
            for (let key in this.data[i]) {
                let cell = row.insertCell();
                cell.innerText = this.data[i][key];
                cell.classList.add('content-cell');
            }
        }
    },
    getTable: function (arr_data) {
        this.init(arr_data);
        this.genCaption();
        this.genContent();
        return this.table;
    }
};

let tableContainer = document.getElementById('for_table');
tableContainer.appendChild(tableGenerator.getTable(articles));
