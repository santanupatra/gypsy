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
  id:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api:ApiProvider,
    private AuthService: AuthProvider,
    public alertCtrl: AlertController,
    private service: ServiceProvider
  ) {
    this.id = this.navParams.get('id');
    this.getProductlist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  getProductlist(){
    
    this.api.post('product_list',{user_id:''}).subscribe((response : any)  => {
      console.log(response);
      if(response.Ack === 1){
        //  this.afloginsuccess(response);
  
        this.companyList = response.full_list;
  
        this.image_url = response.image_url;
      }else{
        this.service.popup('Alert', 'Wrong EmailId & Password');
      }
    }, err => {
      this.service.popup('Alert', 'Already Registered');
    });
    
      }

}
