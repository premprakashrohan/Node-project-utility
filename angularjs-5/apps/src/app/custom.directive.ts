import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {
  @Input() appCustom;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', `${this.appCustom}`);
  }

}
