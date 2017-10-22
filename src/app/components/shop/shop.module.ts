import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ShopComponent } from './shop.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [ShopComponent],
    declarations: [ShopComponent],
    providers: [],
})
export class ShopModule { }
