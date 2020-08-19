import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHeighlight]'
})
export class BetterHeighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor : string = 'red';
  @Input() defaultColor: string = 'transparent';
  @Input() heighlightColor: string = 'blue';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //using renderer
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //using hostbinding
    this.backgroundColor = this.heighlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //using renderer
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //using hostbinding
    this,this.backgroundColor = this.defaultColor;
  }


}
