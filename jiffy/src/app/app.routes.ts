import { RouterModule, Routes } from '@angular/router';
import { ServiceScreenComponent } from './service-screen/service-screen.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServiceScreenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }