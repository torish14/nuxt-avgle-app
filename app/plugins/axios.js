import { cacheAdapterEnhancer } from 'axios-extensions'
import LRU from 'lru-cache'

const ONE_HOUR = 1000 * 60 * 60

export default function ({ $axios, ssrContext }) {
  if (process.client) {
    const defaultCache = process.server
      ? ssrContext.$axCache
      : new LRU({ maxAge: ONE_HOUR })
    $axios.defaults.adapter = cacheAdapterEnhancer($axios.defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
      defaultCache
    })
    $axios.onResponse(() => {
      $axios.setHeader('Access-Control-Allow-Origin', 'https://api.avgle.com/v1/search/')
    })
  }
}
