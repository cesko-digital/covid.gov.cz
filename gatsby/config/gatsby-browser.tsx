import 'assets/scss/custom-variables.scss';
import React from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights =
  process.env.NODE_ENV !== 'development' && process.env.GATSBY_APPINSIGHTS_KEY
    ? new ApplicationInsights({
        config: {
          instrumentationKey: process.env.GATSBY_APPINSIGHTS_KEY,
        },
      })
    : console.warn('Analytics is not applied');

export const onInitialClientRender = () => {
  if (appInsights) {
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }
};

export const onRouteUpdate = () => {
  if (appInsights) appInsights.trackPageView();
};

// FIXME: apply global.d.ts
(window as any).appInsights = appInsights;
