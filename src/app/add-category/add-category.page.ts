import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../modal/Modal';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  category: Category = {} as Category;
  progressBar = false;
  id: number;

  constructor(
    private categoryService: CategoryService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    if (this.id != null) {
      this.categoryService.findCategory(this.id).subscribe((category) => {
        this.category = category;
      });
    }
  }
  cancel() {
    this.modalController.dismiss();
  }
  addCategory() {
    this.progressBar = true;
    if (this.id != null) {
      this.categoryService
        .editCategory(this.category, this.id)
        .subscribe((category) => {
          this.category = category;
          window.location.reload();
        });
    } else {
      this.categoryService.addCategory(this.category).subscribe((category) => {
        this.category = category;
        window.location.reload();
      });
    }
  }
}
