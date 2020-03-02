import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopDescriptionComponent } from './components/shop-description/shop-description.component';
import { StoreComponent } from './components/store/store.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, RegisterComponent, NavbarComponent, HomeComponent, AboutComponent, ShopDescriptionComponent, StoreComponent ],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, NgbModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
