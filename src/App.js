import React from 'react';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("./component/Login"));
const VerifyOTP =  React.lazy(() => import("./component/VerifyOTP"))
const ForgetPassword =  React.lazy(() => import("./component/ForgetPassword"))
const HomePage = React.lazy(() => import("./component/HomePage"));
const DispatchList = React.lazy(() => import("./component/Dashboard/DispatchList"));
const DriverList = React.lazy(() => import("./component/Dashboard/DriverList"));
// const VehicalForm = React.lazy(() => import("./component/CreateShipment/CreateVehical"));
const HelperList = React.lazy(() => import("./component/CreateShipment/HelperList"))
const VehicalList = React.lazy(() => import("./component/CreateShipment/VehicalList"))


function App() {
  const tokendata =localStorage.getItem("jwt"); 

  return (
    <>
      <Router>
        <React.Suspense fallback={<div className='d-flex justify-content-center align-items-center'>
        </div>}>
          <Routes>
            <Route exact path="/" element={tokendata ?  <HomePage /> :<Login/>}/> 
            <Route exact path="/" element={tokendata ?  <HomePage /> :<Login/>}/>
            <Route exact path="/verifyOTP" element={<VerifyOTP/>}/>
            <Route exact path="/ForgetPassword" element={<ForgetPassword/>}/>
            <Route exact path="/dispatchList" element={<DispatchList/>}/>
            <Route exact path="/driverList" element={<DriverList/>}/>
            {/* <Route exact path="/vehical" element={<VehicalForm/>}/> */}
            <Route  exact path="/helperList" element={<HelperList/>}/>
            <Route  exact path="/vehicalList" element={<VehicalList/>}/>

          </Routes>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
