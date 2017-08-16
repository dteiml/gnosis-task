import * as at from '../constants/actionTypes'; // at = action types
import Contact from '../constants/Contact';

const data = (state: Contact[] = [], action: any) => {
	if (action.type === at.FETCH_DATA) {
		return action.data || state;
	} else {
		const { id, fields } = action,
					// contact will either be undefined or the contact
					myContact = state.filter((contact: Contact) => contact.id === id)[0];
		
		let newData;
		switch ( action. type ) {
			case at.DELETE_CONTACT:
				newData = state.filter((contact: Contact) => myContact !== contact);
				break;
			case at.UPDATE_CONTACT:
				newData = state.map((contact: Contact) => contact.id === id ? {id, fields} : contact);
				break;
			case at.CREATE_CONTACT: 
				newData = state.concat([{id, fields}]); // returns new array
				break;
			default: // we don't change anything, so this is not a mutation
				newData = state;
				break;
		};
		
		return newData;
	};
};

export default data;