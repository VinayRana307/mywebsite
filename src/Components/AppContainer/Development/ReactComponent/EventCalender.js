import React,{Component} from 'react';

//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import listPlugin from '@fullcalendar/list';

import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

import Popup from "reactjs-popup";

export default class EventCalender extends Component{
    constructor(){
        super();
        this.state={
			open:false,
			Title : '',
			open1 : false,
			EventTitle : ''
        }
    }
	
	onCloseModal = () =>{
		this.setState({
			open:false
		})
	}
	
	EventClicks = (d) =>{
		//console.log(d.event.title)
	//	alert(d.event.title)
		this.setState({open1:true, EventTitle : d.event.title})
	}
    render(){
		const { open, Title, open1,EventTitle} = this.state;
        return(
            <div>
				<div className="divTask">
					<h3>Show Events On Calender :</h3>
						<div className="showEvent">
						<button type="button" onClick={()=>this.setState({ open:true })}>Show Events</button>
							
						<Modal open={open} onClose={this.onCloseModal}>
							{open1?
								<div className="innerModal">
									<h3>Title</h3><hr/>
									<p>{EventTitle}</p>
									<button type="button" onClick={()=>this.setState({ open1 : false})}>Cancel</button>
								</div>
							:null}
							{/* https://therichpost.com/how-to-get-event-details-on-event-click-fullcalendar-in-reactjs/ 
							
								npm install --save @fullcalendar/react @fullcalendar/daygrid

								npm i @fullcalendar/interaction
							
								css :
								
										.innerModal{
											width: 65%;
											height: 303px;
											z-index: 3;
											margin: 19% 17% !important;
											position: absolute;
											padding: 1.2rem;
											background: #ffffff;
											background-clip: padding-box;
											box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
										}
										.innerModal button{
											float: right;
											margin: 90px 30px;
										}
							
							*/}
						<FullCalendar
								plugins={[ dayGridPlugin, interactionPlugin, listPlugin  ]}
								initialView="dayGridMonth"
								eventClick={
								  (arg)=>{
									  {this.EventClicks(arg)}			
								  }
								}
								events={[
								  { title: 'Gas safety check Gas safety check Gas safety check Gas safety check Gas safety check', date: '2020-08-13',backgroundColor:'red' },
								  { title: 'Rental Rupees', date: '2020-08-02' },
								  { title: 'Water Bill pay', date: '2020-08-02' },
								  { title: 'New Gas Connection', date: '2020-09-06' },
								  { title: 'Food purchase', date: '2020-08-11' },
								  { title: 'out of stock goods', date: '2020-08-15' },
								  { title: 'pay income tax ', date: '2020-08-20' }
								]}
						  />	
						</Modal>
					</div>
				</div>
            </div>
           
        )
    }
}