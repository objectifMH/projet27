import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent, DialogContentExampleDialog , DialogContentExampleDialogObjet } from './utilisateur/utilisateur.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjetComponent } from './objet/objet.component';
import { RouterModule, Routes} from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule,MatIconModule, MatSidenavModule } from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListUtilisateurComponent } from './list-utilisateur/list-utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';

import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'objets/:id', component: ObjetComponent},
  {path: 'utilisateurs/:id', component: UtilisateurComponent},
  {path: 'utilisateurs', component: ListUtilisateurComponent},
  {path: 'messages', component: ListMessagesComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: '**', redirectTo: '/'}
]

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HomeComponent,
    ObjetComponent,
    ListUtilisateurComponent,
    InscriptionComponent,
    UtilisateurComponent, DialogContentExampleDialog , DialogContentExampleDialogObjet, MessageComponent, ListMessagesComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'}), 
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule ,
    MatDialogModule

  ],
 exports: [RouterModule],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UtilisateurComponent ,  DialogContentExampleDialog , DialogContentExampleDialogObjet]
})
export class AppModule { }
