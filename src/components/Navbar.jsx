import React from 'react'
import { styles } from '../styles'
import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const handleLogOut = async () => {
    await auth.signOut();
  }

  return (
    <div className={styles.nav}>
      <h1 className={styles.heading}>
        {user ? `Olá, ${user.displayName}` : 'Chat App'}
      </h1>

      <button 
        className={styles.logInButton}
        onClick={user ? handleLogOut : signInWithGoogle}
      >
        <GoogleLogo size={24} />
        {user ? 'Log Out' : 'Log In'}
      </button>
    </div>
  )
}
