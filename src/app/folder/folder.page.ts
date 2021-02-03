import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddCategoryPage } from '../add-category/add-category.page';
import { AddNotePage } from '../add-note/add-note.page';
import { FindNotePage } from '../find-note/find-note.page';
import { Category } from '../modal/Modal';
import { CategoryService } from '../service/category.service';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  id: number;
  category: Category = {} as Category;
  showMessage = false;

  constructor(private activatedRoute: ActivatedRoute, private categpryService: CategoryService,
     private modalController: ModalController, private noteService: NoteService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    if(this.id!=null)
      this.categpryService.findCategory(this.id).subscribe(category => {
        this.category = category;
        if(this.category!=null) {
          this.showMessage = true;
        }
    });
  }
  async editCategory(id) {
    const modal = await this.modalController.create({
      component: AddCategoryPage,
      swipeToClose: true,
      componentProps: {id}
    });
    return await modal.present();
  }
  deleteCategory(id) {
    if(confirm('Are you sure you want to delete this category')) {
      this.categpryService.deleteCategory(id).subscribe(() => {
       window.location.reload();
      })
    }
  }
 async addNote(idCategory) {
  const modal = await this.modalController.create({
    component: AddNotePage,
    swipeToClose: true,
    componentProps: {idCategory}
  });
  return await modal.present();
  }
  async editNote(idNote) {
    const modal = await this.modalController.create({
      component: AddNotePage,
      swipeToClose: true,
      componentProps: {idNote}
    });
    return await modal.present();
    }
  deleteNote(id) {
   if(confirm("Are you sure you want to delte this note")) {
     this.noteService.deleteNote(id).subscribe(() => {
       window.location.reload();
     })
   }
  }
 async findNote(id) {
    const modal = await this.modalController.create({
      component: FindNotePage,
      swipeToClose: true,
      componentProps: {id}
    });
    return await modal.present();
  }
}
