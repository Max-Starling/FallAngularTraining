import { Component, Inject, HostListener, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare const $;
@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(@Inject(DOCUMENT) private document: Document) { }
    private scrollValue: number = 0;
    private heightLarge: number = 0;
    private newState: boolean = false;
    private oldState: boolean = false;
    @Output() onChanged = new EventEmitter<any>();
    @HostListener('window:scroll') onScroll() {
        // this.scrollValue = window.scrollY;
        this.scrollValue = this.document.scrollingElement.scrollTop;
        this.heightLarge = $('.header-wrapper').height();
        // console.log(this.scrollValue, this.heightLarge);
        this.onChanged.emit({
            heightLarge: this.heightLarge,
            heightSmall: $('.header-img-small').height(),
        });
        this.oldState = this.newState;
        if (this.scrollValue >= 0.5 * this.heightLarge) {
            this.newState = true;
            if (this.oldState !== this.newState) {
                $('.header-img-small').css({
                    display: 'block',
                    opacity: '1',
                    'transition-duration': '500ms',
                });
            }
        } else {
            this.newState = false;
            if (this.oldState !== this.newState) {
                setTimeout(() => {
                    $('.header-img-small').css({ display: 'none' });
                }, 250);
                $('.header-img-small').css({ 'transition-duration': '250ms', opacity: '0' });
            }
        }
    }
    @HostListener('window:resize') onResize() {
        this.document.scrollingElement.scrollTop = 0;
    }
}
