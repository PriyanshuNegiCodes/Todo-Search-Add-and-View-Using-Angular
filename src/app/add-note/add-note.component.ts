import { Component, EventEmitter, Output } from '@angular/core';
import { NOTES } from '../Models/notes';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  @Output()

noteEmitter= new EventEmitter();
 NoteDataFromUser:NOTES|any={
  id: "",
  title:"",
  content:""
 }
 addCard(){
  
  this.noteEmitter.emit(this.NoteDataFromUser);
  this.NoteDataFromUser = {};
 }
}
