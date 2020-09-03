import React,{Component, Fragment} from 'react';
import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


export default class MultiStepForm extends Component{
    constructor(){
        super();
        this.state={
			currentStep : 1,
			open : false,
			formData : [],
			matricFile :null,
			PlusTwoFile :null,
			anyOtherFile : null,
			activeStep : 0,	
			CheckAgree : false
        }
    }
	
	Next = () =>{
		let currentStep = this.state.currentStep;
		if (currentStep < 4) {
			return <button type="button" className="nextBtn" onClick={this.nextBtn}>Next</button>
		}
		return null	
	}
	
	
	Previous = () =>{
		let currentStep = this.state.currentStep;
		if (currentStep !== 1) {
			return <button type="button" className="prevBtn" onClick={this.prevBtn}>Previous</button>
		}
		return null
	}
	
	nextBtn = (e) =>{
		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 3? 4 : currentStep + 1
		
		this.setState({
			currentStep : currentStep
		})
		this.setState(prevState => ({
			activeStep : prevState.activeStep + 1
		}));
	}
	
	prevBtn = () =>{
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1? 1 : currentStep - 1
		
		this.setState({
			currentStep : currentStep
		})

		this.setState(prevState => ({
			activeStep : prevState.activeStep - 1
		}));
	}

	PreviewClick = () =>{
		this.setState({
			open:true
		})
	}

	onCloseModal = () => {
		this.setState({ open: false, });
	};

	handleImageUpload = (event) =>{
		const name = event.target.name;
		const files = event.target.files;
		if(name === "matric"){ 
			this.setState({
				matricFile : URL.createObjectURL(files[0])
			})
		}
		if(name === "plustwo"){
			this.setState({
				PlusTwoFile : URL.createObjectURL(files[0])
			})
		}
		if(name === "anyother"){
			this.setState({
				anyOtherFile : URL.createObjectURL(files[0])
			})
		}
	}

	handleInputChange = (event) =>{
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		if(name === "agree"){
			if(value == true){
				this.setState({
					CheckAgree : true
				})
			}else{
				this.setState({
					CheckAgree : false
				})
			}
			
		}
		let { formData } = this.state;
		formData[name] = value;

		this.setState({
			formData : formData,
			[name] : value
		})

	}

	SubmitDatabase = () =>{
		if(this.state.formData){
			alert("Data Added Successfully")
		}
	}

