import { AppMaterial} from "./app.material"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { NotesComponent } from './components/notes/notes.component';
import { EditComponent } from './components/edit/edit.component';
import { DialogueElementComponent } from './components/dialogue-element/dialogue-element.component';
import { IconsComponent } from './components/icons/icons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { UpdateComponent } from './components/update/update.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ArchiveIconsComponent } from './components/archive-icons/archive-icons.component';
import { DeleteIconsComponent } from './components/delete-icons/delete-icons.component';
import { PinUpdateComponent } from './components/pin-update/pin-update.component';
import { PinDisplayComponent } from './components/pin-display/pin-display.component';
import { PinIconComponent } from './components/pin-icon/pin-icon.component';
import { UnpinIconComponent } from './components/unpin-icon/unpin-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    // HeaderComponent,
    CreatenoteComponent,
    NotesComponent,
    EditComponent,
    DialogueElementComponent,
    IconsComponent,
    ColorsComponent,
    DisplaynoteComponent,
    UpdateComponent,
    TrashComponent,
    ArchiveComponent,
    ArchiveIconsComponent,
    DeleteIconsComponent,
    PinUpdateComponent,
    PinDisplayComponent,
    PinIconComponent,
    UnpinIconComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterial
   
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
