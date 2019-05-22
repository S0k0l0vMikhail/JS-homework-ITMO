
class Apple {
	constructor () {
		this._age = Math.floor(Math.random() * (31-1)) + 1; //возраст от 1 до 30
		this._color = Math.round(Math.random()) ? "Красное":"Зеленое"; // цвет яблока
		this._size = Math.floor(Math.random() * (5-1)) + 1; // размер яблока от 1 до 5
		this._spoil = 0; // спортилос 0/1
		this._fall = 0; // упало 0/1
	}
	set setAge (value) {
		this._age = value;
	}

	get getAge () {
		return this._age;
	}

	growOld() { // старение яблока

		return this._age += 1;

	}

	toFall () { // упало
		return this._fall = 1;
	}

	getSpoil() { // испортилось
		return this._spoil = 1;
	}

}
