import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

  userDetails: any = {};

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public toastController: ToastController) { }

  ngOnInit() {
    this.userDetails = this.navParams.data.data;
    this.presentToast();
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Swipe left to close modal.',
      duration: 2000
    });
    toast.present();
  }

}
