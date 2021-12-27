import Cart from './cart';
import Movie from './app';

let film1 = new Movie(1, 'Film One', 800, 2020, 'Russia', 'Film the best', 'Драма', 112);
let film2 = new Movie(2, 'Film Two', 1200, 2012, 'Englang', 'Film the best', 'Боевик', 212);
let film3 = new Movie(3, 'Film Three', 1300, 2019, 'USA', 'Film the best', 'Комедия', 180);

let cart = new Cart();
cart.add(film1.item);
cart.add(film2.item);
cart.add(film3.item);

test('Summ item prices (without sale)', () => {
  expect(cart.sum()).toBe(3300);
});

test('Summ item prices (with sale 20%)', () => {
  const sum = cart.sum(0.2);
  expect(sum).toBe(2640);
});

test('Remove item in cart', () => {
  cart.remove(1);
  cart.remove(2);
  expect(cart.items).toEqual([film3.item]);
});

test('Error undefined identificator', () => {
  const errorID = 5;
  expect(cart.remove(errorID)).toEqual(`Объект с ID ${errorID} не найден`);
});

test('Error sale parameter', () => {
  expect(cart.sum(2)).toEqual(`Процент скидки должен быть в промежутки от 0 до 1`);
});
