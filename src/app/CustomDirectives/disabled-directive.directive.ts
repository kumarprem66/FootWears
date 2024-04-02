import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disabledDirective]'
})
export class DisabledDirectiveDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }


  @Input() set disabledDirective(disable:boolean){
    if(disable){
      this.renderer.addClass(this.element.nativeElement,'disable-out-of-stock-product');
     
    }else{
      this.renderer.removeClass(this.element.nativeElement,'disable-out-of-stock-product');
    }
  }



}
