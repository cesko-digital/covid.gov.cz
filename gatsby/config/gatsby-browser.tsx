import 'assets/scss/custom-variables.scss';
import React from 'react';
import Layout from 'src/layouts/default-layout';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

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
