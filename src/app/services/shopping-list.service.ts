import { Injectable, EventEmitter } from '@angular/core';
import { Ingradients } from '../shared/ingradients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingradientsChanged = new EventEmitter<Ingradients[]>();
  ingradients: Ingradients[] = [new Ingradients('Maida', 2),new Ingradients('Sugar', 3)];
  constructor() { }

  getIngradientList() {
    return this.ingradients.slice();
  }

  addNewIngradient(ingradient: Ingradients) {
    this.ingradients.push(ingradient);
    this.ingradientsChanged.emit(this.ingradients);
  }
  

  addIngradients(ingradients: Ingradients[]) {
    this.ingradients.push(...ingradients); // ...  will make shure add all the ingradients as different objects rather than one sinle array of objects
    this.ingradientsChanged.emit(this.ingradients);
  }
}
