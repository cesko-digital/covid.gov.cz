import { ApplicationInsights } from '@microsoft/applicationinsights-web';

declare global {
  interface Window {
    appInsights?: ApplicationInsights;
  }
}
