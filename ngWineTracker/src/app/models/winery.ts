import { Wine } from './wine';
import { isNull } from 'util';
export class Winery {

  id: number;
  name: string;
  city: string;
  link: string;
  wines: Wine[];


constructor(
  id?: number,
  name?: string,
  city?: string,
  link?: string,
  wines?: Wine[]
) {
  this.id = id;
  this.name = name;
  this.city = city;
  this.link = link;
  this.wines = wines;
}
}
