import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  private range: number[];

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {


  }

  @Input() set appCustom(value) {
    this.viewContainerRef.clear();
    this.range = this.generteRange(value[0], value[1]);
    console.log(this.range);
    console.log('Working...');
    this.range.map(number => this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: number }));
  }
  // 10-15 -> [10, 11, 12, 13, 14, 15]
  private generteRange(from, to): number[] {
    console.log(to + '   ' + from);
    return Array(to - from + 1 ).fill(0).map((_, index) => from + index );
  }

}
