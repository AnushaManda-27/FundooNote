
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  private refresh = new Subject<void>();
  constructor(private httpService: HttpServiceService) { }
  getRefreshedData() {
    return this.refresh;
  }
  url = environment.baseUrl

  createnote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }
  getAllNotes(token: any) {
    return this.httpService.get(`${this.url}notes/getNotesList`, token)
  }
  deleteNotes = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/trashNotes`, userData, true, token)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  note = (token: any) => {
    return this.httpService.get(`${this.url}notes/getNotesList`, true, token)
  }
  changeColor = (dataColor: any, token: any) => {
    return this.httpService.post(`${this.url}notes/changesColorNotes`, dataColor, true, token)
  }
  updateNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/updateNotes`, userData, true, token)
  }
  getTrashNotes = (token: any) => {
    return this.httpService.get(`${this.url}notes/getTrashNotesList`, true, token)
  }
  archivedNotes = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/archiveNotes`, userData, true, token)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }
  deleteForever(data: any, token: any) {
    return this.httpService.post(`${this.url}notes/deleteForeverNotes`, data, true, token);
  }
  getArchieveNotes = (token: any) => {
    return this.httpService.get(`${this.url}notes/getArchiveNotesList`, true, token)
  }
  pinedNote = (data: any, token: any) => {
    return this.httpService.post(`${this.url}notes/pinUnpinNotes`, data, true, token);
  }
}