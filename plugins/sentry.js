import Vue from 'vue'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn:
    'https://038b94281b2e4673b615cd764c1bce68@o469362.ingest.sentry.io/5498734',
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true
    }),
    new Integrations.BrowserTracing()
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})
