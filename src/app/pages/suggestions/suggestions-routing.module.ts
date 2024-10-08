import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Suggestions } from './suggestions.component';

const routes: Routes = [
  {
    path: '',
    component: Suggestions
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestionsRoutingModule {}
