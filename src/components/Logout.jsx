
import React,{Component} from 'react'
import { Link } from 'react-router-dom'

export default class Admin extends Component{
     constructor(props){
        super(props)
        localStorage.removeItem("token")
     }
    render(){
        return(
            <div> Logged out
            <Link to="/login" >Login Again </Link>
            </div>
            
        )
    }
}