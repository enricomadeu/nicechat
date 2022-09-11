import React from 'react';
import { Chat, Navbar } from './components';

import { styles } from './styles';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat component */}
        {user ? 
        <Chat /> :
        <div 
          className={styles.signInMessage}>
            Faça login para entrar na sala de bate-papo!
        </div>}
      </section>
    </div>
  );
}
