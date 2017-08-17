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

		case at.FETCH_DATA:
			return { contacts: action.data || contacts };

		case at.SORT:
			const { sortBy } = state,
						{ field } = action,
						newContacts = [...contacts]; // so we don't mutate state

			if ( sortBy === field ) {
				const ABC = newContacts.reverse();
				return {contacts: [...ABC], // so we return a brand new array
								sortBy: ''}}
			else {
				newContacts.sort( 
				// wee musn't forget to create a new array at the end
				( a: Contact, b: Contact ) => {
					console.log(a.fields[field], b.fields[field]);
				if ( a.fields[field] > b.fields[field] ) return 1; else return -1;});
				return {contacts: newContacts, // creating new array
								sortBy: field}}; 
			}


	const { id, fields } = action,

				// myContact will either be undefined - if we're creating a new one
				// or the contact - if we're updating or deleting
				myContact = contacts.filter((contact: Contact) => contact.id === id)[0];

	let newContacts;

	// the next switch case deals with mutating contacts 
	// (I have split it up into two switch cases to declare variables as above)
	switch ( action.type ) {
		case at.DELETE_CONTACT:
			newContacts = contacts.filter((contact: Contact) => // pure function
											myContact !== contact);
			break;
		case at.UPDATE_CONTACT:
			newContacts = contacts.map((contact: Contact) => 
											contact.id === id ? {id, fields} : contact); // pure function
			break;
		case at.CREATE_CONTACT: 
			newContacts = contacts.concat([ {id, fields} ]); // returns new array
			break;
		default: // we don't change anything, so this is not a mutation
			return state;};
	return { contacts: newContacts };};

export default data;