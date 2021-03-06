import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  cid:any;
  productList:any;
  image_url: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api:ApiProvider,
    private AuthService: AuthProvider,
    public alertCtrl: AlertController,
    private service: ServiceProvider
  ) {
    this.cid = this.navParams.get('id');
    this.getProductlist(this.cid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  getProductlist(cid){    
    this.api.post('product_list',{cid:cid}).subscribe((response : any)  => {
      console.log(response);
      if(response.Ack === 1){  
        this.productList = response.products;  
        this.image_url = response.link;
      }else{
        this.service.popup('Alert', 'Product Not Found');
      }
    }, err => {
      this.service.popup('Alert', 'Error');
    });
    
      }

      gotoDetails(id) {   
        this.navCtrl.push('DetailPage', {id:id});
      }

}
