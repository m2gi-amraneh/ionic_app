import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  createUser(
    email: string, 
    password: string
  ): Promise<UserCredential>;
  
  signIn(
    email: string, 
    password: string
  ): Promise<UserCredential>;
  
  signOut(): Promise<void>;
  
  isConnected(): User;
}
