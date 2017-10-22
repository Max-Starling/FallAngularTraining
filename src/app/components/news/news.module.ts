import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { NewsComponent } from './news.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    exports: [NewsComponent],
    declarations: [NewsComponent],
    providers: [],
})
export class NewsModule { }
