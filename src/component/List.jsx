import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { FaTrashAlt} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import {useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { Cont } from './Reducer';


export default function List() {
    const[show,setShow]=useState([]);
    const{ct,setCt}=useContext(Cont);
    const nav = useNavigate();

    useEffect(()=>{
      if(!ct){
        nav('/login')
    }
     else{
      hand();
     }
      
    },[]);
    
    const hand=()=>{
      fetch("http://localhost:3000/data").then((res)=>res.json().then((result)=>{setShow(result)}))
    }
    // const del=(id)=>{
    //         // navigate("/list");
    //           fetch(`http://localhost:3000/data/${id}`,{
    //              method:"DELETE"
    //            })
             
    //           //  .then((s)=>s.json().then((k)=>{setShow(data.filter(item => item.id !== id));}))
              
    //         }

            function del(id){
              console.log(id);
              fetch(`http://localhost:3000/data/${id}`,{
                method:"DELETE" 
              }).then((Ash)=>{
                Ash.json().then((z)=>{
                hand();
                })
              })
            }
    

   

  return (
<>
  <h1 style={{textAlign:"center"}}>List</h1> 
  <Table striped bordered hover>
      <thead style={{textAlign:"center"}}>
    <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Delete</th>
          <th>Update</th>
          
          
    </tr>
      </thead>
    
      {
    show.map((x,i)=>{
         return(
            <>
            <tbody style={{textAlign:"center"}}>
        <tr>

          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.price}</td>
          <td onClick={()=>del(x.id)}>  <FaTrashAlt/></td>
          <td><button><Link to={`/update/${x.id}`} style={{textDecoration:"none"}}>update</Link></button></td>
           
        </tr>
      
        </tbody>
       
            
            </>
         )
    })
  } 
        
        
        
     
    </Table> 
     <button onClick={()=>setCt(false)}>Logout</button> 

</>
  )
}
