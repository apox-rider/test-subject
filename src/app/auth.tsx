'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { supabase } from "../components/supabase-client";
import { Send } from "lucide-react";

 

 export default function Auth(){
  const [isSignUp,setIsSignUp]=useState(true)
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")


  const handleSubmit=async(e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
       if (isSignUp){
        const {error: signupError}=await supabase.auth.signUp({email, password})
        if (signupError){
            console.error("Error Signing Up: ", signupError.message);
            return;
        }
       }else{
        const {error: signinError}=await supabase.auth.signInWithPassword({email, password})
        if(signinError){
            console.error("Error Signing In: ", signinError.message);
        }
       }
    }
  return(
    <> 
    <div className="text-center justify-center ml-180">
      <div className="text-center justify-center ">
        <form onSubmit={handleSubmit} className="mt-60 block w-3xl rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400shadow-sm transition-colorsfocus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-nonedisabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowedinvalid:border-red-500 invalid:text-red-900 invalid:placeholder-red-400/70focus:invalid:border-red-500 focus:invalid:ring-red-500/30dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500dark:focus:border-indigo-400 dark:focus:ring-indigo-400/30dark:invalid:border-red-500 dark:invalid:text-red-300 dark:focus:invalid:ring-red-500/40">
            <h1 id="head" className="mb-3 mt-6 text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
               {isSignUp?"Sign_Up": "Sign_In"}
            </h1>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=>
                        setEmail(e.target.value)}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Email" 
                    required />
                </div>
                <div>
                    <input 
                    type="password" 
                    id="password"
                    name="password" 
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>)=>
                        setPassword(e.target.value)}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Password" 
                    required />
                </div>
            </div>
            {/* Submit Button */}
          <button 
            type="submit" 
            className="...">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <br />

     
          <button  
           type="button" 
            onClick={() => setIsSignUp(!isSignUp)} 
           className="...">
            {isSignUp ? "Already have an account?" : "Need an account? "}
              </button>  <br />       
            <button  
              type="button"  
              id="change"
              onClick={() => setIsSignUp(!isSignUp)}  
              className="..."
            >
            {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
                        
        </form>
      </div>
    </div>
    </>
  );
 };