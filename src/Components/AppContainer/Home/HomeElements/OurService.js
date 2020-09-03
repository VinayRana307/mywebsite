import React,{Component} from 'react';
import banner from '../../../../Assets/images/banner.jpg';


class OurService extends Component{
    render(){
        const { heading, description} = this.props;
        return(
            <div className="serviceComponent">
				<div className="serviceInner">
					<img src={banner}/>
					<h4>{heading}</h4>
					<p>{description}</p>
				</div>
            </div>
        )
    }
} 

export default OurService;