import React,{Component, useContext} from 'react';
import {FirstName} from '../Nodejs'

const ComC = () =>{
	const fname = useContext(FirstName);
	alert(fname)
	return(
		<h1>my name is {fname}</h1>
	)
}

export default ComC;