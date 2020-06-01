const firebaseConfig = {
  apiKey: 'AIzaSyD6lhOl_AzVcrqQ6zx-aqPOhsZ2sp4dLck',
  authDomain: 'drone-delivery-d84b0.firebaseapp.com',
  databaseURL: 'https://drone-delivery-d84b0.firebaseio.com',
  projectId: 'drone-delivery-d84b0',
  storageBucket: 'drone-delivery-d84b0.appspot.com',
  messagingSenderId: '659053851547',
  appId: '1:659053851547:web:e85db85af83cb0661d673e',
  measurementId: 'G-8MM24LR9RK',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
