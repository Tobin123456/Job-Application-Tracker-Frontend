import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config/config.service';
import { RestService } from '../../shared/services/rest/rest.service';
import { Application } from '../model/Application';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {

  constructor(private configService: ConfigService, private restService: RestService) { }

  // GET all applications
  getApplications(): Promise<Application[]> {
    return firstValueFrom(this.restService.get<Application[]>(this.configService.configEndpointsFullURL.applications));
  }

  // Create a application
  createApplication(application: Application): Promise<void> {
    return firstValueFrom(this.restService.post<void>(this.configService.configEndpointsFullURL.applications, application));
  }

  // Update a application
  updateStatus(applicationId: number, status: string): Promise<void> {
    return firstValueFrom(this.restService.patch<void>(`${this.configService.configEndpointsFullURL.applications}/${applicationId}/status`, { status }));
  }
}