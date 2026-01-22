'use client'
import { useEffect, useState } from "react";
import { supabase } from "../components/supabase-client";

 interface data{
  id:number,
  first_name:string,
  last_name:string,
  company:string,
  phone:number,
  website:string,
  email:string,
  created_at:string,
 }

 export default function Home(){
  const [register,setRegister]=useState({first_name:'', last_name:'',company:'',phone:'',website:'',email:'',confirmed_password:''})
  const [regData,setRegData]=useState<data[]>([]);

  const fetchData= async ()=>{
    const {error, data} = await supabase.from("Registration").select("*").order("created_at",{ascending: true})
    if (error){
      console.error("Error fetchint detail:", error.message);
      return;
    }
    setRegData(data)
  }

   useEffect(()=>{
    fetchData()
   });
   console.log(regData);


  const handleSubmit=async(e:any)=>{
      e.preventDefault()
      const {error}= await supabase.from("Registration").insert(register).single()
      if (error){
        console.error("Error registering", error.message);
         
      }
      setRegister({first_name:'', last_name:'',company:'',phone:'',website:'',email:'',confirmed_password:''})
    }
  return(
    <> 
    <div>
      <div className="text-center justify-center flex">
        <form onSubmit={handleSubmit} className="mt-60 block w-3xl rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400shadow-sm transition-colorsfocus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-nonedisabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowedinvalid:border-red-500 invalid:text-red-900 invalid:placeholder-red-400/70focus:invalid:border-red-500 focus:invalid:ring-red-500/30dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500dark:focus:border-indigo-400 dark:focus:ring-indigo-400/30dark:invalid:border-red-500 dark:invalid:text-red-300 dark:focus:invalid:ring-red-500/40">
            <h1 className="mb-3 mt-6 text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Register
            </h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    onChange={(e)=>setRegister((prev)=>({...prev, first_name:e.target.value}))}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="First Name" 
                    required />
                </div>
                <div>
                    <input 
                    type="text" 
                    id="last_name"
                    name="last_name" 
                    onChange={(e)=>setRegister((prev)=>({...prev, last_name:e.target.value}))}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Last Name" 
                    required />
                </div>
                <div>
                    <input 
                    type="text" 
                    id="company"
                    name="company" 
                    onChange={(e)=>setRegister((prev)=>({...prev, company:e.target.value}))}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Company" 
                    required />
                </div>  
                <div>
                    <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    onChange={(e)=>setRegister((prev)=>({...prev, phone:e.target.value}))}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Phone number"  
                    required />
                </div>
                <div>
                    <input 
                    type="url" 
                    id="website url"
                    name="website" 
                    onChange={(e)=>setRegister((prev)=>({...prev, website:e.target.value}))}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                    placeholder="Website" 
                    required />
                </div>
            </div>

            <div className="mb-7">
                <input 
                type="email" 
                id="email"
                name="email" 
                onChange={(e)=>setRegister((prev)=>({...prev, email:e.target.value}))}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                placeholder="Email" 
                required />
            </div> 
            <div className="mb-6">
                <input 
                type="password" 
                id="sugggested_password" 
                name="password"
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                placeholder="Password" 
                required />
            </div> 
            <div className=" mb-6 ">
                <input 
                type="password" 
                id="confirmPassword" 
                name="confirmed_password"
                onChange={(e)=>setRegister((prev)=>({...prev, confirmed_password:e.target.value}))}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
                placeholder="confirm_password" 
                required />
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input 
                id="rememberMe" 
                type="checkbox" 
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" 
                required />
                </div>
                <label className="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>
            </div>
            <button 
            type="submit" 
            id="submit"
            className="text-white border-black box-border border  hover: border--red-500 bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
              Submit
            </button>
        </form>

      <div>
        <ul style={{listStyle: "none", padding: 0}}>
          {regData.map((data, key)=>(
              <li
              key={key}
              style={{
                border:"1px solid #ccc",
                borderRadius: "4px",
                padding: "1rem",
                marginBottom: "0.5rem"
              }}>
                <div>
                  <h3>Id: {data.id}</h3>
                  <h3>First Name: {data.first_name}</h3>
                  <h3>Last Name: {data.last_name}</h3>
                  <h3>Email: {data.email}</h3>
                  <h3>Phone Number(+255){data.phone}</h3>
                  <h3>Company: {data.company}</h3>
                  <h3>Created At: {data.created_at}</h3>
                  <h3>Website: {data.website}</h3>
                  <div>
                    <button  onClick={()=>{supabase.from("Registration")}} style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}}>Edit</button>
                    <button style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}}>Delete</button>
                  </div>
                </div>
              </li>
         ))}
        </ul>
      </div>

      </div>
    </div>
    </>
  );
 };