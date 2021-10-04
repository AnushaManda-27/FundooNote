import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-pin-display',
  templateUrl: './pin-display.component.html',
  styleUrls: ['./pin-display.component.scss']
})
export class PinDisplayComponent implements OnInit {

  @Input() allNotes: any = [];

  noteGen: any = [];
  updateData: any;
  colorData: string = '';
  tokenId = localStorage.getItem("token");

  constructor(public note: NoteserviceService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.note.note(this.tokenId).subscribe((userData: any) => {

      this.allNotes = userData['data'].data
      this.allNotes = userData['data'].data.reverse()
      this.allNotes = this.allNotes.filter((noteData: any) => {
        return noteData.isPined === true;
      });
      this.allNotes = this.allNotes.filter((noteData: any) => {
        return noteData.isDeleted === false;
      });
      this.allNotes = this.allNotes.filter((note: any) => {
        return note.isArchived == false;
      });

    })
  }
  receiveToUpdate = ($colorData: string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData)
  }
  openAddDialog(updateData: any) {
    this.updateData = updateData
    this.dialog.open(UpdateComponent, { data: { note: updateData } });
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}