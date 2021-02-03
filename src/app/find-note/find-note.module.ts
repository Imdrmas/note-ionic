import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindNotePageRoutingModule } from './find-note-routing.module';

import { FindNotePage } from './find-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindNotePageRoutingModule
  ],
  declarations: [FindNotePage]
})
export class FindNotePageModule {}
