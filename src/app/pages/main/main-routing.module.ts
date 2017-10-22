import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { MainComponent } from './main.component';

import { HomeComponent } from './../../components/home/home.component';
import { NewsComponent } from './../../components/news/news.component';
import { ShopComponent } from './../../components/shop/shop.component';
import { NotFoundComponent } from './../../pages/not-found/not-found.component';

const childRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'shop', component: ShopComponent },
];

const mainRoutes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: childRoutes,
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)], 
    exports: [RouterModule],
})
export class MainRoutingModule { }
