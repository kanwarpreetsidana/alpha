import React from 'react';
import { useState } from 'react';


const Contact=() =>{
    const[data,setData]=useState({
        fullname:"",
        address:"",
        email:"",
        phone:"",

    });
const InputEvent=(event)=>{
const{name,value} =event.target;
    setData((preVal)=>{
        return {
            ...preVal,
            [name]:value,
        };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`{data.phone}`);
    };

  return(
  <>
<div className="my-5">
    <h1 className="text-center" > Contact Us</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}> 
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input type="text" name="address" value={data.address} onChange={InputEvent} class="form-control" id="exampleInputPassword1"/>
                </div>
               
                <div class="form-group">
                    <label for="exampleInputEmail1">Email ID</label>
                    <input type="email" name="email" value={data.email} onChange={InputEvent} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contact Number</label>
                    <input type="number" name="phone" value={data.phone} onChange={InputEvent} class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Gender</label>
                    <div class="dropdown">
                        <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" >
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/about">Male</a>
                            <a class="dropdown-item" href="#">Female</a>
                            <a class="dropdown-item" href="#">Other</a>
                        </div>
                        </div>
                </div>
               <div><br></br></div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </form>
        </div>
    </div>
</div>

</>
  );
};

export default Contact;
