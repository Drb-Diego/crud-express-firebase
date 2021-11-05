
import admin from "firebase-admin";

import { firebaseConfig } from './firebaseConfig.js'


export let database = '';

export function startFirebase (){

  admin.initializeApp(firebaseConfig);

  database = admin.firestore();
  console.log('FireBase up');
}
