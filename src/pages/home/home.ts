import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public produtos
  public loading
  public codigoBarras
  constructor(
    public navCtrl: NavController, 
    public http:HttpClient,
    public loadingCtrl: LoadingController,
    public barcodeScanner: BarcodeScanner
  ) {

  }


  ionViewDidLoad(){
  //  this.getProdutos()
   
  }





teste(){
  console.log("Olá mundo")
}




getProdutos(){
  this.carregando('Lista de produtos')
  this.http.get('http://172.17.23.107/api/produtos/').toPromise().then(response => {
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




codigodeBarras(){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.codigoBarras = barcodeData.text


    console.log(this.codigoBarras.text)
  }).catch(err => {
       console.log('Error', err);
  });
}




}
