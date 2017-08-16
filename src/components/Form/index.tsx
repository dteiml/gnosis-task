import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import * as ci from '../../constants/colors'; // ci = color imports
import Button from '../Button';

import Contact from '../../constants/Contact';

interface P {
	contact: Contact;
	submitContact: (id: string, fields: object) => void;
}

interface S extends Contact {
	type: string;
}

class Form extends Component<P, S> {
	state = {...this.props.contact, type: 'text'};

	handleChange = (evt: any) => {
		const { name, value } = evt.target;
		this.setState((prevState) => { 
			prevState.fields[name] = value; // this is not a reducer, so immutability is not a propblem
			return prevState;
		});
	}

	handleSubmit = (evt: any) => {
		console.log('handlesubmit');
		const { id, fields } = this.state;
		this.props.submitContact(id, fields);

	}

	dateFocus = () => {
		this.setState({type: 'date'});
	}

	dateBlur = () => {
		this.setState({type: 'text'});
	}

	render() {

		// admin work to just to make form easier to read:
		const { firstName, lastName, DOB, phone, email } = this.state.fields,
					atts = {type: 'text',
									onChange: this.handleChange},
					dateAtts = {type: this.state.type, name: 'DOB', value: DOB, placeholder: 'Date of Birth',
											onChange: this.handleChange, onFocus: this.dateFocus, onBlur: this.dateBlur},
					loc = location.pathname.substr(4);
		// end of admin stuff
		return (
			<MyForm>

				<Input {...atts} name='firstName' placeholder='Firstname' value={firstName} />
				<Input {...atts} name='lastName' placeholder='Lastname' value={lastName} />
				<Input {...dateAtts} />
				<Input {...atts} name='phone' type='text' placeholder='Phonenumber' value={phone} />
				<Input {...atts} name='email' type='text' placeholder='E-Mail' value={email}/>

				<Link to='/' onClick={this.handleSubmit} >
					<Button 
						text={loc ? 'Save' : 'Create'} 
						width={130}/> 
				</Link>

			</MyForm>
		);
	}
}

export default Form;

const MyForm = styled.form`
	position: relative;
	right: 200px;
`;

const Input = styled.input`
	border: 1px solid black;
	width: 200px;
	display: block;
	margin: 20px 0;
	padding: 5px;
	font-size: 16px;

	::placeholder {
		color: ${ci.greyLight};
	}
`;
