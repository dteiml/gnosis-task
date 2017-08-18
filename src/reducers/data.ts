import * as at from '../constants/actionTypes'; // at = action types
import Contact from '../constants/Contact';

interface S {
	contacts: Contact[];
	sortBy: string;}

// data is composed of an arraty of contacts and a sortBy tag
const data = (state: S = {contacts: [], sortBy: ''}, action: any) => {
	const { contacts } = state;


	// following switch case deals with fetching and sorting
	switch ( action.type ) {

		case at.FETCH_DATA: // fetch data
			return { contacts: action.data || contacts };

		case at.SORT: // sort
			const { sortBy } = state,
						{ field } = action,
						newContacts = [...contacts]; // so we don't mutate state

			if ( sortBy === field ) { // reverse 
				return {contacts: newContacts.reverse(),
								sortBy: ''}}
			else { // new sort
				newContacts.sort( 
				( a: Contact, b: Contact ) => {
				if ( a.fields[field] > b.fields[field] ) return 1; else return -1;});

				return {contacts: newContacts,
								sortBy: field}}; 
	}

	const { id, fields } = action;
	let newContacts;
	// the next switch case deals with mutating contacts 
	// (I have split it up into two switch cases to declare variables as above)
	switch ( action.type ) {
		case at.DELETE_CONTACT:
			newContacts = contacts.filter((contact: Contact) => // pure function
											contact.id !== id);
			break;
		case at.UPDATE_CONTACT:
			newContacts = contacts.map((contact: Contact) => 
											contact.id === id ? {id, fields} : contact); // pure function
			break;
		case at.CREATE_CONTACT: 
			newContacts = contacts.concat([ {id, fields} ]); // pure function
			break;
		default: 
			return state; // we don't change anything, so this is not a mutation
	};

	return { contacts: newContacts };};

export default data;