import { Winery } from './winery';
import { isUndefined } from 'util';
export class Wine {

  id: number;
  name: string;
  year: number;
  type: string;
  color: string;
  rating: number;
  price: number;
  tastingNotes: string;
  winery: Winery;


constructor(
  id?: number,
  name?: string,
  year?: number,
  type?: string,
  color?: string,
  rating?: number,
  price?: number,
  tastingNotes?: string,
  winery?: Winery
) {
  this.id = id;
  this.name = name;
  this.year = year;
  this.type = type;
  this.color = color;
  this.rating = rating;
  this.price = price;
  this.tastingNotes = tastingNotes;
  this.winery = winery;
  if (isUndefined(winery)) {
    this.winery = new Winery();
  }
}
}
