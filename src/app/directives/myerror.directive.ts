import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyerror]',
  standalone: true
})
export class MyerrorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter(){
    this.setBgColor('red')
  }
  @HostListener('mouseleave') OnMouseLeave(){
    this.setBgColor('')
  }
  
  private setBgColor(color:string):void{
    this.renderer.setStyle(this.el.nativeElement,'background-color',color)
    const children = this.el.nativeElement.children;
    for(let i=0; i<children.length;i++){
      this.renderer.setStyle(children[i],'background-color',color)
    }
  }
}
