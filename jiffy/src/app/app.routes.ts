import { RouterModule, Routes } from '@angular/router';
import { ServiceShopComponent } from './service/service-shop/service-shop.component';
import { HomeComponent } from './screens/home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './service/service-type-form/service-type-form.component';
import { CategoryListComponent } from './service/service-type/service-type-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { adminGuard } from './admin.guard';
import { ServiceFormComponent } from './service/service-form/service-form.component';
import { MyServicesComponent } from './service/my-services/my-services.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServiceShopComponent },
    { path: 'services/:id', component: ServiceDetailComponent },

    { path: 'admin/servicetype', component: CategoryListComponent, canActivate: [AuthGuard, adminGuard]},
    { path: 'admin/servicetype/form', component: CategoryFormComponent, canActivate: [AuthGuard, adminGuard]},

    { path: 'shop', component: ServiceShopComponent },
    { path: 'myservices', component: MyServicesComponent },

    { path: 'myservices/form', component: ServiceFormComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }