import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'home' , component:HomeComponent},
    {path:'products' , component:ProductsComponent},
    {path:'about' , component:AboutComponent},
    {path:'login' , component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'cart/:id' , component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
