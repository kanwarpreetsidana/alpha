import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';
import haryana from "../images/h1.jpeg"



export default class Login extends Component{
  

  constructor(props){
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    let loggedIn_F=true 
    if (token == null){
        loggedIn=false
        loggedIn_F=false

    }
    
    this.state={
      username:'',
      password:'',
      loggedIn,loggedIn_F
    }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
  }
  
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitForm(e){
    e.preventDefault()
    const{username ,password}=this.state
     if (username ==="h" &&  password==="h"){
       localStorage.setItem("token","jhug7uguhnunuknui")
       this.setState({
         loggedIn:true
       })
     }
    else if (username ==="F" &&  password==="F"){
      localStorage.setItem("token","jhug7uguhnunuknui")
      this.setState({
        loggedIn_F:true
      })
    }
    else if (username ==="" &&  password===""){
      alert("Please Fill Username and Password")
    }
  }
  
render(){
  if(this.state.loggedIn){
  return <Redirect to='/admin' />
  }
  if(this.state.loggedIn_F){
    return <Redirect to='/forensic' />
    }
  return(<>
  <div className="container-log">
  <div className="row">
  <div className="col-md-12"><img src={haryana} height="150px" width="1700px"  ></img> </div>
  </div>
  </div>

 <div className="my-5">
    <h1 className="font-weight-bold text-center" ><span> Login Page </span></h1>
</div>
    <div className="login-form"> 
   
        <form  onSubmit={this.submitForm}>
         
            <label for="exampleInputPassword1">Username:  <pre>    </pre></label>
            <input  type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
        
  <br></br>
      
          <label for="exampleInputPassword1">Password: <pre>    </pre></label>
          <input  type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
       
   <br></br>
   <br></br>
   
    <button  type="submit" className="btn btn-outline-primary" >Submit</button>
    
    </form>

    </div>
   
   


<br></br>
<br></br>
</>
  )
}
}

