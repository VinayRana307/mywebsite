import React,{Component} from 'react';
import Typical from 'react-typical';

export default class TxtAnimation extends Component{
    constructor(){
        super();
        this.state={
			
        }
    }
	
    render(){
        return(
            <div>
				<div className="divTask">
					<h3>Auto Text Animation :</h3>
					<div style={{padding:'10px 0px'}}>
						<Typical className="AnimateTxt"
							steps={['Hello,', 1000, 'Hello, This is a Text Animation.', 500]}
							loop={Infinity}
							wrapper="p"
						  />	
					</div>
				</div>
            </div>
           
        )
    }
}