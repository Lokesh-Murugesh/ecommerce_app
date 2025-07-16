import * as admin from 'firebase-admin';

// Check if the app is already initialized to prevent errors during hot-reloading
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // The private key must be properly formatted
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
  }
}

// Export the admin-authenticated instances
const adminAuth = admin.auth();
const adminFirestore = admin.firestore();

export { adminAuth, adminFirestore };