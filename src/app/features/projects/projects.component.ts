import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project.model';
import {ProjectService} from './services/project.service.';

@Component({
  selector: 'app-projects',
  template: `
    <app-project-form (save)="this.projectService.save($event)"></app-project-form>
   <app-project-list (delete)="projectService.delete($event)" [projects]="projectService.getProjects()"></app-project-list>
  `,
  styles: []
})
export class ProjectsComponent {

   constructor(private projectService: ProjectService) { }
}
