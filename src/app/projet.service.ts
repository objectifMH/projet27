import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Objet } from './objet'
import { Utilisateur } from './utilisateur';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http:HttpClient) { }

  public getObjets(): Observable<Objet[]> {
    return this.http.get<Objet[]>(environment.backUrl + '/objets')
  }

  public getObjet(id: number): Observable<Objet> {
    return this.http.get<Objet>(environment.backUrl + '/objets/' + id)
  }

  public getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(environment.backUrl + '/utilisateurs')
  }

  public getUtilisateur(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(environment.backUrl + '/utilisateurs/' + id)
  }

  public getObjetsByUtilisateur(id: number): Observable<Objet[]> {
    return this.http.get<Objet[]>(environment.backUrl + '/utilisateurs/' + id + "/objets")
  }

  public getUtilisateurForObjet(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(environment.backUrl + '/objets/' + id + "/?_expand=utilisateur")
  }

  
  public AddUtilisateur(utilisateur: Utilisateur) {
    return this.http.post(environment.backUrl + '/utilisateurs', utilisateur)
  }

  public delUtilisateur(id: number) {
    return this.http.delete(environment.backUrl + '/utilisateurs/' + id)
  }

  public AddObjet(objet: Objet)  {
    return this.http.post(environment.backUrl + '/objets', objet)
  }

  public delObjetForUtilisateur(objet: Objet) {
    return this.http.delete(environment.backUrl + '/objets/' + objet.id);
  }

  public updateObjet(objet: Objet) {
    return this.http.put(environment.backUrl + '/objets/' + objet.id, objet);
  }

  public getMessage(id: number): Observable<Message> {
    return this.http.get<Message>(environment.backUrl + '/messages/' + id + "/?_expand=utilisateur")
  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(environment.backUrl + '/messages' +  "?_expand=utilisateur")
  }

  public AddMessage(message: Message)  {
    return this.http.post(environment.backUrl + '/messages', message)
  }

  public delMessage(id: number) {
    return this.http.delete(environment.backUrl + '/messages/' + id)
  }

}
