import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingSection } from './pending-section.component';

const routes: Routes = [
  {
    path: '',
    component: PendingSection
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMatchesPageRoutingModule {}
