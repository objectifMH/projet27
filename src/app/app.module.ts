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



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'objets/:id', component: ObjetComponent},
  {path: 'utilisateurs/:id', component: UtilisateurComponent},
  {path: 'utilisateurs', component: ListUtilisateurComponent},
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
    UtilisateurComponent, DialogContentExampleDialog , DialogContentExampleDialogObjet  
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
    RouterModule.forRoot(routes), 
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule ,
    MatDialogModule

  ],
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