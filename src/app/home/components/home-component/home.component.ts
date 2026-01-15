import { ChangeDetectorRef, Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // provides @for
import { FormsModule } from '@angular/forms'; // for ngModel
import { ApplicationService } from '../../services/application.service';
import { ApplicationStatus } from '../../model/ApplicationStatus';
import { Application } from '../../model/Application';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  applications = signal<Application[]>([]);

  statuses: ApplicationStatus[] = Object.values(ApplicationStatus); // enum values for dropdown
  
  headers = [
    { name: 'Company' },
    { name: 'Job Title' },
    { name: 'Status' },
    { name: 'Link' },
  ];


  constructor(private applicationService: ApplicationService) {
  }

  async ngOnInit() {
    try {
      const apps = await this.applicationService.getApplications();
      this.applications.set(apps); // @for updates automatically
    } catch (err) {
      console.error('Failed to load applications', err);
    }
  }

  onStatusChange(appId: number, newStatus: ApplicationStatus) {
    this.applicationService.updateStatus(appId, newStatus)
      .then(() => {
        const app = this.applications().find(a => a.appID === appId);
        if (app) app.status = newStatus;
      })
      .catch(err => console.error('Failed to update status', err));
  }
}
