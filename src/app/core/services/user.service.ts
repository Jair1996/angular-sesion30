import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
  addDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  async deleteUser(user: User) {
    const userRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userRef);
  }

  async addUser(user: User) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }
}
