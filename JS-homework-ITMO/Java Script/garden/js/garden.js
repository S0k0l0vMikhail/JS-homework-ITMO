class Garden {
	constructor () {
		this._trees = []; // массив деревьев
		this._quantity = Math.floor((Math.random() * (100-1)) +1); // генерируем случайным образом количесво деревьем которое будет добавлено  в сад
		for (let i = 0; i < this._quantity; i ++) {
			this._trees[i] = new Tree(); // добавляем деревья в сад
		}
		this._age = 1; // возраст сада
	}

	passDay() { // прошли сутки
		for (let i=0; i<this._trees.length; i++) {
            this._trees[i].passDayTree();
        }
        return this._age +=1;
	}

	getCountApples() { // количество яблок на деревьях сада
		let sumApple = 0
		this._trees.forEach(function (element) {
			sumApple+= element.getApples();
		})
		return this._sumApple = sumApple;
	}

	getCountTrees() { // количество деревьев в саду
		return this._trees.length;
	}
}
