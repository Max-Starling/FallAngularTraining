import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackToTopComponent } from './back-to-top.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [BackToTopComponent],
    declarations: [BackToTopComponent],
    providers: [],
})
export class BackToTopModule { }
