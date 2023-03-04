import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Output()
  eventObj=new EventEmitter();

  searchNote="";
  searchButtonText="Search";
  search(){
     this.eventObj.emit(this.searchNote);
     
     if (this.searchButtonText === 'Search') {
      this.searchButtonText = 'Reset';
    } else {
      this.searchButtonText = 'Search';
    }
    this.searchNote="";
  }
}

