import { Injectable } from '@angular/core';
import {Item} from './item.model';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Item[] = [
      {
        id: '1',
        title: 'Water bottles',
        imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS10S3ALy4ucHJcx_vqjFm_jVgvx7-kBnmci3CwXhEN6QsKl57U',
        description:['24 pack of water bottles']
      }
  ];
  constructor(private itemsService: ItemsService) { 
  //  this.cartItems = [] 
  }


  getAllItems(){
    return [...this.cartItems];
  }

  getItem(itemId: string){
    return {...this.cartItems.find(item => item.id === itemId)}
  }

  deleteItem(itemId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  filterItems(filterTerm) {
    return this.cartItems.filter(item => {
      return item.title.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });
  }

  AddItem(itemId: string) {
    this.cartItems.push(...this.cartItems,this.itemsService.getItem(itemId) )
  }
}
