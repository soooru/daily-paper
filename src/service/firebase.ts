import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

try {
  // Firebase 앱 초기화
  app = initializeApp(firebaseConfig);
  // Firestore 초기화
  db = getFirestore(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export { db };
