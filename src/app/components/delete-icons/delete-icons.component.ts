import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-delete-icons',
  templateUrl: './delete-icons.component.html',
  styleUrls: ['./delete-icons.component.scss']
})
export class DeleteIconsComponent implements OnInit {
  @Input() noteId:any;
  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor:string=''
  constructor(public note: NoteserviceService) { }

  ngOnInit(): void {
  }
  restore(){
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList:[this.noteId],
      isDeleted:false
    }
    this.note.deleteNotes(data, this.token_Id).subscribe((data)=>{
      console.log("restore Successfully", data);
    }, (error) => {
      console.log("restore unsccessfull", error);
    });
  }
  permanent_delete(){
    console.log(this.noteId);
    // alert(this.token_Id)
    let data = {
      noteIdList:[this.noteId],
      isDeleted:false
    }
    this.note.deleteForever(data, this.token_Id).subscribe((data)=>{
      console.log("parmanent Deleted Successfully", data);
    }, (error) => {
      console.log("delete unsuccessfull", error);
    });

  }
  reloadCurrentPage() {
    window.location.reload();
  }
  
}
