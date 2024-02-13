import Character from "../js/class/character.js";

test('Object test Character', () => {
  const patric = new Character().attackOption();

  patric.forEach(obj => {
    const objKeys = Object.keys(obj);
    expect(objKeys).toHaveLength(4);
  });

});