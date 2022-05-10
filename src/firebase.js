import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA6cDtFz9CEiFFMIgbPCNn8IUuBfVBOoPo",
    authDomain: "phonebook-9c104.firebaseapp.com",
    projectId: "phonebook-9c104",
    storageBucket: "phonebook-9c104.appspot.com",
    messagingSenderId: "271409720710",
    appId: "1:271409720710:web:036b6ff6b1a5f4168d1007"
  };

  const app = initializeApp(firebaseConfig); 
  const db = getFirestore(app);

  export { db };