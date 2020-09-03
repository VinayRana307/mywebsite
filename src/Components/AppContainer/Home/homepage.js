import React,{Component} from 'react';
import banner from '../../../Assets/images/banner.jpg';
import OurService from './HomeElements/OurService';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import Typical from 'react-typical';

class HomePage extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
		const slideImages = [
			  image1,
			  image2,
			  image3,
			  image4,
			  image5
			];
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 bannerImg pad0">
						<Typical className="TyicalTxt"
							steps={['Hello,', 1000, 'Hello, My name is vinay kumar', 500, 'My age is 22 years old ...', 1000, 'I am working as on Web Development', 500]}
							loop={Infinity}
							wrapper="p"
						  />
                         <Slide>
							  <div className="each-slide">
								<div style={{'backgroundImage': `url(${slideImages[0]})`}}>
								  
								</div>
							  </div>
							  <div className="each-slide">
								<div style={{'backgroundImage': `url(${slideImages[1]})`}}>
								  
								</div>
							  </div>
							  <div className="each-slide">
								<div style={{'backgroundImage': `url(${slideImages[2]})`}}>
								  
								</div>
							  </div>
							  <div className="each-slide">
								<div style={{'backgroundImage': `url(${slideImages[3]})`}}>
								  
								</div>
							  </div>
							  <div className="each-slide">
								<div style={{'backgroundImage': `url(${slideImages[4]})`}}>
								  
								</div>
							  </div>
							</Slide>
                    </div>
                </div>
                <div className="row serviceRow pad0">
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Development" 
                            description="Web Development is create only websites"
                        />   
                    </div>
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Development" 
                            description="Mobile Development is create Mobile Application"
                        />   
                    </div>
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Designing" 
                            description="It is create only web page design"
                        />   
                    </div>
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Development" 
                            description="Web Development is create only websites"
                        />   
                    </div>
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Development" 
                            description="Mobile Development is create Mobile Application"
                        />   
                    </div>
                    <div className="col-md-4 col-sm-12 pad0">
                        <OurService 
                            heading="Web Designing" 
                            description="It is create only web page design"
                        />   
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        
                    </div>
                </div>
           </div>
        )
    }
}

export default HomePage;