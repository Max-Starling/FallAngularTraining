import { Component, AfterContentInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerComponent } from './../../components/spinner/spinner.component';
declare const $;
@Component({
    selector: 'main-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    constructor(private router: Router) {
        this.router.navigate(['/main/home']);
    }
    private preloading: boolean = true;
    private loaded: boolean = false;
    ngAfterContentInit() {
        this.loaded = true;
        setTimeout(() => {
            setTimeout(() => {
                this.preloading = false;
            }, 1000);
            $('.preload-wrapper').css({
                'transition-duration': '1000ms',
                opacity: '0',
            });
            $('body').css({ 'overflow-y': 'scroll' });
        }, 2000);
    }
    ngOnDestroy() {
        $('body').css({ 'overflow-y': 'hidden' });
    }
    private headerHeight = {};
    private onChanged(height) {
        this.headerHeight = height;
    }
}

    // const $preloader = $('.spinner-wrapper');
    // const $spinner = $preloader.find('.spinner');
