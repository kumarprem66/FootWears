import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchText:string = '';

  // 1. create an event

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();


  @ViewChild('searchInput') searchInputEl: ElementRef;
  // updateSearchText(event: any) {
  //  this.searchText =  event.target.value;
  // }

  // updateSearchText(inputEl:HTMLInputElement) {
  //   this.searchText =  inputEl.value;
    
  //   this.searchTextChanged.emit(this.searchText)
  //  }

   updateSearchText() {
    // this.searchText =  inputEl.value;
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
   }

  // onSearchTextChange(value:Event){
  //   this.searchTextChanged.emit(this.searchText)
  // }



}
