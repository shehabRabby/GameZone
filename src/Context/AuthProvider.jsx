import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
 
    //email signup or create user 
    const createUserWithEmailAndPasswordFunc =(email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    //email signin
    const signInWithEmailAndPasswordFunc = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

     //popup google
    const signInWithEmailPopupFunc = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    //user signout
    const signOutUserFunc = () => {
        setLoading(true);
       return signOut(auth);
    }

    //forget password
    const sendPasswordResetEmailFunc = (email) => {
        setLoading(true);
       return sendPasswordResetEmail(auth, email);
    }

    //update profile
    const updateProfileFunc = (displayName, photoURL) => {
        setLoading(true);
      return updateProfile(auth.currentUser, { displayName, photoURL });
    }

      //send email verification
    const sendEmailVerificationFunc = () => {
        setLoading(true);
      return sendEmailVerification(auth.currentUser);
    }


    const authInfo = {
        user,loading,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithEmailPopupFunc,
        signOutUserFunc,
        sendPasswordResetEmailFunc,
        updateProfileFunc,
        sendEmailVerificationFunc,
        setLoading,
    }
    

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currUser)=>{
            setUser(currUser);
            setLoading(false);
        });

        return ()=>{
            unsubscribe();
        }
    },[])

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;