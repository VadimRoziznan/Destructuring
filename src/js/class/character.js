export function character() {
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

export function attackOption(obj) {
  const changedAttackProperties = new Array;

  for (const prop in obj.special) {
    if ('description' in obj.special[prop]) {
      changedAttackProperties.push(obj.special[prop])
    }
    else {
      obj.special[prop].description = 'Описание недоступно'
      changedAttackProperties.push(obj.special[prop])
    }
    
  }
  return changedAttackProperties
}

