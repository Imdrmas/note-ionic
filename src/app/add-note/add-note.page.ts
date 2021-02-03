import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Note } from '../modal/Modal';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  note: Note = {} as Note;
  progressBar = false;
  idCategory: number;
  idNote: number;

  constructor(private noteService: NoteService, private modalController: ModalController) { }

  ngOnInit() {
    if (this.idNote != null) {
      this.noteService.findNote(this.idNote).subscribe(note => {
        this.note = note;
      })
    }
  }
  addNote() {
    this.progressBar = true;
    if (this.idNote != null) {
      this.noteService.editNote(this.note, this.idNote).subscribe(note => {
        this.note = note;
        window.location.reload();
      })
    }
    if(this.idCategory!=null) {
      this.noteService.addNote(this.note, this.idCategory).subscribe(note => {
        this.note = note;
        window.location.reload();
      })
    }
  }
  cancel() {
    this.modalController.dismiss();
  }
}
