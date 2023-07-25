import React from 'react'
import '../../css/shippment.css'
import CreateDispatch from './CreateDispatch'
import CreateDriver from './CreateDriver'
import CreateShipment from '../CreateShipment/CreateShipment'
import CreateHelper from '../CreateShipment/CreateHelper'
import CreateVehical from '../CreateShipment/CreateVehical'
function Shippment() {
  return (
    
        	<div class="col-md-4">
							<div class="account-here mb-2">
								<div class="p-4 mb-3">
									  <div class="card-body">
									    	<p class="card-text text-center">You can create Dispatcher’s and Driver’s Account Here...!!</p>
									    	{/* <div class="d-flex create-dispatcher align-items-center">
									    		<div class="plus-icon">
								    				<a href="#"><img src="/Assets/dash/plus.png"/></a>	
								    			</div>
								    			<div class="">
								    				<p>Create Dispatcher </p>
								    			</div>
									    	</div> */}
                                            <CreateDispatch/>
                                            <CreateDriver/>
									    	{/* <div class="d-flex create-dispatcher align-items-center">
									    		<div class="plus-icon">
								    				<a href="#"><img src="/Assets/dash/plus.png"/></a>
								    			</div>
								    			<div class="">
								    				<p>Create Driver </p>
								    			</div>
									    	</div> */}
									  </div>
								</div>
							</div>
							<div class="account-here">
								<div class="p-4 mb-3">
									  <div class="card-body">
									    	<p class="card-text text-center">You can create Shipments</p>
									    	{/* <div class="d-flex create-dispatcher-01 align-items-center"> */}
									    		{/* <div class="plus-icon">
								    				<a href="#"><img src="/Assets/dash/plus.png"/></a>
								    			</div> */}
								    			<div class="">
								    				{/* <p>Create New Shippment</p> */}
                                                    <CreateShipment/>
								    			</div>

                                                <div class="">
								    				{/* <p>Create New Shippment</p> */}
                                                    <CreateHelper/>
								    			</div>

                                                <div class="">
								    				{/* <p>Create New Shippment</p> */}
                                                    <CreateVehical/>
								    			</div>
									    	{/* </div> */}
									  </div>
                                      
								</div>
							</div>
						</div>
  
  )
}

export default Shippment