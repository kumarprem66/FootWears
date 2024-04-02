import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  toggle:boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
  }
}
