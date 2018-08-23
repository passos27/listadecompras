import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public produtos
  constructor(public navCtrl: NavController, public http:HttpClient) {

  }


  ionViewDidLoad(){
   this.getProdutos()
  }





teste(){
  console.log("Olá mundo")
}




getProdutos(){
  this.http.get('http://172.17.19.122/api/produtos/').toPromise().then(response => {
  console.log(response)
  this.produtos = response
  }).catch(
    
  )


}









}
