import { Component } from '@angular/core';
import { Category } from '../category';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categories: Category[] = [];
  categories$: Subscription = new Subscription();
  deleteCategory$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.categories$.unsubscribe();
    this.deleteCategory$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['admin/category/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    this.router.navigate(['admin/category/form'], { state: {id: id, mode: 'edit'} });
  }

  delete(id: number) {
    this.deleteCategory$ = this.categoryService.deleteCategory(id).subscribe({
      next: (v) => this.getCategories(),
      error: (e) => this.errorMessage = e.message
    });
  }

  getCategories() {
    this.categories$ = this.categoryService.getCategories().subscribe(result => this.categories = result);
  }
}
