import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PinDisplayComponent } from '../pin-display/pin-display.component';
@Component({
  selector: 'app-pin-icon',
  templateUrl: './pin-icon.component.html',
  styleUrls: ['./pin-icon.component.scss']
})
export class PinIconComponent implements OnInit {
  @Input() noteId: any;
  @Output() transColor: EventEmitter<string> = new EventEmitter<string>();
  token_Id = localStorage.getItem('token');
  isColor: string = ''
  isPinDisplayComponent: boolean = false;
  constructor(public note: NoteserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp === PinDisplayComponent) {
      this.isPinDisplayComponent = true;
      console.log(this.isPinDisplayComponent);
    }

  }
  receiveColorCode = ($isColor: string) => {
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
    }, (error) => {
      console.log("error in pin");
    });
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
    }, (error) => {
      console.log("error in unpin");
    });
  }

}