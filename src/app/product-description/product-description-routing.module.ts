import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDescriptionPage } from './product-description.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDescriptionPageRoutingModule {}
