console.log('HW-8 Задание2');

//Меняем цвет при нажатии на радиокнопки
let form = document.forms.lesson;

let color = form.elements.color;

for (i=0; i<color.length; i++){
	color[i].addEventListener('click', showColor);

	function showColor () {
		console.log(this);
		form.elements.checkbox_fieldset.style.background = this.value; //   <fieldset name="checkbox_fieldset">
	};
}

//Активация поля формы
console.log("Активация поля формы");
let elem = form.elements.disabledOnOff; // активация поля <label><input type="checkbox" id="disabledOnOff">Отметьте, если указать другую информацию?</label>  <input type="text" name="disable" disabled>
 elem.addEventListener('click', activated);

function activated () {
	form.elements.disable.disabled = !this.checked;
}

// "Выбор языка программирования": выводить в консоль значения отмеченных чекбоксов.
let checkBox = form.elements['lang[]'];
for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener('click', getValueCheckBox);

}
    function getValueCheckBox(event) {
        let clickElement = event.target;
        console.log('Язык: ');
        if (clickElement.checked) {
            for (let i = 0; i < checkBox.length; i++) {
                if (checkBox[i].checked) {
                    console.log(checkBox[i].value);
                }
            }
        } else {
            for (let i = 0; i < checkBox.length; i++) {
                if (checkBox[i].checked) {
                    console.log(checkBox[i].value);
                }
            }
        }

    }
