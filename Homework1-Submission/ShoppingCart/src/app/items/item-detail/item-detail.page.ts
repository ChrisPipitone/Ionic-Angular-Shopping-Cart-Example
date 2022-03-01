import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from '../item.model';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  loadedItem: Item;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemsService, private cartService: CartService,
     private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('itemId')) {
        this.router.navigate(['./items'])
        return;
      }
      const itemId = paraMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });
  }

  async onDeleteItem(){
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
              this.itemService.deleteItem(this.loadedItem.id);
              this.router.navigate(['/items'])
            }
          }
        ]
      });
      await alert.present();
  //this.itemService.deleteItem(this.loadedItem.id);
  }

  onAddItem(){
    this.cartService.AddItem(this.loadedItem.id);
  }

}
