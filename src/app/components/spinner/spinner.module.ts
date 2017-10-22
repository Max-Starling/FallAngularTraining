import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { SpinnerComponent } from './spinner.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [SpinnerComponent],
    declarations: [SpinnerComponent],
    providers: [],
})
export class SpinnerModule { }
