import React,{useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import "../css/navbar.css"
import ChangePass from './ChangePass';

import {
    Nav,
    NavItem,
    Form,
    Button,
    Modal,
    ModalBody,
  } from "reactstrap";
  import { Link } from "react-router-dom";


function Navbar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
          <Modal isOpen={modalIsOpen} className="modal_body">
          <ModalBody className="">
            <AiOutlineClose
              className="main_AiOutlineClose"
              onClick={() => setModalIsOpen(false)}
              color="rgba(27, 38, 68, 1)"
            />
          </ModalBody>
          <Form className="">
            <h3 style={{ color: "rgba(27, 38, 68, 1)", textAlign: "center" }}>
              Do you really want to logout?
            </h3>
            <div
              className="d-flex justify-content-center"
              style={{ marginBottom: "50px" }}
            >
              <Button
                onClick={() => {
                  setModalIsOpen(false);
                  localStorage.removeItem('jwt');   // to delete jwt tokeeen from local storage
                  window.location.href = "/";
                }}
              >
                Yes
              </Button>
              &nbsp;
              <Button onClick={() => setModalIsOpen(false)}>
                No
              </Button>
            </div>
          </Form>
        </Modal>
     <hrader>
	    <nav class="navbar navbar-expand-lg px-4 bg-color align-items-center">
			<div class="container-fluid p-0">
			  	<div class="d-flex justify-content-between w-100 align-items-center	">
				  	<div class="header-logo">
					    <a class="navbar-brand" href="/"><img src="/Assets/Navbar/Logo.png"/></a>
					    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
					      <span class="navbar-toggler-icon"></span>
					    </button>
					</div>
				    <div class="" id="navbarScroll">
				    	<div class="d-flex menu-container">
					    	<div class="avtar">
				    			<img src="/Assets/Navbar/avtar.png"/>
					    		<a class="nav-link" href="#">Admin</a>
					    	</div>
				    		<div class="notification">
				    			<img src="/Assets/Navbar/bell.png"/>
				    			<ChangePass/>
				    			
                                <Nav>
          <div className='container d-flex justify-content-between'>
           <Link to="/">
           <NavItem>
           <img src="/Assets/Navbar/log-out.png" onClick={() => setModalIsOpen(true)}/>
            </NavItem>
           </Link>
          
         </div>
      </Nav>
				    		</div>
				      </div>
				    </div>
			  	</div>
			</div>
		</nav>
	</hrader>
    </div>
  )
}

export default Navbar