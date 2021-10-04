import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unpin-icon',
  templateUrl: './unpin-icon.component.html',
  styleUrls: ['./unpin-icon.component.scss']
})

export class UnpinIconComponent implements OnInit {

  @Input() noteId: any;
  @Output() transColor: EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor: string = ''
  isPinDisplayComponent: boolean = false;
  constructor(public note: NoteserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  unpin() {
    console.log(this.noteId)
    let dataPin = {
      noteIdList: [this.noteId],
      "isPined": false
    }
    console.log("note and boolean ", dataPin);
    this.note.pinedNote(dataPin, this.token_Id).subscribe((dataPin) => {
      console.log("UnPined Successfully", dataPin);
    });
  }


}
