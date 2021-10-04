import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-archive-icons',
  templateUrl: './archive-icons.component.html',
  styleUrls: ['./archive-icons.component.scss']
})
export class ArchiveIconsComponent implements OnInit {

  @Input() noteId: any;
  @Output() transColor: EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor: string = ''
  constructor(public note: NoteserviceService) { }

  ngOnInit(): void {
  }
  receiveColorCode = ($isColor: string) => {
    console.log("icon " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
  }

  delete() {
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.note.deleteNotes(data, this.token_Id).subscribe((data) => {
      console.log("Deleted Successfully", data);
    });
    this.note.archivedNotes(data, this.token_Id).subscribe((dataArchive) => {
      console.log("Unarchieve Successfully", dataArchive);
    });
  }
  unarchivePage() {
    console.log(this.noteId)
    let dataArchive = {
      noteIdList: [this.noteId],
      "isArchived": false
    }
    console.log("note and boolean ", dataArchive);
    this.note.archivedNotes(dataArchive, this.token_Id).subscribe((dataArchive) => {
      console.log("Unarchieve Successfully", dataArchive);
    }, (error) => {
      console.log("archive failed");
    });
  }
  reloadCurrentPage() {
    window.location.reload();
  }

}