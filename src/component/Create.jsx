import React, { useEffect, useState } from 'react'
import "./create.css"
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const navigate = useNavigate();
 
  // useEffect(()=>{
  //   fetch("http://localhost:3000/data").then((c)=>c.json().then((resp)=>{}))
  // },[])
  
  const handle=()=>{
    const data={name,price};

    fetch("http://localhost:3000/data",{
      method:"Post",
      headers:{
        'Accept':'application/json',
        'content-type':'application/json',
      },
      body:JSON.stringify(data)

    }).then((c)=>c.json().then((resp)=>{navigate("/list")}))
    
  }

  return (
 <>
   <h1 style={{textAlign:"center"}}>Create Product </h1>

   <p>{name}</p>
   <p>{price}</p>

     <div className="cn">
      <input placeholder='product' type='text' onChange={(e)=>setName(e.target.value)}></input>
      <input placeholder='price' type='text' onChange={(e)=>setPrice(e.target.value)}></input>
      <button onClick={handle}>Add Product</button>
     </div>



 </>
  )
}