	getSteps = ()=> {
		return ['Personal Details', 'Qualification Details', 'Upload Documents', 'Remarks'];
	  }
    render(){
		const steps = this.getSteps();
		const {activeStep} = this.state;
        return(
				
		<div className="form-group">
			<Fragment>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="TabsAnimation"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnter={false}
					transitionLeave={false}>
					<div>
						<h3 style={{marginLeft:'60px'}}>Registration Form :</h3>
					</div><br/>
					<Row>
						<Col>
							<Card className="CardOuter">
								<div className="row">
									<div className="col-sm-12">
										<Stepper className="formStepper" activeStep={activeStep} alternativeLabel>
											{steps.map((label) => (
												<Step key={label}>
												<StepLabel>{label}</StepLabel>
												</Step>
											))}
										</Stepper>
									</div>
								</div>
								<Step1 
									currentStep={this.state.currentStep}
									handleInputChange ={this.handleInputChange}
								/>
								
								<Step2 
									currentStep={this.state.currentStep}
									handleInputChange ={this.handleInputChange}
								/>
								
								<Step3 
									currentStep={this.state.currentStep}
									handleImageUpload = {this.handleImageUpload}
								/>
								
								<Step4 
									currentStep={this.state.currentStep}
									open = {this.state.open}
									PreviewClick = {this.PreviewClick}
									onCloseModal = {this.onCloseModal}
									handleInputChange ={this.handleInputChange}
									matricFile = {this.state.matricFile}
									PlusTwoFile = {this.state.PlusTwoFile}
									anyOtherFile = {this.state.anyOtherFile}
									formData = {this.state.formData}	
									SubmitDatabase = {this.SubmitDatabase}
									CheckAgree = {this.state.CheckAgree}
								/>	
							{this.Next()}
							{this.Previous()}
							</Card>
						</Col>
					</Row>
				</ReactCSSTransitionGroup>
			</Fragment>
		</div>
        )
    }
}

		   
function Step1(props){
	if (props.currentStep !== 1) {
			return null
		}
	return(
		<div className="form-group">
			<Fragment>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="TabsAnimation"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnter={false}
					transitionLeave={false}>
					<Row>
						<Col>
							<Card style={{backgroundColor:'aqua'}}>
								<CardBody>
									<CardTitle>Personal Information</CardTitle><hr/>
									<div className="form">
										<div>
											<label>Name :</label>
											<input type="text" name="firstName" className="form-control" value={props.firstName} onChange={props.handleInputChange}/>
										</div>
										<div>
											<label>Father Name :</label>
											<input type="text" name="middleName" className="form-control" value={props.middleName} onChange={props.handleInputChange}/>
										</div>
										<div>
											<label>Mother Name :</label>
											<input type="text" name="lastName" className="form-control" value={props.lastName} onChange={props.handleInputChange}/>
										</div>
									</div>	
									
									<div className="form">
										<div>
											<label>Email Id :</label>
											<input type="text" name="email" className="form-control" value={props.email} onChange={props.handleInputChange}/>
										</div>
										<div>
											<label>Mobile Number :</label>
											<input type="text" name="mobile" className="form-control" value={props.mobile} onChange={props.handleInputChange}/>
										</div>
										<div>
											<label>Telephone Number :</label>
											<input type="text" name="telephone" className="form-control" value={props.telephone} onChange={props.handleInputChange}/>
										</div>
									</div>
									
									<div className="form">
										<div>
											<p>Gender : </p>
											<input type="radio" name="gender" value="Male" style={{marginLeft:'20px'}} onChange={props.handleInputChange}/>  Male
											<input type="radio" name="gender" value="Female" style={{marginLeft:'20px'}} onChange={props.handleInputChange}/>  Female
											<input type="radio" name="gender" value="Other" style={{marginLeft:'20px'}} onChange={props.handleInputChange}/>  Other
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>				
				</ReactCSSTransitionGroup>
			</Fragment>
		</div>
	)
}

function Step2(props){
	if (props.currentStep !== 2) {
			return null
		}
	return(
		<div className="form-group">
			<Fragment>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="TabsAnimation"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnter={false}
					transitionLeave={false}>
					<Row>
						<Col>
							<Card style={{backgroundColor:'aqua'}}>
								<CardBody>
									<CardTitle>Education Details</CardTitle><hr/>
									<div className="form">
										<div>
											<label>Select Highest Qualification :</label>
											<select className="form-control" name="matricQual" value={props.matricQual} onChange={props.handleInputChange}>
												<option>---- Select ----</option>
												<option>10th</option>
												<option>10+2</option>
											</select>
										</div>
										<div>
											<label>Select Secondary Qualification :</label>
											<select className="form-control" name="plustwoQual" value={props.plustwoQual} onChange={props.handleInputChange}>
												<option>---- Select ----</option>
												<option>10th</option>
												<option>10+2</option>
											</select>
										</div>
										<div>
											<label>Select Any Other Qualification :</label>
											<select className="form-control" name="anyOtherQual" value={props.anyOtherQual} onChange={props.handleInputChange}>
												<option>---- Select ----</option>
												<option>Diploma</option>
												<option>MCA</option>
												<option>BCA</option>
												<option>BSC</option>
												<option>MSC</option>
												<option>PGDCA</option>
												<option>BA</option>
												<option>BAG</option>
											</select>
										</div>
									</div>	
									<div className="form">
										<div>
											<label>Work Experience :</label>
											<input type="text" className="form-control" name="workExp" value={props.workExp} onChange={props.handleInputChange}/>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>				
				</ReactCSSTransitionGroup>
			</Fragment>
		</div>
	)
}

