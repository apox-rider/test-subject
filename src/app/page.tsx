'use client'
import { useEffect, useState } from "react"
import { supabase } from "../components/supabase-client"
import Auth from "./auth"
import { Session } from "inspector/promises";


export default function Home(){
  const [session, setIsSession]= useState<any>(null);
  const fetchSession=async()=>{
    const currentSession=await supabase.auth.getSession()
    console.log(currentSession);
    setIsSession(currentSession.data.session)
  }

  useEffect(()=>{
    fetchSession()
  }, [])

  const logOut=async()=>{
    await supabase.auth.signOut()
  }


  return(
   <>
   session?
   (
    <button onClick={logOut}>logOut</button>
    <Auth/>
   ):
   (
    <Home/>
   )
   </>
  )
};




