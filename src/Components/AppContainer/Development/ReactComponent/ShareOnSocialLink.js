import React,{Component} from 'react';
import 'react-sharingbuttons/dist/main.css'
import {   
  Email,
  Facebook,
  Google,
  Pinterest,
  Twitter,
 } from 'react-sharingbuttons'
 
export default class SharePropertyOnLinks extends Component{
    constructor(){
        super();
        this.state={
			
        }
    }
	
    render(){
	const url = 'https://www.mywebsite.com/page/1'
	const shareText = 'Street Nest Property'
        return(
            <div>
				<div className="divTask">
					<h3>Share Property On Social Links :</h3>
					<div style={{padding:'10px 0px'}}>
						<Facebook className ="shareSocialLinks" url={url} shareText={shareText}/>
						  <Twitter url={url} shareText={shareText} />
						  <Email url={url} subject="nice subject" />
						  <Google url={url} />
						  <Pinterest url={url} shareText={shareText} mediaSrc={url} />	
					</div>
				</div>
            </div>
           
        )
    }
}