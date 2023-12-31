import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User[] = [
    {
      name: 'Andrea',
      email: 'andreee00@gmail.com',
      ruolo: 'utente'
    },
    {
      name: 'Lisa',
      email: 'lisaflo0@gmail.com',
      ruolo: 'admin'
    },

  ]

  constructor() { }


  recuperaUser() {
    return this.user;
}

getInfo( nome: string){
  let utenteSingolo: User | undefined = this.user.find((post) => post.name == nome);
  console.log(utenteSingolo);
  return utenteSingolo;
}
}
