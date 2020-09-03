import React,{Component} from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import SimpleImageSlider from "react-simple-image-slider";

import image1 from "../../Home/images/image1.jpg"
import image2 from "../../Home/images/image2.jpg"
import image3 from "../../Home/images/image3.jpg"
import image4 from "../../Home/images/image4.jpg"
import image5 from "../../Home/images/image5.jpg"

export default class ImageSlider extends Component{
    constructor(){
        super();
        this.state={
			
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
		const images = [
            { url: image1},
            { url: image2},
            { url: image3 },
            { url: image4 },
            { url: image5 },
        ];
        return(
            <div>	
				<div className="divTask">
					<h3>Image Slider :</h3>
					<div>
					<br/>
					<h4>(1. )</h4>
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
						
						<br/>
						<h4>(2. )</h4>
							
							<SimpleImageSlider
								width={1230}
								height={450}
								images={images}
							/>
					</div>
				</div>
            </div>
           
        )
    }
}