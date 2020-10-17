
import React,{Component} from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Forensic extends Component{
    constructor(props){
        super(props)
    const token = localStorage.getItem("token")

    let loggedIn_F = true 
    if (token == null){
        loggedIn_F=false
    }
    this.state={
        loggedIn_F
    }
    }

    render(){
        if(this.state.loggedIn_F === false){
        return <Redirect to="/login" />
         } 
        return(
            <div> Forensic Page
            <Link to="/logout" >Logout </Link>
            </div>
        )
    }
}