import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: [],
})
export class FooterModule { }
