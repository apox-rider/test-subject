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
    fetchSession()
  }, [])

  const logOut=async()=>{
    await supabase.auth.signOut()
  }


 return(
  <>
  {session?(
    <>
    <Auth/>
  </>):(
    <>
    <div className="border-amber-200 justify-center text-center mb-0 pb-0">
    <button className="cursor-pointer" onClick={logOut}>log out</button>
    </div>
    <Hom/>
  </>
  )}
  </>
 )}