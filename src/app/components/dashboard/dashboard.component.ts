import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { DialogueElementComponent } from '../dialogue-element/dialogue-element.component';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  switchClick = 1
  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  public token: any;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router, public service: UserServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();

  }
  ngOnInit(): void {
  }

  noteDisplay() {
    return this.switchClick = 1;
  }
  editDisplay() {
    return this.switchClick = 2;
  }
  openDialog() {
    this.dialog.open(DialogueElementComponent);
  }
  trashDisplay() {
    return this.switchClick = 3;
  }
  archieveDisplay() {
    return this.switchClick = 4;
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();

    this.router.navigateByUrl('login')
  }

}
