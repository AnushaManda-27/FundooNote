import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';
import { UpdateComponent } from './components/update/update.component';
import {AuthenticationGuard} from './services/auth.guard'

const routes: Routes = [
  
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthenticationGuard], children: [
    
    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes', component: NotesComponent },
    { path: 'archeive', component: ArchiveComponent },
    { path: 'edit', component: UpdateComponent },
    { path: 'trash', component: TrashComponent },
    { path: 'createnote', component: CreatenoteComponent },
    { path: 'displaynote', component: DisplaynoteComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
