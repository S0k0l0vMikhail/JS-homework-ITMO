
class Tree {
	constructor () {
		this._age = 1; // возраст дерева
		this._apples = []; // массив яблок
		this._quantity =  Math.floor((Math.random()*(100-1)) +1); // количество яблок от 1 до 100
		for (let i = 0; i < this._quantity; i++) {
			this._apples[i] = new Apple(); // добавляем яблоки на дерево
		}
	}

	passDayTree() { // прошел день дерва
		for (let i = 0; i < this._apples.length; i++) {

			this._apples[i].growOld(); // старение яблока

          if (this._apples[i].getAge === 30) {
          	this._apples[i].toFall(); //упало
          }
          if (this._apples[i].getAge === 31) {
          	this._apples[i].getSpoil(); // спортилос
          }
      }
			this._age += 1;
			this.newApple();
      return;
	}

	newApple() { // день рождения яблока
		if (this._age === 30) {
			this._apples.push(new Apple());
			this._age = 0;
		}
	}

	getApples() {
		let countApples = 0;
		for (let i = 0; i<this._apples.length; i++) {
			if (this._apples[i]._spoil === 0){
				++countApples;
			}
		}
		return this._countApples = countApples;
	}
}
