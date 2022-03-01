import { Injectable } from '@angular/core';
import {Item} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [
    {
      id: '1',
      title: 'Water bottles',
      imageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS10S3ALy4ucHJcx_vqjFm_jVgvx7-kBnmci3CwXhEN6QsKl57U',
      description:['24 pack of water bottles']
    },
    {
      id: '2',
      title: 'Pens',
      imageURL: 'https://m.media-amazon.com/images/I/711F6-eLS6L._AC_SS450_.jpg',
      description:['10 pack of pens']
    },
    {
      id: '3',
      title: 'Matches',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61PvOpB4RvL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      description:['3 pack of matches']
    }
  ];

  constructor() { }

  getAllItems(){
    return [...this.items];
  }

  getItem(itemId: string){
    return {...this.items.find(item => item.id === itemId)}
  }

  deleteItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  filterItems(filterTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });
  }

}
