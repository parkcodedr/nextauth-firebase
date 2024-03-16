import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase-admin/firestore";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
};

const app = getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApp();
const firestore = getFirestore(app);

export { firestore };
