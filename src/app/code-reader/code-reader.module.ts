import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeReaderPageRoutingModule } from './code-reader-routing.module';

import { CodeReaderPage } from './code-reader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeReaderPageRoutingModule
  ],
  declarations: [CodeReaderPage]
})
export class CodeReaderPageModule {}
