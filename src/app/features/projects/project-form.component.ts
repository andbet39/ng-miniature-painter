import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Project} from '../../models/project.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-project-form',
  template: `
    <form #f="ngForm" nz-form  (submit)="saveHandler(f.value)">
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Project title</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="Input is required">
          <input nz-input [ngModel]="active?.title" name="title" required />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Scheduled For</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" nzErrorTip="Input is required">
          <nz-date-picker [ngModel]="active?.scheduledFor" name="scheduledFor"></nz-date-picker>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="5">Progress Note</nz-form-label>
        <nz-form-control nzHasFeedback [nzSpan]="12" >
          <input nz-input [ngModel]="active?.progressNote" name="progressNote" />
        </nz-form-control>
      </nz-form-item>
      <hr>
      <button [disabled]="f.invalid" type="submit" class="btn btn-primary">
        {{active?.id ? 'EDIT' : 'ADD'}}
      </button>
    </form>
    <br><br>
  `,
  styles: []
})
export class ProjectFormComponent implements OnInit {

  @Input() active: Project;
  @ViewChild('f') form: NgForm;
  @Output() save: EventEmitter<NgForm> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveHandler(project) {
    console.log(project);
    this.save.emit(project);
  }
}
