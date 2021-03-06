import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams,AlertController,MenuController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { ServiceProvider } from '../../providers/service/service';
import { concat } from 'rxjs/operator/concat';

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  productList:any;
  pet:any;
  user_id:any;
  message:any;
  is_exist:any;
  likelist:any;
  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api:ApiProvider,
    private AuthService: AuthProvider,
    public alertCtrl: AlertController,
    private service: ServiceProvider) {
       // alert(AuthService.getuserid());
      this.user_id = AuthService.getuserid();
      this.pet ="wishlist";

  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
    this.mywhishList();
    this.mylikelist();
  }


  mywhishList(){

    this.api.post('mywishlist',{id:this.user_id}).subscribe((response : any)  => {
		console.log(response);
    if(response.Ack === 1){
      this.productList = response.wishlist_details;
      this.is_exist = 1;

    }else{
			this.message = response.msg;
			this.is_exist = 0;
    }
    }, err => {
    	this.service.popup('Alert', 'Something went wrong');
    });

  }


  mylikelist()
  {
    this.api.likelist('my_like_list',{user_id:this.user_id}).subscribe((response : any)  => {
      console.log(response);

      if(response.ACK === 1){
        this.likelist = response.likelist;
        this.is_exist = 1;
        console.log(this.likelist)
  
      }else{
        
        this.is_exist = 0;
      }
      }, err => {
        this.service.popup('Alert', 'Something went wrong');
    });

  }

  deletewishList(id) {
		let alert = this.alertCtrl.create({
			title: 'Confirm Remove',
			message: 'Do you want remove the item from your wishlist?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						// return false;
					}
				},
				{
					text: 'Remove',
					handler: () => {
						this.api.post('deletewishlist', { id: id }).subscribe((response: any) => {
							console.log(response);
							if (response.Ack === 1) {
								//  this.productList = response.wishlist_details;
								//  this.is_exist = 1;
								this.productList = null;
								this.mywhishList();

							} else {
								// this.message = response.msg;
								//this.is_exist = 0;
							}
						}, () => {
								this.service.popup('Alert', 'Something went Wrong');
							});
					}
				}
			]
		});
		alert.present();
    
  }

  // presentConfirm() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Confirm Remove',
  //     message: 'Do you want remove the item from your wishlist?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           return false;
  //         }
  //       },
  //       {
  //         text: 'Remove',
  //         handler: () => {
  //           return true;
  //         }
  //       }
  //     ]
  //   });
	// 	return alert.present();
  // }

  addtoCart(proid) {

    this.api.post('addcart',{id:this.user_id,product_id:proid}).subscribe((response : any)  => {
      console.log(response);
      if(response.Ack === 1){
        this.navCtrl.push("CartPage");
  
      }else{
       
      }
      }, err => {
      	this.service.popup('Alert', 'Something is Wrong');
      });
   }
  


}
