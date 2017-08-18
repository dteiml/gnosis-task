import * as at from '../constants/actionTypes'; // at = action types
import Contact from '../constants/Contact';
import { Fields } from '../constants/Contact';

interface S {
	contacts: Contact[];
	sortBy: string;}

const sort = (contacts: Contact[], sortBy: string, field: string) => {
	if ( sortBy === field ) { // reverse 
				return {contacts: contacts.reverse(),
								sortBy: ''}}
			else { // new sort
				contacts.sort( 
					( a: Contact, b: Contact ) => {
						if ( a.fields[field] > b.fields[field] ) return 1; else return -1;});

				return {contacts: contacts,
								sortBy: field}}; 
}

const deleteContact = (contacts: Contact[], id: string) => {
	return contacts = contacts.filter((contact: Contact) => // pure function
											contact.id !== id);
}

const updateContact = (contacts: Contact[], id: string, fields: Fields) => {
	return contacts.map((contact: Contact) => 
											contact.id === id ? {id, fields} : contact); // pure function
}

const createContact = (contacts: Contact[], id: string, fields: Fields) => {
	return { contacts: contacts.concat([ {id, fields} ])}; // pure function
}


// data is composed of an array of contacts and a sortBy tag
const data = (state: S = {contacts: [], sortBy: ''}, action: any) => {
	const { contacts } = state;


	// following switch case deals with fetching and sorting
	switch ( action.type ) {

		case at.FETCH_DATA: // fetch data
			return { contacts: action.data || contacts };

		case at.SORT: // sort
			// declare variables
			const { sortBy } = state,
						{ field } = action,
						newContacts = [...contacts]; // so we don't mutate state

			return sort(newContacts, sortBy, field);
	}

	// the next switch case deals with mutating contacts 
	// (I have split it up into two switch cases to declare variables below)
	const { id, fields } = action;
	let newContacts: Contact[] = [];
	switch ( action.type ) {

		case at.DELETE_CONTACT:
			return deleteContact(newContacts, id);

		case at.UPDATE_CONTACT:
			return updateContact(newContacts, id, fields);

		case at.CREATE_CONTACT: 
			return createContact(newContacts, id, fields);

		default: 
			return state; // we don't change anything, so this is not a mutation
	};
}

export default data;
