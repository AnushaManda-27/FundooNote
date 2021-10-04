import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteId:any;
  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor:string=''
  constructor(public note: NoteserviceService) { }

  ngOnInit(): void {
  }
  receiveColorCode = ($isColor:string) =>{
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
  }

  pin() {
    console.log(this.noteId)
    let dataPin = {
      noteIdList: [this.noteId],
      "isPined": true
    }
    console.log("note and boolean ", dataPin);
    this.note.pinedNote(dataPin, this.token_Id).subscribe((dataPin) => {
      console.log("Pined Successfully", dataPin);

    });

  }
  
  delete() {
    console.log(this.noteId);
    let data = {
      noteIdList:[this.noteId],
      isDeleted:true
    }
    this.note.deleteNotes(data, this.token_Id).subscribe((data)=>{
      console.log("Deleted Successfully", data);
    });
  }
  archivePage() {
    console.log(this.noteId)
    let dataArchive = {
      noteIdList:[this.noteId],   
      "isArchived": true   
    }
    console.log("note and boolean ", dataArchive);
    this.note.archivedNotes(dataArchive, this.token_Id).subscribe((dataArchive)=>{
      console.log("Archieve Successfull", dataArchive);
    });
  }

  reloadCurrentPage() {
    window.location.reload();
  }
  
}
