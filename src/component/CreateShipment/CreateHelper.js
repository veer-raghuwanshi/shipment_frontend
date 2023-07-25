import React,{useState,useEffect} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import '../../css/dispatchlist.css'


import {
  Nav,
  NavItem,
  Form,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";

import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

async function ContactData(getContact){

  await axios.get('http://localhost:5000/dispatcher/dispatcher',
  // { inst_hash: localStorage.getItem('inst_hash_manual') },
  {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  }
  )
  .then((res)=>{
      console.log(res.data);
      getContact(res.data);
  })
}
//************************************************************** */
async function addBatch(name,email,address,setModalIsOpen,getBatchList){
  if (name != "" && email != "" && address!= "" ) {
    await axios.post('http://localhost:5000/helper/addhelper',
    {
        inst_hash: localStorage.getItem('name'),
        name: name,
       email: email,
       address:address,
    },
    {headers: { authorization:`Bearer ${localStorage.getItem('token')}` }}    
    )
    ContactData(getBatchList);
    setModalIsOpen(false);

} else {
document.getElementById("validate-batch").innerHTML=
  "*Please fill required field!";
console.log("Error :", "Please fill required field");
}

}
//************************************************************** */
async function updateBatch(id,vehicalplate,helper1, helper2,assigndriver,setModalIsOpenEdit,getBatchList){
  if (vehicalplate != "" && helper1 != "" && helper2 != "" && assigndriver != "") {
      await axios.post('http://localhost:5000/createShipment/updatecreatshipment',
      {inst_hash: localStorage.getItem('inst_hash'),
      id : 3,
      vehicalplate:  vehicalplate,
      helper1: helper1,
      helper2: helper2,
      assigndriver: assigndriver,
      },
      {headers: { authorization:`Bearer ${localStorage.getItem('token')}` }}
  )
  ContactData(getBatchList)
  setModalIsOpenEdit(false)
} else {
  document.getElementById("edit-validate-batch").innerHTML =
    "*Please fill required field!";
  console.log("Error :", "Please fill required field");
}    
}

//************************************************************** */
async function deleteContact(ids,getContact,DefaultgetContact ){
  const results = await axios.post('http://localhost:5000/dispatcher/deldispatcher',
      {
          id:ids
      },
      {headers: { authorization:`Bearer ${localStorage.getItem('token')}` }}
  )
  console.log(results);
      if(results.status == 200){
          ContactData(getContact,DefaultgetContact);
      }
  }


function CreateHelper() {
    const [rowCount, setRowCount] = useState(0);
    const [inquiries, setInquiries] = useState( );
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [contact, getContact] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [assigndriver, setAssigndriver] = useState("");
    const [batchList,getBatchList] = useState([]);


    const [modalIsOpenDelete, setModalIsOpenDelete] = useState(false);
    const [modalIsOpenEdit,setModalIsOpenEdit] = useState(false);
    const [defaultcontact, DefaultgetContact] = useState([]);
    const [ids, setIds] = useState('');


    useEffect(() => {
      ContactData(getContact,DefaultgetContact)   
   }, [])
    console.warn(contact)

    function handleInput(e){
        setName(e.target.value)
  }

  return (
    <section class="homedive ">

            
<Modal isOpen={modalIsOpen} className='main_modal_body'>
                <ModalBody className='modal_body'>
                <AiOutlineClose className='main_AiOutlineClose' onClick={()=>setModalIsOpen(false)}/>
                   <h5 className='main_h5'>Create Helper</h5>
                </ModalBody>
                <Form className='form_main'>
                    <FormGroup>
                        <Input type="text" name="name" id="name" placeholder="helper Name" onBlur={(e) => handleInput(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="email" onBlur={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="address" id="address" placeholder="address" onBlur={(e) => setAddress(e.target.value)}/>
                    </FormGroup>
                    <p id="validate-batch" style={{ color: 'red' }}></p>
                    <Button variant="contained" className='main_botton' style={{backgroundColor: '#198754'}} onClick={() => addBatch(name,email,address,setModalIsOpen,getBatchList)}>Create Helper</Button>

                </Form>
            </Modal>
            <div className="d-flex create-dispatcher-01 align-items-center">
        <div className="plus-icon">
          <button type="submit" onClick={() => setModalIsOpen(true)}>
            <img src="/Assets/dash/plus.png" />
            Create Helper
          </button>
        </div>
      </div>
   </section>
  )
}

export default CreateHelper;


