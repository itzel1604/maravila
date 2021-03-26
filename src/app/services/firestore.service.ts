import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db: AngularFirestore
  ) { }

  //Categoria 

  //create
  createDoc(data: any, path: string, id: string){
    const collection = this.db.collection(path);
    return collection.doc(id).set(data);
  }

  //Read
  getDoc<tipo>(path: string, id: string){
    const collection = this.db.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  //Read completo
  getCollection<tipo>(path: string){
    const collection = this.db.collection<tipo>(path);
    return collection.valueChanges();
  }

  //Update
  updateDoc(data: any, path: string, id: string){
    const collection = this.db.collection(path);
    return collection.doc(id).update(data);
  }

  //Crud productos

}
