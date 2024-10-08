import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMatchesPageRoutingModule } from './pending-section-routing.module';

import { PendingSection } from './pending-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMatchesPageRoutingModule
  ],
  declarations: [PendingSection]
})
export class PendingSectionModule {}
