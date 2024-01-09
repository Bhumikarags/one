import React from 'react'
import "./Nav.css"
import {FaHome,FaUser,FaClipboardList,FaSearchengin,FaEdit,FaPenFancy,FaWpforms} from "react-icons/fa"
import { Cont } from './Reducer';
import { Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useContext} from 'react';

import { useNavigate } from 'react-router-dom';
// import { UseSelector,useDispatch, useSelector } from 'react-redux';

export default function Nav() {
  const{ct,setCt}=useContext(Cont);
  const nn=useNavigate();
 
  return (
    <>
        {/* <div>
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to={"/about"}>About</Link>
            </div>
        </div> */}
         <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><FaHome/>Home</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <Navbar.Text className='list'>
          <Link to={"/about"}><FaWpforms/>About</Link>
          </Navbar.Text>
          <Navbar.Text className='list'>
        <Link to={"/list"}><FaClipboardList/>list</Link>
          
          </Navbar.Text>
          <Navbar.Text className='list'>
          <Link to={"/create"}><FaPenFancy/>create</Link>
          </Navbar.Text>
          <Navbar.Text className='list'>
          <Link to={"/search"}><FaSearchengin/>search</Link>
          </Navbar.Text>
          <Navbar.Text className='list'>
          <Link to={"/update"}><FaEdit/>update</Link>

          </Navbar.Text>
          <Navbar.Text className='list'>
          <Link to={"/login"}><FaUser/>Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
