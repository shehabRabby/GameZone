import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
 
    //email signup or create user 
    const createUserWithEmailAndPasswordFunc =(email, password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    //email signin
    const signInWithEmailAndPasswordFunc = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

     //popup google
    const signInWithEmailPopupFunc = () => {
       return signInWithPopup(auth, googleProvider);
    }

    //user signout
    const signOutUserFunc = () => {
       return signOut(auth);
    }

    //forget password
    const sendPasswordResetEmailFunc = (email) => {
       return sendPasswordResetEmail(auth, email);
    }

    //update profile
    const updateProfileFunc = (displayName, photoURL) => {
      return updateProfile(auth.currentUser, { displayName, photoURL });
    }

      //send email verification
    const sendEmailVerificationFunc = () => {
      return sendEmailVerification(auth.currentUser);
    }


    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithEmailPopupFunc,
        signOutUserFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc,
        sendEmailVerificationFunc
    }


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;