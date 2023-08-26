import Math from '../js/math';
import Magician from '../js/magician';
import Daemon from '../js/daemon';

test('test attack', () => {
  const math = new Math('Ivan', 3);
  expect(math.attack()).toEqual(8);
});

test('test attack2', () => {
  const daemon = new Daemon('Ivan', 2);
  expect(daemon.attack()).toEqual(9);
});

test('test attack3', () => {
  const magician = new Magician('Ivan', 1);
  expect(magician.attack()).toEqual(10);
});

test('test attack4', () => {
  const magician = new Magician('Ivan', 2);
  magician.stonedStatus = true;
  expect(magician.attack()).toEqual(4);
});

test('test attack5', () => {
  const daemon = new Daemon('Ivan', 5);
  daemon.stonedStatus = true;
  expect(daemon.attack()).toEqual(-6);
});

test('test attack6', () => {
  const math = new Math('Ivan', 4);
  math.stonedStatus = true;
  expect(math.attack()).toEqual(-3);
});
