import { Component, Input } from '@angular/core';
import {Job} from '../class.wh';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})

export class JobDetailComponent {
  @Input() job: Job;

  setDevClasses(currentItem): string {
    return 'progress-circle progress-' + currentItem;
  }


}
