import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from './services/project.service.';
import {Project} from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  template: `
      <nz-table #basicTable [nzData]="projects">
        <thead>
        <tr>
          <th>Title</th>
          <th>Scheduled</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let data of projects">
          <td>{{ data.title }}</td>
          <td>{{ data.scheduledFor.seconds | amFromUnix | amDateFormat: 'YYYY-MM-DD HH:mm' }}</td>
          <td>{{ data.progressNote }}</td>
          <td>
              <a (click)="this.delete.emit(data.id)">Delete</a>
          </td>
        </tr>
        </tbody>
      </nz-table>
  `,
  styles: []
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Project[];
  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit()   {
  }

}
