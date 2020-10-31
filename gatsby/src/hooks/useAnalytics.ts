import React from "react"

export const useAnalytics = () => {
  const [analyticsInstance] = React.useState(window.appInsights)
  return analyticsInstance
}
