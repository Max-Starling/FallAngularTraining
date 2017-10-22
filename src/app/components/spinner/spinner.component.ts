import { Component, OnInit, OnDestroy } from '@angular/core';

declare const $;
@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    constructor () {
        // this.rotateSpinner();
    }
    ngOnInit() {
        this.rotateSpinner();
    }
    ngOnDestroy() {
        this.stopSpinner();
    }
    private angle: number = 0;
    private interval: any;
    public rotateSpinner(): void {
        this.interval = setInterval(() => {
            this.angle -= 1;
            if (this.angle === -360) {
                this.angle = 0;
            } 
            $('.spinner-img').rotate(this.angle);
        }, 7);
    }
    public stopSpinner(): void {
        clearInterval(this.interval);
    }
}
