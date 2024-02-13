export default class Character {
  constructor() {
    this.name = 'Лучник'; 
    this.type = 'Bowman';
    this.health = 50;
    this.level = 3,
    this.attack = 40,
    this.defence = 10,
    this.special = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

  attackOption() {
    const changedAttackProperties = new Array;

    for (const prop in this.special) {
      if ('description' in this.special[prop]) {
        changedAttackProperties.push(this.special[prop])
      }
      else {
        this.special[prop].description = 'Описание недоступно'
        changedAttackProperties.push(this.special[prop])
      }
      
    }
    return changedAttackProperties
  }

}
