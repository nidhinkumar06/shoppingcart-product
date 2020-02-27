import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './modules/product.module';

const routes: Routes = [
  {
    path: 'product', loadChildren: () => ProductModule
  }
];

const routerModule = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
