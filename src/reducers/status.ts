import * as at from '../constants/actionTypes'; // ati = action types

const status = (state: string = 'initial', action: any) => {
	switch ( action.type ) {
		case at.CHANGE_STATUS:
			return action.newStatus;

		default:
			return state;
	}
};

export default status;