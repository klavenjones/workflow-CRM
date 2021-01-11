import * as admin from 'firebase-admin'

export const verifyIdToken = (token) => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY
  if (!admin.apps.length) {
    console.log('FIRED ADMIN')
    console.log('LENGTH', admin.apps.length)
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    })
  }
  console.log('FIRED ADMIN TOKEN', token)
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}
