import React, { useState } from 'react'
import { styles } from '../styles'
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");
  
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") return;
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'staging-messages'), {
      text: input,
      name: displayName,
      uid,
      createdAt: serverTimestamp(),
    })
    .then(() => {
      setInput("");
      console.log("Message sent!");
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    });
  }

  return (
    <form onSubmit={(e) => sendMessage(e)} className={styles.form}>
      <input className={styles.input} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message" />
      <button className={styles.button} type="submit">Enviar</button>
    </form>
  )
}
