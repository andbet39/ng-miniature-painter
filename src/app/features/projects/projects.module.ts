import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {ProjectService} from './services/project.service.';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import { ProjectsComponent } from './projects.component';
import {ProjectsListComponent} from './projects-list.component';
import { ProjectFormComponent } from './project-form.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: ProjectsComponent}
    ]),
    MomentModule
  ],
  providers: [
    ProjectService,
  ]
})
export class ProjectsModule { }
