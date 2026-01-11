import { Injectable } from '@angular/core';
import { AppConfig } from '../../models/app-config';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../../models/backend-endpoints';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class ConfigService {

  private rawConfig!: AppConfig;

  private endpoints!: Endpoints;

  constructor(private http: HttpClient) { }

  async load(): Promise<void> {
    const cfg = await firstValueFrom(
      this.http.get<AppConfig>('/assets/config/app-config.json')
    );

    this.rawConfig = cfg;
    this.buildApiEndpoints(cfg);
  }

  private buildApiEndpoints(cfg: AppConfig) {
    // trailing "/"" cleanup
    const base = cfg.backend.baseUrl.replace(/\/$/, '');
    this.endpoints = {
      auth: base + cfg.backend.endpoints.auth,
      users: base + cfg.backend.endpoints.users,
      orders: base + cfg.backend.endpoints.orders
    };
  }

  /** Raw config (rarely needed) */
  get config(): AppConfig {
    if (!this.rawConfig) {
      throw new Error('AppConfig not loaded!');
    }
    return this.rawConfig;
  }

  /** Fully resolved URLs (what most code should use) */
  get configEndpointsFullURL() {
    if (!this.endpoints) {
      throw new Error('AppConfig not loaded!');
    }
    return this.endpoints;
  }
}
