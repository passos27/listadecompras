import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public produtos
  public loading
  constructor(
    public navCtrl: NavController, 
    public http:HttpClient,
    public loadingCtrl: LoadingController
  ) {

  }


  ionViewDidLoad(){
   this.getProdutos()
   
  }





teste(){
  console.log("Olá mundo")
}




getProdutos(){
  this.carregando('Lista de produtos')
  this.http.get('http://172.17.19.122/api/produtos/').toPromise().then(response => {
  console.log(response)
  this.produtos = response
  this.loading.dismiss();
  }).catch(
    
  )


}



carregando(mensagem) {
  this.loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: `Aguarde: ${mensagem}`
  });
  this.loading.present();
}





}
