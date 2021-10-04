import { Component, OnInit,Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})

export class TrashComponent implements OnInit {
  @Input() notes: any = [];
  trashNote:any=[];
  
  
  token_Id = localStorage.getItem('token');

  constructor(private noteService: NoteserviceService) { }

  ngOnInit(): void {
    this.getAllTrash();
    this.noteService.getRefreshedData().subscribe(() => this.getAllTrash());
  }
  getAllTrash(){
    console.log("Getting trash")
    this.trashNote=this.noteService.getTrashNotes( this.token_Id).subscribe((data:any)=>{
      this.notes=data['data'].data 
    }, (error) => {
      console.log("trash unsuccessfull");
    });
  }

}
