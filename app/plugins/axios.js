import { cacheAdapterEnhancer } from 'axios-extensions'

export default function ({ $axios }) {
  if (process.client) {
    $axios.defaults.adapter = cacheAdapterEnhancer($axios.defaults.adapter)
  }
  $axios.defaults.timeout = 5000
}
