import { Iwe7MenuService } from 'iwe7-layout';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { KeyboardStringComponent } from '../../../../iwe7-keyboard/src/lib/keyboard-string/keyboard-string';

@Component({
    selector: 'car-vin',
    templateUrl: 'car-vin.html',
    styleUrls: ['./car-vin.scss']
})
export class CarVinComponent implements OnInit {
    // 17
    list: string[] = ['L'];
    constructor(
        public menu: Iwe7MenuService
    ) { }

    ngOnInit() { }

    openKeyboardString(e: any) {
        console.log(e);
        if (e === 'delete') {
            this.list.pop();
        } else {
            if (this.list.length <= 16) {
                this.list.push(e);
            }
            if (this.list.length === 17) {
                this.menu.hide();
            }
        }
    }
}
