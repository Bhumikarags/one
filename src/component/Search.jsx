// import React, { useEffect, useState } from 'react'
// // import {FaSearchengin} from 'react-icons/fa';


// export default function Search() {
//   const[item,setItem]=useState([]);
//   const [show,setShow] = useState("none");
//   // const[data,setData]=useState([]);
 

//   function Search(val){
//     fetch(`http://localhost:3000/data?q=${val}`)
//     .then((w)=>w.json()
//     .then((g)=>{
//       setItem(g)
//       g.length>0?setShow(true):setShow(false)
//       console.log(show)

//     }));
    
        

//   }

//   return (
//    <>
//    <div className="jj">
//     <h1 style={{textAlign:"center"}}>Search Data</h1>
//    <input  type='text' placeholder='search ' onChange={(e)=>Search(e.target.value)}></input>
//       {
//         !show?<div>Data Not Available</div>:item.map((v,index)=>{
//           return(
//             <>
//             {/* <div key={index}>
//               <h1>{v.name}</h1>
//               <h1>{v.price}</h1>
//             </div> */}
//             </>
//           )
//         })
//       }      
//    </div>
   
//    </>
//   )

// }


import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';

export default function Search() {
  const[one,setOne]=useState([]);
  const[show,setShow]=useState("none");

  useEffect(()=>{
    fetch("http://localhost:3000/data").then((res)=>res.json().then((result)=>{setOne(result)}))
  },[])

  function search(val){
    console.log("called");
    // if(val==="" || val==null){
    //   console.log("done");
    //   setOne([]);
    // }
    fetch(`http://localhost:3000/data?q=${val}`).then((rws)=>rws.json())
    .then((u)=>{
      setOne(u);
      u.length>0?setShow(true):setShow(false);
     });
     
    
  }

   
  return (
    <>
      <h1 style={{textAlign:"center"}}>Search</h1>
     <div style={{margin:"auto"}}>
     <input type="text" placeholder='search' onChange={(e)=>search(e.target.value)}/>
     </div>

   <Table striped bordered hover style={{marginTop:"20px"}}>
     <thead style={{textAlign:"center"}}>
    <tr>
          <th>Id</th>
          <th>Product</th>
          <th>Price</th>
          
    </tr>
      </thead>

    
     {show?
      one.map((d,index)=>{
        return(
          <>
          
        <tr key={index}>
          <td  style={{textAlign:"center"}}>{d.id}</td>
          <td style={{textAlign:"center"}}>{d.name}</td>
          <td style={{textAlign:"center"}}>{d.price}</td>
          
        </tr>

          </>

        )
      })
    :<h4>Sorry!...Product not found</h4>}
        
     </Table>



    </>
  )
}

