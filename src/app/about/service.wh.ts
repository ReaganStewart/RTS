import { Injectable } from '@angular/core';

import { Job } from './class.wh';
import { JOBS } from './data.wh';

@Injectable()
export class WorkHistoryService {
  getJobs(): Promise<Job[]> {
    return Promise.resolve(JOBS);
  }
  // See the "Take it slow" appendix
  getJobsSlowly(): Promise<Job[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getJobs()), 2000);
    });
  }
}
