import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Cont } from './Reducer';
import { Link } from 'react-router-dom';
import Signup from "./Signup"

export default function Login() 
{
    const[name,setName]=useState();
    const[pass,setPass]=useState();
    const[data,setData]=useState();
    const{ct,setCt}=useContext(Cont);
    const chk ={name,pass};
    const nav=useNavigate();
     
    useEffect(()=>{
        if(ct){
          nav('/list')
        }
      else
      {
        fetch(`http://localhost:3000/login`).then((rws)=>rws.json().then((t)=>{setData(t)}));
      }
        
    })

    function login(fin){

       console.log(fin);
        
       const gg =data.filter((w)=>(w.name===fin.name) && (w.pwd===fin.pass));
       console.log(gg);
        if(gg.length>0)
        {
          nav("/list");
          setCt(true);
        }
        else{
          alert("invalid user");
          setCt(false);
        }
        

    }

  return (
  <>
    <div style={{display:"flex",flexDirection:"column", width:"250px" ,padding:"20px",justifyContents:"space-between", margin:"auto"}}>
    <h3 style={{textAlign:"center",padding:"20px"}}>User Login</h3>
    <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}></input><br></br>
    <input type='password' placeholder='password' onChange={(e)=>setPass(e.target.value)}></input><br></br>
    <button onClick={()=>login(chk)} style={{background:"grey",width:"50%",margin:"auto"}}>Login</button><br>
    </br>
    New User?<Link to={"/signup"}>signup</Link>
      
   
    </div> 

    
  </>
  )
}
