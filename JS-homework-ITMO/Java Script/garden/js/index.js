let garden1 = new Garden();
let three1 = new Tree();
let apple1 = new Apple();

console.log('сад',garden1);
console.log('деревья',three1);
console.log('яблоки',apple1);


garden1.passDay(); // прошли одни сутки
console.log('прошли сутки',garden1.passDay());
garden1.passDay(); // прошли одни сутки
console.log('прошли сутки',garden1.passDay());
garden1.passDay(); // прошли одни сутки
console.log('прошли сутки',garden1.passDay());
garden1.getCountApples(); // получить список висящих яблок на деревьях
console.log('получить список висящих яблок на деревьях',garden1.getCountApples());
garden1.passDay(); // прошли одни сутки
console.log('прошли сутки',garden1.passDay());
garden1.getCountApples(); // получить список висящих яблок на деревьях этого сада деревьях
console.log('получить список висящих яблок на деревьях',garden1.getCountApples());
garden1.passDay(); // прошли одни сутки
console.log('прошли сутки',garden1.passDay());
garden1.getCountApples(); // получить список висящих яблок на деревьях этого сада
console.log('получить список висящих яблок на деревьях',garden1.getCountApples());
