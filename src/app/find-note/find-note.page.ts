import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Note } from '../modal/Modal';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-find-note',
  templateUrl: './find-note.page.html',
  styleUrls: ['./find-note.page.scss'],
})
export class FindNotePage implements OnInit {
  note: Note = {} as Note;
  id: number;

  constructor(private modalController: ModalController, private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.findNote(this.id).subscribe(note => {
      this.note = note;
    })
  }
  cancel() {
    this.modalController.dismiss();
  }
}
