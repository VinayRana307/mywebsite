import React,{Component} from 'react';
import ImagesCompress from './ReactComponent/ImageCompress'
import ImageSlider from './ReactComponent/ImageSlider'
import SharePropertyOnLinks from './ReactComponent/ShareOnSocialLink'
import TxtAnimation from './ReactComponent/TextAnimate'
import MultiStepForm from './ReactComponent/MultistepForm'
import EventCalender from './ReactComponent/EventCalender'

export default class Reactjs extends Component{
    constructor(){
        super();
        this.state={
			
        }
    }
	
    render(){
        return(
            <div>
				<h1 style={{textAlign:'center'}}>Reactjs<hr/></h1>
				
				{/* Image Slider*/}
				<ImageSlider />
				
				<hr/>
				
				{/* Image Compress*/}
				<ImagesCompress />
				
				<hr/>
				
				{/* Share Property on Social Links*/}
				<SharePropertyOnLinks />
				
				<hr/>
				
				{/* Auto Text Animation type*/}
				<TxtAnimation />
				
				<hr/>
				
				{/* Multi Steps Form*/}
				<MultiStepForm />
				<br/><br/><br/><br/><br/>
				<hr/>
				
				{/* Show Events on calender*/}
				<EventCalender />
				
				<hr/><br/><br/>
            </div>
           
        )
    }
}