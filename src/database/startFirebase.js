import admin from "firebase-admin";
import { firebaseConfig } from "./firebaseConfig.js";

export let database = "";

export function startFirebase() {
  const serviceAccount = firebaseConfig;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  database = admin.firestore();
  console.log("FireBase up");
}
