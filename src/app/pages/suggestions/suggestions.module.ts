import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { Suggestions } from './suggestions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuggestionsRoutingModule
  ],
  declarations: [Suggestions]
})
export class SuggestionsModule {}
