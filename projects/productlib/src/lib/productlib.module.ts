import { NgModule, ModuleWithProviders } from '@angular/core';
import { CatlogComponent } from './catlog/catlog.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AmexioWidgetModule } from 'amexio-ng-extensions';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catlog',
    pathMatch: 'full'
  },
  {
    path: 'catlog',
    component: CatlogComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },

];

@NgModule({
  declarations: [CatlogComponent, AddProductComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [CatlogComponent, AddProductComponent]
})
export class ProductlibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductlibModule,
      providers: []
    };
  }
}
