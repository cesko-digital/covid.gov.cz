import {
  ApplicationInsights,
  IEventTelemetry,
} from '@microsoft/applicationinsights-web';
export default class AnalyticsAdapter {
  private static instance: AnalyticsAdapter;
  private ai: ApplicationInsights | undefined;

  private constructor() {
    this.ai = window.appInsights;
  }

  public static getInstance(): AnalyticsAdapter {
    if (!AnalyticsAdapter.instance) {
      AnalyticsAdapter.instance = new AnalyticsAdapter();
    }

    return AnalyticsAdapter.instance;
  }

  event(event: IEventTelemetry, customProperties?: Record<string, any>) {
    return this.ai?.trackEvent(event, customProperties);
  }
}
