import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import {  createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";



 export const AuthContext = createContext()


const Auth = ({children}) => {
     const [user,setUser] = useState(null)
     const [loading, setLoading]= useState(true)
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();
     const googleLogin = ()=>{
          setLoading(true)
          return signInWithPopup(auth,googleProvider)
     }
     const githubLogin = ()=>{
          setLoading (true)
          return signInWithPopup(auth, githubProvider)
     }
     const loginPass = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const updatePP = (name,photo)=>{
          setLoading(true)
          return updateProfile(auth.currentUser,{
               displayName:name,
               photoURL: photo
          })


     }
     const register = (email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const logOut = ()=>{
          setLoading(true)
          return signOut(auth)
     }
     
     useEffect(()=>{
          const unFollow = onAuthStateChanged(auth,currentUser =>{
               setUser(currentUser)
               setLoading(false)
          })
          return ()=>{
               unFollow
          }
     },[])
     const authInput = {
          googleLogin,
          user,
          loading,
          logOut,
          loginPass,
          register,
          updatePP,
          githubLogin
     }
     return (
         <AuthContext.Provider value={authInput}> {children} </AuthContext.Provider>
     );
};

export default Auth;