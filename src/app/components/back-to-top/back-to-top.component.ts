import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare const $;
@Component({
    selector: 'back-to-top',
    templateUrl: './back-to-top.component.html',
    styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent {
    constructor(@Inject(DOCUMENT) private document: Document) { }
    private scrollTop: number;
    private scrollHeight: number;
    private newState: boolean = false;
    private oldState: boolean = false; 
    @HostListener('window:scroll') onScroll() {
        this.scrollTop = document.scrollingElement.scrollTop;
        this.scrollHeight = document.scrollingElement.scrollHeight;
        // console.log(this.scrollTop, this.scrollHeight);
        this.oldState = this.newState;
        if (this.scrollTop > 0.2 * this.scrollHeight) {
            this.newState = true;
            if (this.oldState !== this.newState) {
                $('.back-to-top').css({ 
                    display: 'block', 
                    // opacity: '0.7', 
                    // 'transition-duration': '250ms',
                });
                $('.back-to-top').animate({ opacity: 0.7 }, 250);
            }
        } else {
            this.newState = false;
            if (this.oldState !== this.newState) {
                setTimeout(() => {
                    $('.back-to-top').css({ display: 'none' });
                }, 250);
                $('.back-to-top').css({ 
                    opacity: '0',
                    'transition-duration': '250ms', 
                });
            }
        }
    }
    private backToTop($event): void {
        $('html').animate({ scrollTop: 0 }, 500);
    }
}
