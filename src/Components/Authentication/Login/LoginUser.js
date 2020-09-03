import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import ComA from '../../AppContainer/Development/NodejsComponent/ComA'

export default class LoginUsers extends Component{
    constructor(){
        super();
        this.state={
			name : 'vinay',
			password: '1234',	
			LoggedIn : false,
        }
    }
	handleChange = (e) =>{
		this.setState({
			name : e.target.value,
			password : e.target.value
		})
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		const {name,password} = this.state;
		if(name === "vinay" && password === "1234"){
			localStorage.setItem("token", "ffdgesdfwrtehwweqgasyreh")
			this.setState({
				LoggedIn : true
			})
			
		}
	}
    render(){
	if(this.state.loggedIn){
		return <Redirect to="/about"/>
	}
        return(
            <div>
				<h1 style={{textAlign:'center'}}>Login User<hr/></h1>
				<h3>Name : {this.state.name}</h3>
				<h3>password : {this.state.password}</h3>
				<form>
					<input type="text" placeholder="Enter your username" name="name" onChange={this.handleChange}/>
					<input type="password" placeholder="Enter your password" name="password" onChange={this.handleChange}/>
					<button type="submit" onSubmit={this.handleSubmit}>Submit</button>
				</form>
            </div>
           
        )
    }
}