import { RouterModule, Routes } from '@angular/router';
import { ServiceScreenComponent } from './service/service-shop/service-screen.component';
import { HomeComponent } from './screens/home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './service/service-type-form/service-type-form.component';
import { CategoryListComponent } from './service/service-type/service-type-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServiceScreenComponent },
    { path: 'services/:id', component: ServiceDetailComponent },
    { path: 'admin/serviceType', component: CategoryListComponent, canActivate: [AuthGuard, adminGuard]},
    { path: 'admin/serviceType/form', component: CategoryFormComponent, canActivate: [AuthGuard, adminGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }