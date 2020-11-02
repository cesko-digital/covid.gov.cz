class AnalyticsAdapter {
  private static instance: AnalyticsAdapter;
  private ai: AppInsight | null;

  private constructor() {
    this.ai = window.ai;
  }

  public static getInstance(): AnalyticsAdapter {
    if (!AnalyticsAdapter.instance) {
      AnalyticsAdapter.instance = new AnalyticsAdapter();
    }

    return AnalyticsAdapter.instance;
  }

  event(opts: AppInsightOptions) {
    this.ai?.trackEvent(opts);
  }
}

// useAnalytics.ts

function useAnalytics() {
  const ai = useState(AnalyticsAdapter.getInstance());
  return ai;
}
