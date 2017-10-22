import { Component, Input, Inject, HostListener, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare const $;
@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    constructor(private router: Router, 
                @Inject(DOCUMENT) private document: Document) { }
    ngOnInit() {
        console.log(this.router.routerState.snapshot.url);
        this.glowOn('home');
        this.animateGlow();
    }
    ngOnDestroy() {
        this.disanimateGlow();
    }
        /*--- Navbar Glow ---*/
    private glowOn(name: string): void {
        $(`${'.navbar-item-'}${name}`).addClass('navbar-glow');
    }
    private glowOff(name?: string): void {
        if (name) {
            $(`${'.navbar-item-'}${name}`).removeClass('navbar-glow');
        } else {
            $('.navbar-glow .navbar-item-inner').css({ opacity: 1 });
            $('[class^="navbar-item"]').removeClass('navbar-glow');
        }
    }
    private interval: any;
    private opacity: number = 1;
    private coefficient: number = -1;
    public animateGlow(): void {
        this.interval = setInterval(() => {
            this.opacity += this.coefficient * 0.01;
            if (this.opacity <= 0.7) {
                this.coefficient = 1;
            } else if (this.opacity >= 1) {
                this.coefficient = -1;
            }
            $('.navbar-glow .navbar-item-inner').css({ opacity: this.opacity }); 
        }, 30);
    }
    public disanimateGlow(): void {
        clearInterval(this.interval);
    }
        /*--- Navbar Navigation ---*/
    private toHome(): void {
        this.router.navigate(['/main/home']);
        this.glowOff();
        this.glowOn('home');
    }
    private toNews(): void {
        this.router.navigate(['/main/news']);
        this.glowOff();
        this.glowOn('news');
    }
    private toShop(): void {
        this.router.navigate(['/main/shop']);
        this.glowOff();
        this.glowOn('shop');
    }
        /*--- Navbar Scroll ---*/
    @Input() heightLarge;
    @Input() heightSmall;
    private scrollValue: number = 0;
    private newState: boolean = false;
    private oldState: boolean = false;
    @HostListener('window:scroll') onScroll() {
        this.scrollValue = this.document.scrollingElement.scrollTop;
        this.oldState = this.newState;
        if (this.scrollValue >= 0.5 * this.heightLarge) {
            this.newState = true;
            if (this.oldState !== this.newState) {
                // console.log(this.oldState, this.newState);
                $('.navbar-wrapper').css({
                    opacity: '0.8',
                });
                $('.navbar-wrapper-copy').css({
                    display: 'flex', 
                    position: 'fixed', 
                    top: `${this.heightSmall}${'px'}`, 
                    right: 0, 
                    left: 0,
                    opacity: '1',
                });
            }
        } else {
            this.newState = false;
            if (this.oldState !== this.newState) {
                // console.log(this.oldState, this.newState);
                $('.navbar-wrapper').css({
                    opacity: 1,
                });
                setTimeout(() => {
                    $('.navbar-wrapper-copy').css({ 
                        display: 'none',
                        position: 'static', 
                        top: `${this.heightLarge}${'px'}`,
                    });
                }, 250);
                $('.navbar-wrapper-copy').css({ 
                    'transition-duration': '250ms', 
                    opacity: '0',
                });
            }
        }
    }
}
