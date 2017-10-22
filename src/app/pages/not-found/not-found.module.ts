
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [NotFoundComponent],
    declarations: [NotFoundComponent],
    providers: [],
})
export class NotFoundModule { }
