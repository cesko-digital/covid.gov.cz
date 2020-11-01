import 'assets/scss/designsystem.scss';
import React from 'react';
import Layout from '../src/layouts/default-layout';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

/*

FIXME: Uncomment following code when app insights key env var is added to Vercel.

const appInsights =
  process.env.NODE_ENV !== 'development'
    ? new ApplicationInsights({
        config: {
          instrumentationKey: process.env.GATSBY_APPINSIGHTS_KEY,
        },
      })
    : null;

export const onInitialClientRender = () => {
  if (appInsights) {
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }
};

export const onRouteUpdate = () => {
  if (appInsights) appInsights.trackPageView();
};

 (window as any).appInsights = appInsights;

*/
