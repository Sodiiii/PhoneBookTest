import React from 'react';
import './App.css';
import AddPhone from './components/AddPhone';
import PhoneBase from './components/PhoneBase';
import Title from './components/Title';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from "./firebase"

function App() {
  const [phones, setPhones] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "phones"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let phonesArray = [];
      querySnapshot.forEach((doc) => {
        phonesArray.push({ ...doc.data(), id: doc.id });
      });
      setPhones(phonesArray);
    });
    return () => unsub();
  }, []);



  return (
    <div className='App'>
        <div>
          <Title />
        </div>
        <div>
        <AddPhone />
        </div>
        <div className='phone_container'>
          {phones.map((phone) => (
            <PhoneBase key={phone.id} phone={phone}/>
          ))}
        </div>
    </div>
  );
}

export default App;