function Step3(props){
	if (props.currentStep !== 3) {
			return null
		}
	return(
		<div className="form-group">
			<Fragment>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="TabsAnimation"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnter={false}
					transitionLeave={false}>
					<Row>
						<Col>
							<Card style={{backgroundColor:'aqua'}}>
								<CardBody>
									<CardTitle>Upload Documents</CardTitle><hr/>
									<div className="form">
										<div>
											<label>10th certificate :</label>
											<input type="file" name="matric" className="form-control" name="matric" onChange={props.handleImageUpload}/>
										</div>
										<div>
											<label>+2 certificate :</label>
											<input type="file" name="plusTwo" className="form-control" name="plustwo" onChange={props.handleImageUpload}/>
										</div>
										<div className="mt-4">
											<label>Other certificate :</label>
											<input type="file" name="otherCerti" className="form-control" name="anyother" onChange={props.handleImageUpload}/>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</Row>				
				</ReactCSSTransitionGroup>
			</Fragment>
		</div>
	)
}

function Step4(props){
	if (props.currentStep !== 4) {
			return null
		}
	return(
		<div className="form-group">
			<Fragment>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="TabsAnimation"
					transitionAppear={true}
					transitionAppearTimeout={0}
					transitionEnter={false}
					transitionLeave={false}>
					<Row>
						<Col>
							<Card style={{backgroundColor:'aqua'}}>
								<CardBody>
									<CardTitle>Remarks</CardTitle><hr/>
									<div className="form">
										<div>
											<label>Comments :</label>
											<textarea cols="125" rows="5" name="comments" value={props.comments} onChange={props.handleInputChange}></textarea>
										</div>
									</div>
									<Modal open={props.open} onClose={props.onCloseModal}>
										<div className="form">
											<h4>Preview Details :</h4>
											<table>
												<tr>
													<td>Name</td>
													<td>{props.formData.firstName}</td>
												</tr>
												<tr>
													<td>Father Name</td>
													<td>{props.formData.middleName}</td>
												</tr>
												<tr>
													<td>Mother Name</td>
													<td>{props.formData.lastName}</td>
												</tr>
												<tr>
													<td>Email Id</td>
													<td>{props.formData.email}</td>
												</tr>
												<tr>
													<td>Mobile Number</td>
													<td>{props.formData.mobile}</td>
												</tr>
												<tr>
													<td>Telephone Number</td>
													<td>{props.formData.telephone}</td>
												</tr>
												<tr>
													<td>Gender</td>
													<td>{props.formData.gender}</td>
												</tr>
												<tr>
													<td>Highest Qualification</td>
													<td>{props.formData.matricQual}</td>
												</tr>
												<tr>
													<td>Secondary Qualification</td>
													<td>{props.formData.plustwoQual}</td>
												</tr>
												<tr>
													<td>Any Other Qualification</td>
													<td>{props.formData.anyOtherQual}</td>
												</tr>
												<tr>
													<td>Work Experience</td>
													<td>{props.formData.workExp}</td>
												</tr>
												<tr>
													<td>10th certificate</td>
													<td><a href={props.matricFile} target="_blank"><img src={props.matricFile} width={100} height={50}/></a></td>
												</tr>
												<tr>
													<td>+2 certificate</td>
													<td><a href={props.PlusTwoFile} target="_blank"><img src={props.PlusTwoFile} width={100} height={50}/></a></td>
												</tr>
												<tr>
													<td>Other certificate</td>
													<td><a href={props.anyOtherFile} target="_blank"><img src={props.anyOtherFile} width={100} height={50}/></a></td>
												</tr>
											</table>
											<span style={{display:'block'}}><input type="checkbox" name="agree" className="mt-3" onChange={props.handleInputChange}/>    I Agree you want to all details correctly.</span>
											{props.CheckAgree?
											<div className="buttonDiv">
												<button type="button" onClick={props.SubmitDatabase}>Ok</button>
												<button type="button" onClick={props.onCloseModal}>Cancel</button>
											</div>
											:null}
										</div>
									</Modal>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<button className="submitBtn" type="button" onClick={props.PreviewClick}>Submit</button>	
				</ReactCSSTransitionGroup>
			</Fragment>
		</div>
	)
}