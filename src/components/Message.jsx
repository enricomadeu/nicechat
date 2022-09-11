import React from 'react'
import { styles } from '../styles'
import { Trash } from 'phosphor-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export const Message = (props) => {
  const [user] = useAuthState(auth);
  const { text, id, name, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? `${styles.sent}` : `${styles.received}`;

  const handleDeleteMessage = async () => {
    await deleteDoc(doc(db, 'messages', id));
  }

  return (
    <div>
      <div className={`${styles.message} ${messageClass}`}>
        <p className={styles.name}>{name ? name : "Dave"}</p>
        <p className={styles.textMessage}>
          {text}
          {user.uid === uid &&
          <Trash
            className="cursor-pointer"
            onClick={handleDeleteMessage}
          />}
        </p>
      </div>
    </div>
  )
}
