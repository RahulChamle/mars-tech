import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any[];
  constructor(private userService: UserService,
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.userService.getUsers().subscribe(res => {
      this.users = res ? res : [];
      console.log('Users ', this.users);
    });
  }


  async userDetails(user: any) {
    // this.router.navigate(['/userDetails']);

    const modal = await this.modalController.create({
      component: UserDetailsComponent,
      swipeToClose: true,
      cssClass: 'my-custom-class',
      showBackdrop: true,
      backdropDismiss: true,
      componentProps: {
        data:user
      }
    });
    return await modal.present();
  }

}
