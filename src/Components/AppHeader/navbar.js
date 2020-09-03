import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from '../AppContainer/Home/homepage'
import AboutPage from '../AppContainer/About/aboutpage'
import ContactPage from '../AppContainer/ContactUs/contact'
import Reactjs from '../AppContainer/Development/Reactjs'
import Nodejs from '../AppContainer/Development/Nodejs'
import LoginUsers from '../Authentication/Login/LoginUser'

export default class Navbar extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/download">Downloads</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="development">Development</a>
							<ul className="innerNav">
								<li><a href="reactjs">Reactjs</a></li>
								<li><a href="/development/nodejs">Nodejs</a></li>
								<li><a href="/development/reactjs">Angularjs</a></li>
								<li><a href="reactjs">Javascript</a></li>
							</ul>
						</li>
                    </ul>
                </div>
                <div>
                    <Router>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/contact-us" component={ContactPage}/>
                        <Route path="/development/reactjs" component={Reactjs}/>
                        <Route path="/contact-us" component={ContactPage}/>
                        <Route path="/development/nodejs" component={Nodejs}/>
                        <Route path="/login" component={LoginUsers}/>
                    </Router>
                    
                </div>
            </div>
           
        )
    }
}