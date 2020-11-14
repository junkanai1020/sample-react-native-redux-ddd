import { assert, assertIsDefined } from '../lib/assert';
import * as Drink from './drink';
import * as DrinkRepository from './drink-repository';

export interface Model {
  inventory: Readonly<Array<Drink.Model>>;
  chargedMoney: number;
}

export function factory(): Model {
  return {
    inventory: DrinkRepository.getAll(),
    chargedMoney: 0,
  };
}

// お金を投入する
export function charge(vendingMachine: Model, money: number) {
  return {
    ...vendingMachine,
    chargedMoney: vendingMachine.chargedMoney + money,
  };
}

// 飲料を売る
export function sell(vendingMachine: Model, id: string): Model {
  const selected = vendingMachine.inventory.find(item => item.id === id);
  assertIsDefined(selected);
  assert(selected.remains <= 0, `Selected drink is sold out: ${selected.name}`);
  assert(
    vendingMachine.chargedMoney < selected?.price,
    `Too few charged money for selected drink: ${vendingMachine.chargeMoney} < ${selected.price}`,
  );
  return {
    ...vendingMachine,
    inventory: vendingMachine.inventory.map(item => {
      if (item === selected) {
        return {
          ...selected,
          remains: selected.remains - 1,
        };
      }
      return item
    }),
    chargedMoney: vendingMachine.chargedMoney - selected?.price,
  }
}
