import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../css/shippment.css";
import axios from "axios";
import { Nav, NavItem, Form, Button, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

function DeliveryCreation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [custoname, setCustoname] = useState("");
  const [custocontactnum, setCustocontactnum] = useState("");
  const [custoemail , setCustoemail] = useState("");
  const [custoaltnum, setCustoaltnum] = useState("");
  const [pickuplocation, setPickuplocation] = useState("");
  const [droplocation , setDroplocation] = useState("");
  const [description , setDescription] = useState("");

 
  const [error, setError] = useState(false);
  const [modalPrivacy, setModalPrivacy] = useState(false);
  const [succbtn, setSuccbtn] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      custoname,
      custocontactnum,
      custoemail,
      custoaltnum,
      pickuplocation,
      droplocation,
      description,
      //   date:fullDate,
    };

    if (
      custoname.length == 0 ||
      custoemail.length == 0 ||
      custocontactnum.length == 10 ||
      custoaltnum.length == 10 ||
      pickuplocation.length == 0 ||
      droplocation.length == 0 ||
      description.length == 0 
    ) {
      setError(true);
      setSuccbtn(
        <span className="" style={{ color: "green" }}>
          Submit Succesfully
        </span>
      );
    }
    if (custoname&&custoemail&&custocontactnum&&custoaltnum&&pickuplocation&&droplocation&&description) {
      fetch(
           "http://localhost:5000/createShipment/addcreatshipment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res, dataToSubmit);
        });
    } else {
      setSuccbtn(
        <span className="" style={{ color: "red" }}>
          Please fill all the field
        </span>
      );
    }
  };

  return (
    <div>
        <div className="card">
          <div className="">
            <div className="admin-dashboard">
              <div className="title-header">
                <h5 className="card-header-01 text-center">Delivery Creation</h5>
                <ModalBody className="close-icon">
                  <AiOutlineClose
                    className="main_AiOutlineClose"
                    onClick={() => setModalIsOpen(false)}
                    color="rgba(27, 38, 68, 1)"
                  />
                </ModalBody>
              </div>
              <div className="row card-holder">
                <form className="form-control-holder"  onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-4 w-50">
                      <label for="exampleInputEmail1" className="form-label">
                      Customers Full name<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="full_name"   
                        onChange={(e)=> setCustoname(e.target.value)}          
                        id="first_name"
                        placeholder="Enter your name"
                        type="text"
                      />
                {error && custoname.length<=0?<span className="valid-form" style={{color:'red'}}>Please Enter full name*</span>:""}
                    </div>
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Customers Email<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="email"   
                        onChange={(e)=> setCustoemail(e.target.value)}          
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                    {error && custoemail.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter the valid Email*</span>:""}

                    </div>
                  </div>
                 <div className="row">
                    <div className="mb-4 w-50">
                      <label className="form-label">
                       Customers Contact Number<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="phone"   
                        onChange={(e)=> setCustocontactnum(e.target.value)}          
                        id="phone"
                        placeholder="Enter your phone"
                        type="number"
                      />
                      {error && custocontactnum.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter the 10 Digit number*</span>:""}

                    </div>
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Customers Alternate Contact Number<span className="stra-icon">*</span>{" "}
                      </label>
                      <input
                        name="phone"   
                        onChange={(e)=> setCustoaltnum(e.target.value)}          
                        id="phone"
                        placeholder="Enter alternate number"
                        type="number"
                      />
                    {error && custoaltnum.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter the 10 Digit number*</span>:""}

                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Customers Pickup Location<span className="stra-icon">*</span>
                      </label>
                      <input
                        name="pickuplocation"   
                        onChange={(e)=> setPickuplocation(e.target.value)}          
                        id="pickuplocation"
                        placeholder="pickup Location"
                        type="text"
                      />
                      {error && pickuplocation.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter pickup location*</span>:""}

                    </div>
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Customers Drop Location<span className="stra-icon">*</span>{" "}
                      </label>
                      <input
                        name="droplocation"   
                        onChange={(e)=> setDroplocation(e.target.value)}          
                        id="droplocation"
                        placeholder="Drop Location"
                        type="text"
                      />
                    {error && droplocation.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Please Enter drop location*</span>:""}

                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Please Select<span className="stra-icon">*</span>
                      </label>
                      {/* <input
                        name="select"   
                        onChange={(e)=> setPickuplocation(e.target.value)}          
                        id="pickuplocation"
                        placeholder="pick option"
                        // type="text"
                      /> */}
                      <div className="d-flex check-box-container">
                      <div className="checkbox-col d-flex">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Shipment</label>
                      </div>
                      <div className="checkbox-col d-flex">
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2">Field workforce</label>
                      </div>
                     </div>
                      

                    </div>
                    <div className="mb-4 w-50">
                      <label className="form-label">
                      Add Description<span className="stra-icon">*</span>{" "}
                      </label>
                      <input
                        name="description"   
                        onChange={(e)=> setDroplocation(e.target.value)}          
                        id="description"
                        placeholder="Description"
                        type="text"
                      />
                    {error && description.length <= 0 ?<span className="valid-form" style={{color:'red'}}>Enter Description*</span>:""}

                    </div>
                  </div>
                  <button type="submit" className="submit-btn"  value="Send Message">
                    Create Shipment
                  </button>
                  <div className="succbtn mb-4" >{succbtn ? <p>{succbtn}</p> : null}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* <div className="d-flex create-dispatcher-01 align-items-center">
        <div className="plus-icon">
          <button type="submit" onClick={() => setModalIsOpen(true)}>
            <img src="/Assets/dash/plus.png" />
            Create New Shipment
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default DeliveryCreation;
