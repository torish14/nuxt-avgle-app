import * as firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAq1PXgPMg8TZfr7DMKKHMPr7Fe1KQLiq0',
    authDomain: 'nuxt-pornhub-api.firebaseapp.com',
    databaseURL: 'https://nuxt-pornhub-api.firebaseio.com',
    projectId: 'nuxt-pornhub-api',
    storageBucket: 'nuxt-pornhub-api.appspot.com',
    messagingSenderId: '982073604670',
    appId: '1:982073604670:web:f7943d0c6f0f64d62b2f6f',
    measurementId: 'G-WLSF08X5HZ'
  })
}

export default firebase
