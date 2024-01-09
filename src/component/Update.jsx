import React, { useState } from 'react'
import "./create.css"
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
   const[name,setName]=useState();
   const[price,setPrice]=useState();
   const nv = useNavigate();
   const {id}=useParams();
   console.log(id);
   

   const upd=()=>{
    let det={name,price}
    fetch(`http://localhost:3000/data/${id}`,{
      method:"PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(det)
    }).then((d)=>d.json().then((v)=>{nv("/list")}))
   }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Update</h1>
     <div className="cn">
      <input placeholder='product' type='text' onChange={(e)=>setName(e.target.value)}></input>
      <input placeholder='price' type='text' onChange={(e)=>setPrice(e.target.value)}></input>
      <button onClick={upd}>Confirm Update</button>
     </div>

    </>
  )
}
