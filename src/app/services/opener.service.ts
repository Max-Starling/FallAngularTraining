import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OpenerService {
    constructor(private router: Router) {

    }
    private map: any = {
        default: '/main',
        home: '/main/home',
        news: '/main/news',
        shop: '/main/shop',
    };
    public open(link: string): void {
        if (this.map[link]) {
            this.router.navigate(this.map[link]);
        } else {
            this.router.navigate(this.map['default']);
        }
    }
}
