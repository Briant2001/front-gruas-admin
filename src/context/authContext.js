import { createContext,useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
import {auth}from "../firebase"
export const authContext = createContext();

export const useAuth = ()=>{
    const contex =  useContext(authContext);
    if (!contex) throw new Error("There is no auth provider")
        return contex;
}



export function AuthProvider({children}) {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);

    const signup = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const loginWithGoogle = ()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
    }
    const login = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logout = ()=>{
         signOut(auth)
    }
    const resetPass = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{unsubscribe()}
    },[])

    return (
        <authContext.Provider value={{signup,login,user,logout,loading,loginWithGoogle,resetPass}}>
            {children} 
        </authContext.Provider>
    )
}