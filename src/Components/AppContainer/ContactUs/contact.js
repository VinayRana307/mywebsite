import React,{Component} from 'react';
import { Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

class ContactPage extends Component{
    constructor(){
        super();
        this.state = {
            firstName : '',
            middleName : '', 
            lastName : '', 
            fatherName : '', 
            motherName : '',
            formData : {},
			time : 0,
		}
	}
	
    handleChange = (e) =>{
        const name = e.target.label;
        const value = e.target.value;
        const {formData} = this.state;
        formData[name] = value;
        this.setState({
            formData : formData,
            [name] : value
        })
    }

    render(){
        const {firstName, middleName, lastName, fatherName, motherName} = this.state;
		
        return(
            <div className="container">
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>Contact Us</CardTitle><hr/>
                                <div>
									
                                    <form autoComplete="off">
                                        <TextField id="standard-basic" label="First Name" />
                                        <TextField id="standard-basic" label="Middle Name" />
                                        <TextField id="standard-basic" label="Last Name" />
                                        <TextField id="standard-basic" label="Father Name" />
                                        <TextField id="standard-basic" label="Mother Name" />
                                        <TextField id="date" label="Birthday" type="date" />
                                        <TextField id="standard-basic" label="Mobile Number" />
                                        <TextField id="standard-basic" label="E-mail Id" />    
                                    </form>
                                </div>
                                <div className="button">
                                    <Button variant="contained" color="primary">Submit</Button>
                                    <Button variant="contained">Cancel</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                             
            </div>
        )
    }
}

export default ContactPage;