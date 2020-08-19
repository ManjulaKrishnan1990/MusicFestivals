import { Component, OnInit } from '@angular/core';

import { Ingradients } from './../shared/ingradients.model'
import { ShoppingListService } from './../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingradients: Ingradients[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingradients = this.shoppingListService.getIngradientList();
    this.shoppingListService.ingradientsChanged.subscribe((ingradients: Ingradients[]) => {
      this.ingradients = ingradients;
    })
  }

  newIngradients(event) {
    this.ingradients.push(event);
  }

}
