import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react'
import { styles } from '../styles'
import { Message } from './Message';
import { auth, db } from '../firebase';
import { SendMessage } from './SendMessage';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'staging-messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className={styles.main}>
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} />)}        
      </main>
      {/* Send message component */}
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  )
}
