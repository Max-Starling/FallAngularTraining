import { Directive, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare const $;
@Directive({
    selector: '[header-scroll]',
})
export class HeaderScrollDirective {
    constructor(@Inject(DOCUMENT) private document: Document) { }
    scrollValue: number = 0;
    skip: number = 0;
    @Output() update = new EventEmitter<any>();
    @HostListener('window:scroll') onScroll() {
        this.scrollValue = this.document.body.scrollTop;
        console.log(this.scrollValue);
        if (this.scrollValue === this.document.body.scrollHeight - $(window).height()) {
            this.skip += 20;
            this.update.emit({ skip: this.skip });
        }
    }
}
