import { Component,Input } from '@angular/core';
import {NOTE} from '../Models/notes';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  
  recieveDataList=NOTE;

   searchItem(searchdata: string) {
    if(searchdata==""){
      this.recieveDataList=NOTE;
    }else{
      this.recieveDataList = NOTE.filter(x => x.title==searchdata);
      searchdata=""
    }
   
  }

  addCardData(NoteData:any){
    this.recieveDataList.push(NoteData);
  }
}

