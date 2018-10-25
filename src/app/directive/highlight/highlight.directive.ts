import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string;
  @Input('appHighlight') bgcolor: string;

  constructor(private eltRef: ElementRef) { }

  @HostListener ('mouseover') onMouseOver() {
    this.highlight(this.bgcolor || 'red', this.color );
  }
  @HostListener ('mouseout') onMouseOut() {
    this.highlight('initial', 'initial');
  }

  private highlight( bgcolor: string, color?: string): void {


    this.eltRef.nativeElement.style.backgroundColor = bgcolor;
    this.eltRef.nativeElement.style.color = color;
  }

}
