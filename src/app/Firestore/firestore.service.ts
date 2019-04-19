import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Registro } from '../../models/registros.interface.ts';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

    createRegister(
      notifierName: string,
      occurrenceDate: string,
      schedule: string,
      notifierProfession: string
    ): Promise<void> { 
      const id = this.firestore.createId();

      return this.firestore.doc(`registerList/${id}`).set({
        id,
        notifierName,
        occurrenceDate,
        schedule,
        notifierProfession,
      });
    }
   }

