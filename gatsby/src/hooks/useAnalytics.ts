import AnalyticsAdapter from '@/adapters/analytics-adapter';
import React from 'react';

export const useAnalytics = () => {
  const [analyticsInstance] = React.useState(AnalyticsAdapter.getInstance());
  return analyticsInstance;
};
