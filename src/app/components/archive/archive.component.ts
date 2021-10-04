import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archieveNote:any=[];
  notes:any=[];

  token_Id = localStorage.getItem('token');

  constructor(private noteService: NoteserviceService ) { }

  ngOnInit(): void {
    this.getArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getArchieve());
    
  }

  getArchieve(){
    console.log("getting archive")
    this.archieveNote=this.noteService.getArchieveNotes(this.token_Id).subscribe((data:any)=>{
      this.notes=data['data'].data
      console.log("Archive successfull", data); 
    }, (error) => {
      console.log("Archive unsuccessfull", error);
    })
  }
}
