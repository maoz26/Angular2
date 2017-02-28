/**
 * Created by Maoz on 2/28/2017.
 */

import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[maoz]',
    host: {
        '(change)': 'onChange($event)',
        '(window:resize)': 'onResize($event)'
    }
})

export class MaozMethodDirective{
    constructor(private el: ElementRef, private renderer: Renderer){
    }
    onChange(){
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
    }
    onResize(){
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
    }
}