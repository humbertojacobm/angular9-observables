import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-e01-firebase',
  templateUrl: './e01-firebase.component.html',
  styleUrls: ['./e01-firebase.component.css']
})
export class E01FirebaseComponent implements OnInit {

  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection("test").valueChanges();
   }

  ngOnInit(): void {
  }

}
