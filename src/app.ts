import { Buyable } from './cart';

export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly timelength: number,
  ) {}

  get item(): Buyable {
    return this;
  }
}
