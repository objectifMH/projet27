import { Utilisateur } from './utilisateur';

export class Message {
    id: number
    content: string
    utilisateurId: number
    utilisateur: Utilisateur
}
