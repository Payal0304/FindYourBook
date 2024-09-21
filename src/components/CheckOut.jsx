import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function CheckOut (){

    const handlePass=()=>{
        toast.success("Order Placed Successfully")
        setTimeout(() => {
            window.location.reload();
          }, 1000);
    }

  return (

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <Navbar/>
      <div className="mt-28 items-center justify-center text-center">
       <div className="py-3 bg-warning">
        <div className="container">
            <h6 style={{fontWeight:"bold"}}>HOME/CHECKOUT</h6>
            <Link to="/cart">
              <button className="mt-6 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-400 duration-300">
                Back
              </button>
            </Link>
        </div>
       </div>
       <div className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4>Basic Information</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>First Name</label>
                                        <input type="text" name="firstName"  className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName"  className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label>Email Address</label>
                                        <input type="text" name="email"  className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label>Full Address</label>
                                        <textarea rows="3" name="address"  className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label> City</label>
                                        <input type="text" name="city" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label>State</label>
                                        <input type="text" name="state"  className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label>Zip Code</label>
                                        <input type="text" name="zipcode"  className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group text-end">
                                        <button onClick={handlePass}
                                        type='button' className='btn btn-primary'>Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOut
