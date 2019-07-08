import { AngularFirestore } from '@angular/fire/firestore';
import {Project} from '../../../models/project.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectService {
  list: Project[] = [];

  constructor(private firestore: AngularFirestore) {
    this.init();
  }

  getProjects() {
    return this.list;
  }

  init() {
    this.firestore.collection('projects').snapshotChanges().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Project;
      });
    });
  }

  delete(id: string) {
    console.log('delete: ', id);
    this.firestore.doc('projects/' + id).delete();
  }

  save(project: Project) {
     if (project.id == null) {
       this.firestore.collection('projects').add(project);
     } else {
       this.firestore.doc('projects/' + project.id).update(project);
     }
  }

}
