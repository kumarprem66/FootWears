import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[setBackground]'
})
export class SetBackground implements OnInit{

  
    constructor(private element :ElementRef,private renderer:Renderer2){

       

    }

    @Input() textColor: string = 'white';
    @Input('setBackground') backColor : string = '#36454F';

    // ngOnInit() {

    //     // this is not the good way of manipulating the html element, better to use Renderer2
    //     this.element.nativeElement.style.backgroundColor = '#36454F';
    //     this.element.nativeElement.style.color = 'white';
    // }

    ngOnInit() {

        // this is not the good way of manipulating the html element, better to use Renderer2
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor', this.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.textColor);
    this.renderer.setAttribute(this.element.nativeElement,'title','this is example title');
   
    }
}