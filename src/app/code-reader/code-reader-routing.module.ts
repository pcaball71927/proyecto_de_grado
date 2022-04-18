import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeReaderPage } from './code-reader.page';

const routes: Routes = [
  {
    path: '',
    component: CodeReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeReaderPageRoutingModule {}
