import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SwipeDirective } from '../swipe/swipe.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, UserDetailsComponent, SwipeDirective],
  exports: [
    SwipeDirective
  ],
})
export class HomePageModule { }
