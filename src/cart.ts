export interface Buyable {
  readonly id: number,
  readonly name: string,
  readonly price: number,
}

export default class Cart {
  private itemsAll: Buyable[] = [];

  add (item: Buyable): void {
    this.itemsAll.push(item);
  }

  sum (sale: number = 0): number | string {
    if (sale < 0 || sale > 1) return this.error('Процент скидки должен быть в промежутки от 0 до 1');
    let sum: number = 0;
    this.itemsAll.forEach((item: Buyable) => sum += item.price * (1 - sale));
    return sum;
  }

  remove (id: number): void | string {
    let obj: Buyable = this.item(id);
    if (obj.id === -1) return this.error(`Объект с ID ${id} не найден`);
    this.itemsAll.splice(this.itemsAll.indexOf(obj), 1);
  }

  error (msg: string): string {
    return msg;
  }

  item(id: number): Buyable {
    let obj: Buyable = {
      id: -1,
      name: '',
      price: -1,
    };
    for (let i: number = 0; i < this.itemsAll.length; i++) {
      if (this.itemsAll[i].id === id) obj = this.itemsAll[i];
    }
    return obj;
  }

  get items(): Buyable[] {
     return [...this.itemsAll];
  }
}
