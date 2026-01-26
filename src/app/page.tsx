'use client'
import { useEffect, useState } from "react"
import { supabase } from "../components/supabase-client"
import Auth from "./auth"
import Hom from "./sample"


export default function Home(){
  const [session, setIsSession]= useState<any>(null);
  const fetchSession=async()=>{
    const currentSession=await supabase.auth.getSession()
    console.log(currentSession);
    setIsSession(currentSession.data.session)
  }

  useEffect(()=>{
    fetchSession();
    
    const{data: authListener}=supabase.auth.onAuthStateChange((_event, session)=>{
    setIsSession(session);
  }
  )
  return ()=>{
    authListener.subscription.unsubscribe()
  }
  }, [])

  const logOut=async()=>{
    await supabase.auth.signOut()
  }

  

 return(
  <>
  {
  session?(
     <>
        <div className="border-amber-200 justify-center text-center mb-0 pb-0">
            <button className="cursor-pointer text-white border-white mt-7 box-border border  hover: border--red-500 bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={logOut}>log out</button>
        </div>
        <Hom/>
  </>
  ):(  
  <>
    <Auth/>
  </>
  )
  }
  </>
 )}