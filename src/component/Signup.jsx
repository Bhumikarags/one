import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const[name,setName]=useState();
  const[pwd,setPwd]=useState();
  const nn=useNavigate();
  const det={name,pwd}

  function sign(val){
    fetch(`http://localhost:3000/login`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        'content-type':"application/json", 
      },
      body:JSON.stringify(val)
    }).then((y)=>y.json().then((q)=>{nn("/login")}))    
  }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Signup</h1>
    <div className="inn" style={{width:"200px",flexDirection:"column",margin:"auto"}}>
    <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='name'></input>
    <br></br>
    <br></br>
    <input type='password' onChange={(e)=>setPwd(e.target.value)} placeholder='password'></input>
  
    <button onClick={()=>sign(det)} >Signup</button>

    </div>

    </>
  )
}
