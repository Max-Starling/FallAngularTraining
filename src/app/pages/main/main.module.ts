import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { HeaderModule } from '../../components/header/header.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { FooterModule } from '../../components/footer/footer.module';
import { BackToTopModule } from '../../components/back-to-top/back-to-top.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeModule } from './../../components/home/home.module';
import { NewsModule } from './../../components/news/news.module';
import { ShopModule } from './../../components/shop/shop.module';
import { SpinnerModule } from './../../components/spinner/spinner.module';

import { HeaderScrollModule } from '../../directives/header-scroll/header-scroll.module';
@NgModule({
    imports: [
        RouterModule,
        HeaderModule,
        NavbarModule,
        HeaderScrollModule,
        BackToTopModule,
        FooterModule,
        MainRoutingModule,
        HomeModule,
        NewsModule,
        ShopModule,
        SpinnerModule,
        CommonModule,
    ],
    exports: [],
    declarations: [MainComponent],
    providers: [],
})
export class MainModule { }
