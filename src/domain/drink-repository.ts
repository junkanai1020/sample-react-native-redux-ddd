import * as Drink from './drink';

// 本来はDBと接続しデータを取得するコードとなる
const master: Readonly<Array<Drink.Model>> = [
  Drink.factory('water', 100, 30),
  Drink.factory('orange', 120, 30),
  Drink.factory('coffee', 120, 30),
];

export function getAll() {
  return master;
}
