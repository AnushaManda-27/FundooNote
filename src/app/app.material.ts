import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/Input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
        
    ],
    exports:[
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule, 
        ReactiveFormsModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        MatDialogModule,
        MatCardModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ]
    
})

export class AppMaterial { }