// types package doesn't exist, so we have to use old notation:
const uuid = require('uuid-v4');

import Contact, { Fields } from '../constants/Contact';

const changeStatus = (newStatus: string) => ({
	type: 'CHANGE_STATUS',
	newStatus
});

export const sort = (field: string) => ({
	type: 'SORT',
	field
})

export const fetchData = () => {
	return (dispatch: any) => {
		dispatch(changeStatus('loading'));
		let next;
		localStorage ? next=hydrate : next=noData;
		dispatch(next());
		dispatch(changeStatus('done'));
	}
};

const hydrate = () => {
	const data = JSON.parse(localStorage.getItem('data')!); // ! overrides 'possibly null' typescript exception
	return {
		type: 'FETCH_DATA',
		data
	};
};

const noData = () => ({type: 'FETCH_DATA'});

// submitContact distinguishes whether to update contact or create  new one
export const submitContact = (id: string, fields: Fields) => {
	return (dispatch: any) => {
	id 
		? dispatch(updateContact(id, fields))
		: dispatch(createContact(fields));
	}
}

const createContact = (fields: Fields) => {
	const id = uuid();
	hibernate(id, fields);
	return {
		type: 'CREATE_CONTACT',
		id, 
		fields
	};
};

const updateContact = (id: string, fields: Fields) => {
	hibernate(id, fields);
	return {
		type: 'UPDATE_CONTACT',
		id, 
		fields
	};
};

export const deleteContact = (id: string) => {
	hibernate(id);
	return {
		type: 'DELETE_CONTACT',
		id
	};	
};

// hibernate() saves changes to localStorage
function hibernate(...args: any[]) {
	const id = args[0],
				fields = args[1], // new fields for either updating or creating new contact

				data = JSON.parse(localStorage.getItem('data') || '[]'),

				// contact will either be undefined or the contact
				contact = data.filter((contact: Contact) => contact.id === id)[0];
	
	let newData;
	if ( contact ) { // delete or update
		if (args.length === 1) { // delete
			newData = data.filter((contact: Contact) => contact.id !== id);
		} else { // update
			newData = data.map((contact: Contact) => contact.id === id ? {id, fields} : contact);
		};
	} else { // contact isn't present --> create 
		newData = data.concat([{id, fields}]); 
	};
	
	localStorage.setItem('data', JSON.stringify(newData));
};