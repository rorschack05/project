import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

          

  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') serachInputEl : ElementRef

  onSearchTextChanged(){
   
  }

  updateSearchText(){
    this.searchText= this.serachInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText)
  }
}
 