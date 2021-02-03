import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategoryPage } from './add-category/add-category.page';
import { Category } from './modal/Modal';
import { CategoryService } from './service/category.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: Category[];

  constructor(private modalController: ModalController, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.findCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  async addCategory() {
    const modal = await this.modalController.create({
      component: AddCategoryPage,
      swipeToClose: true
    });
    return await modal.present();
  }
}
