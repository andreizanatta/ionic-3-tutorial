import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Andrei C. Zanatta";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert("Olá mundo!");
    alert("A soma é "+(num1 + num2));
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
