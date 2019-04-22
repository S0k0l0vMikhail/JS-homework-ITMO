//Написать функцию генерации поля n x n (значение n - аргумент функции), в ячейки рандомно спрятать несколько призов. Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. Количество оставшихся попыток выводим рядом с игровым полем

let table = document.getElementById('table');

function getTable(n) { // функция, которая формирует таблицу с ячейками
    for(let i = 0; i < n; i++){
        let row =table.insertRow(i); //insertRow()добавляет новую строку в таблицу и возвращает на неё ссылку.
        for(let j = 0; j < n; j++) {
            let cell = row.insertCell();
            cell.innerText = 'Тут Подарок?';
                   function getRandomInt(min, max) { //генерация рандомного числа
                     return Math.floor(Math.random() * (max - min)) + min;
                   }
                   let randomize = getRandomInt(j,n);
                   console.log(getRandomInt(j,n));
            if(randomize === j){
                cell.setAttribute('data-present', 'present'); // добавляем ячейкам таблицы атрибуты подарка
            } else {
                cell.setAttribute('data-lose', 'lose');
            }

        }
    }

}
let n = prompt('Введите n',"3");
getTable(n);

let presentContainer = document.getElementById('present-container');
let div = document.createElement('div'); //  количестве попыток
div.classList.add('info');
presentContainer.appendChild(div);

presentContainer.addEventListener('click', getEvent); // работа с кликом мыши по ячейкам
let count = 3;
div.innerText = 'Количество попыток осталось: ' + count;
function getEvent(event) { // функция обработки событий
    let ElemClickPres = event.target; //элемент на котором сработал click
    let present = ElemClickPres.dataset.present;
    if (present) {
        ElemClickPres.innerText = 'Квартира';
        ElemClickPres.classList.add('present');
        count--;
        console.log(count);
    }
    let looser = ElemClickPres.dataset.lose;
    if (looser) {
        ElemClickPres.innerText = 'Пусто';
        ElemClickPres.classList.add('lose');
        count--;
        console.log(count);
    }
    if (count===0) {
        this.removeEventListener('click', getEvent);
    }
    div.innerText = 'Количество попыток осталось: ' + count;
}
