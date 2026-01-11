import { Endpoints } from "./backend-endpoints";

// src/app/config/app-config.model.ts
export interface AppConfig {
    backend: {
        baseUrl: string;
        endpoints: Endpoints
    };
}