import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Form
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { routing, appRoutingProviders } from './app.routing'

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductEditComponent } from './components/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
