import { Component, OnInit } from '@angular/core';

import { Job } from './class.wh';

import {WorkHistoryService} from './service.wh';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

  providers: [WorkHistoryService]
})
export class AboutComponent implements OnInit {
  title = 'Project History';
  jobs: Job[];
  selectedJob: Job;
  public show: false;
  public prevClicked: number = -1;

  constructor(private whService: WorkHistoryService) { }

  getJobs(): void {
    this.whService.getJobs().then(jobs => this.jobs = jobs);
  }
  ngOnInit(): void {
    this.getJobs();
  }
  onSelect(job: Job): void {
    this.selectedJob = job;
  }
}
