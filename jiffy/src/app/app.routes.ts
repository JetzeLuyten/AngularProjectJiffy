import { RouterModule, Routes } from '@angular/router';
import { ServiceScreenComponent } from './service-screen/service-screen.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServiceScreenComponent},
    { path: 'admin/category', component: CategoryListComponent },
    { path: 'admin/category/form', component: CategoryFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }