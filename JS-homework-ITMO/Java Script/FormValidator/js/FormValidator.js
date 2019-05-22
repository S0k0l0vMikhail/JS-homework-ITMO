function FormValidator(form) {
    this._form = form;
    this._elem = document.querySelectorAll('.validate');
    this._form.addEventListener('submit', this.some.bind(this));
    for(let i=0; i<this._elem.length; i++){
        this._elem[i].addEventListener('focus', this.removeMessage.bind(this));
    }
    this._errors = [];
}

FormValidator.prototype.addRules = function(rule){
    this._rules = rule.rules;
    this._messages = rule.messages;
};

FormValidator.prototype.some = function(event){
    event.preventDefault();
    for (let i = 0; i < this._elem.length; i++){
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)) {
            this._errors.push([this._elem[i].name]);
        }
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)){
            this._elem[i].nextSibling.innerText = this._messages[this._elem[i].name];
        }
    }
};

let form = document.forms.someForm;

FormValidator.prototype.isValid = function(){
    if (this._errors.length > 0){
        console.log("Количество ошибок", this._errors.length);
        return;
    }return true;
};

FormValidator.prototype.removeMessage = function(event){
    event.target.nextSibling.innerText = "";
};

let formValidator = new FormValidator(form);

formValidator.addRules({
    rules: {
        login: /^[a-zA-Z][a-zA-Z0-9-_\.]{5,20}$/,
        pwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    },
    messages: {
        login: "Логин с ограничением 6-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква",
        pwd: "Пароль должен содержать строчные и прописные латинские буквы, цифры"
    },
});

form.addEventListener("submit", sendForm);

function sendForm() {
    if(formValidator.isValid()){

        console.log("Ошибок нет");
    }
}
