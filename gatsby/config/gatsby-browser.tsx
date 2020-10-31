import 'assets/ds/scss/front.scss';
import React from 'react';
import Layout from '../src/layouts/default-layout';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};


// FIXME: Uncomment when the GATSBY_APPINSIGHTS_KEY is added to Vercel
// const appInsights = new ApplicationInsights({
//   config: {
//     instrumentationKey: process.env.GATSBY_APPINSIGHTS_KEY,
//   },
// });

// export const onInitialClientRender = () => {
//   appInsights.loadAppInsights();
//   appInsights.trackPageView();
// };

// export const onRouteUpdate = () => {
//   appInsights.trackPageView();
// };

// (window as any).appInsights = appInsights;
