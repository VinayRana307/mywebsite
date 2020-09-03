import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from '../AppContainer/Home/homepage'
import Navbar from '../AppHeader/navbar'

class Routes extends Component(){
    render(){
        return(
            <div>
                <Router>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/navbar" component={Navbar}/>
                </Router>
                
            </div>
        )    
    }
    
}

export default Routes;
