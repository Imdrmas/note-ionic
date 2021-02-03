import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindNotePage } from './find-note.page';

const routes: Routes = [
  {
    path: '',
    component: FindNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindNotePageRoutingModule {}
