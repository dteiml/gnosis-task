import * as React from 'react';
import { connect } from 'react-redux';
// const deepAssign = require('deep-assign');

import * as ai from '../../actions'; // ai = action imports
import Form from '../../components/Form';
import Title from '../../components/Title';

import Contact from '../../constants/Contact';

const defaultFields = {
	firstName: '',
	lastName: '',
	DOB: '',
	phone: '',
	email: ''
};

interface P {
	contacts: Contact[];
	submitContact: (id: string, fields: object) => void;
};

const FormContainer = (props: P) => {
	//read off contct from url
	const contactID = location.pathname.substr(6);

	//contact will either be undefined (new page) or our desired contact (edit page)
	const contact = props.contacts.filter((contact: Contact) => contact.id === contactID)[0];

	return (
		<div>
			{contact 
				? <Title text={'Editing. ' + contact.fields.firstName + ' ' + contact.fields.lastName}/>
				: <Title text='Creating a new contact'/>}

			<Form  
				contact={contact || {id: '', fields: {...defaultFields}}}
				submitContact={props.submitContact}/>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		contacts: state.data.contacts
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		submitContact: (id: string, fields: object) => dispatch(ai.submitContact(id, fields))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer as any);