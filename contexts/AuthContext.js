"use client"
import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react"

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext);
}

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // AUTH HANDLERS
  function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    setCurrentUser(null);
    setUserData(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try{
        setLoading(true);
        setCurrentUser(user);
        if(!user){
          console.log("No user found");
          return;
        }

        console.log("getting user data");
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let firebaseData = {}

        if(docSnap.exists()){
          console.log("User data found");
          firebaseData = docSnap.data();
          console.log(firebaseData);
        }
        setUserData(user);
      }catch(e){
        console.log(e);
      }finally{
        setLoading(false);
      }
    });
  }, [])

  const value = {
    currentUser,
    userData,
    setUserData,
    login,
    logout,
    signUp,
    loading
  }
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
