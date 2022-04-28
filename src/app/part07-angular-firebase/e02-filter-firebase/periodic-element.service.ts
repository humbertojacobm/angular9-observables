import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PeriodicElement } from './PeriodicElement.Model';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementService {

  constructor(private firestore: AngularFirestore) { 
    
  }

  getElements() : Observable<PeriodicElement[]>{
    return this.firestore.collection("PeriodicElements").valueChanges() as Observable<PeriodicElement[]>;
  }
}
