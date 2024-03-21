import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent {

  @ViewChildren('inputEl')
  inputReference : QueryList<ElementRef>;

  output:string = "";

  ngOnInit(){

    // this is called when all the property of the compponent initialised
}
  show(){

    this.inputReference.forEach((el)=>{
      this.output += el.nativeElement.value+ " ";
    })
    
  }
}
