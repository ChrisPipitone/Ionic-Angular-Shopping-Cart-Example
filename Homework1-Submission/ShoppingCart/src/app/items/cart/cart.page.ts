import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor( private cartService: CartService, private router: Router, private alertCtrl: AlertController) { }

  selectedItem: Item;
  cartItems: Item[];

  ngOnInit() {
    this.cartItems = this.cartService.getAllItems();
  }

  async onDeleteItem(selectedItem: Item){
    let alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.cartService.deleteItem(selectedItem.id);
            this.router.navigate(['/items'])
          }
        }
      ]
    });
    await alert.present();
  }

}
