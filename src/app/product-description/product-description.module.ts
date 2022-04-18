import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDescriptionPageRoutingModule } from './product-description-routing.module';

import { ProductDescriptionPage } from './product-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDescriptionPageRoutingModule
  ],
  declarations: [ProductDescriptionPage]
})
export class ProductDescriptionPageModule {}
