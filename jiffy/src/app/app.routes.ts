import { RouterModule, Routes } from '@angular/router';
import { ServiceScreenComponent } from './service-screen/service-screen.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServiceScreenComponent },
    { path: 'services/:id', component: ServiceDetailComponent },
    { path: 'admin/category', component: CategoryListComponent, canActivate: [AuthGuard, adminGuard]},
    { path: 'admin/category/form', component: CategoryFormComponent, canActivate: [AuthGuard, adminGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }