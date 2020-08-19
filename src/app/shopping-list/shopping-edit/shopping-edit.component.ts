import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Ingradients } from 'src/app/shared/ingradients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shopingListService: ShoppingListService) {

  }

  ngOnInit(): void {
  }

  addItemToppingList() {
    const newIngradient = new Ingradients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
   this.shopingListService.addNewIngradient(newIngradient);
  }

}
