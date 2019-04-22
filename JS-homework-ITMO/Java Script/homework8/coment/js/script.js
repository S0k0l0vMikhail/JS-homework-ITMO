// Реализовать возможность добавления комментариев. Комментарий вводится в textarea. Комментарий добавляется по нажатию на кнопку Комментировать. При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый), имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата), текст комментария (тот, что был введен в textarea).
console.log('Задание 1');
//добавление коментария добавление коментария добавление коментариядобавление коментария
let letNameUser = prompt("Введите имя пользователя", "Вася")
let elem = document.getElementById("button");
elem.addEventListener("click", addComment);

function addComment () {
	let comentValue = document.getElementById("newComment").value; //значение textarea (сам коментарий)
  	if (!comentValue){
		console.log("нет коментария");
		return;
	}let comment = document.createElement("p");
		comment.innerText = comentValue;
        comment.classList.add ("commentP");
        let fieldset = document.getElementById("comFieldset");
        let div = document.createElement("div");
        div.classList.add("commentDiv");
        let data = new Date();
        let ComDate = document.createElement("p");
        ComDate.classList.add("ComDate");
        ComDate.innerText = data;
        let comName = document.createElement("p");
        comName.classList.add("comName");
        comName.innerText = letNameUser;
        let comAva = document.createElement("img");
        comAva.classList.add("imgstyle");
        comAva.setAttribute("src", "img/img_avatar.png"); //картинка ава
        fieldset.insertBefore(div, comFieldset.firstChild); // <fieldset id="comFieldset"> <div class="commentDiv"> </div></fieldset> див будет всегда сверту firstChild
        div.appendChild(comAva);
        div.appendChild(comName);
        div.appendChild(ComDate);
        div.appendChild(comment);
}
