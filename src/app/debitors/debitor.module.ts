import { NgModule } from '@angular/core';
import { ProductListComponent } from './debitor-list.component';
import { ProductDetailComponent } from './debitor-detail.component';

import { RouterModule } from '@angular/router';
import { ProductGuardService } from './debitor-guard.service';
import { ProductService } from './debitor.service';
import { SharedModule } from './../shared/shared.module';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'debitors', component: ProductListComponent },
      {
        path: 'debitors/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent
      },
      {
        path: 'edit', component: EditComponent
      }

    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
