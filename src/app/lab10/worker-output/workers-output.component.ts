import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-output',
  templateUrl: './worker-output.component.html',
  styleUrls: ['./worker-output.component.css']
})
export class WorkersOutputComponent implements OnInit {

  public workers: DomainWorker[] = [];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.refreshWorkers(), 1000);
  }

  refreshWorkers(): void {

    for (let i = 0; i < window.localStorage.length; i++) {

      const key: string | null = window.localStorage.key(i);

      if (key) {
        const workerJson: string | null = window.localStorage.getItem(key);

        if (workerJson && !this.workersHasKey(key)) {

          const worker: DomainWorker = JSON.parse(workerJson) as DomainWorker;

          this.workers.push(worker);
        }
      }
    }

    this.workers = this.workers.filter((worker) => window.localStorage.getItem(worker.id));
  }

  private workersHasKey(key: string) {
    return this.workers.some((worker) => worker.id === key);
  }

}

interface DomainWorker {
  id: string,
  name: string,
  paymentPerHour: number,
  startDate: string,
  endDate: string,
}
