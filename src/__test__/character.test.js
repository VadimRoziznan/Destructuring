import { character, attackOption } from "../js/class/character";

test('Object test Character', () => {
  const SpongeBob = new character();

  const correct = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
      }
    ]	

  expect(attackOption(SpongeBob)).toEqual(correct);
});