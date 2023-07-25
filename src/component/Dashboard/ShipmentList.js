import React from 'react'
import '../../css/shipmentlist.css'
import { Link } from "react-router-dom";


function ShipmentList() {
  return (
    <div>
        	<div class="">
					<div class="bg-white shipment-dashboard">
						<h5 class="card-header-01 text-center">Shipment</h5>
						<div class="row card-holder-py">
							<div class="col-md-6 border-right p-2">
								<div class="card-body text-center p-2">
							    	<img src="/Assets/gif/delivery-01.gif"/>
								    <p class="card-text">Shipment List</p>
								</div>
							</div>
							<div class="col-md-6 border-left p-2">
								<div class="card-body text-center p-2">
                            
							    	<img src="/Assets/gif/sand-clock.gif"/>
								    <p class="card-text">Delayed Shipment</p> 	
                        
								</div>
							</div>
						</div>
						<div class="row card-holder-py">
							<div class="col-md-6 border-top-right">
								<div class="card-body text-center p-2 mb-2">	
							    	<img src="/Assets/gif/pending.gif"/>
								    <p class="card-text">Pending Shipment</p>
								</div>
							</div>
							<div class="col-md-6 border-top">
								<div class="card-body text-center p-2 mb-2">
							    	<img src="/Assets/gif/Canceled.gif"/>
								    <p class="card-text">Canceled Shipment</p>
								</div>
							</div>
						</div>
						<h5 class="card-header-02 text-center">Dispatcher/ Driver list</h5>
						<div class="row card-holder-py">
							<div class="col-md-6 border-right">
								<div class="card-body text-center py-2">
									<Link to='/driverList'>
							    	<img src="/Assets/gif/vlogger.gif"/>
								    <p class="card-text">Drivers List</p>
									</Link>
								</div>
							</div>
							<div class="col-md-6 border-left">
								<div class="card-body text-center py-2">
                                    <Link to="/dispatchList">
							    	<img src="/Assets/gif/policeman.gif"/>
								    <p class="card-text">Dispatchers List</p>
                                    </Link>
								</div>
							</div>
							<div class="col-md-6 border-left">
								<div class="card-body text-center py-2">
                                    <Link to="/helperList">
							    	<img src="/Assets/gif/policeman.gif"/>
								    <p class="card-text">Helper List</p>
                                    </Link>
								</div>
							</div>
							<div class="col-md-6 border-left">
								<div class="card-body text-center py-2">
                                    <Link to="/vehicalList">
							    	<img src="/Assets/gif/policeman.gif"/>
								    <p class="card-text">Vehical List</p>
                                    </Link>
								</div>
							</div>
						</div>
						<h5 class="card-header-02 text-center">Payments</h5>
						<div class="row card-holder-py">
							<div class="col-md-6 border-right">
								<div class="card-body text-center p-2">
							    	<img src="/Assets/gif/ewallet.gif"/>	
							    	<p class="card-text">Payment Records</p>
								</div>
							</div>
							<div class="col-md-6 border-left">
								<div class="card-body text-center p-2">
							    	<img src="/Assets/gif/wallet.gif"/>	
								    <p class="card-text">Transfer money to Driver</p>
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
  )
}

export default ShipmentList