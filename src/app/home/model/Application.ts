import { ApplicationStatus } from "./ApplicationStatus";

export interface Application {
  appID: number;
  jobTitle: string;
  companyName: string;
  status: ApplicationStatus;
  jobUrl: string;
}