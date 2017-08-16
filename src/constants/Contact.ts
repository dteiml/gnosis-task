export default class Contact {
	id: string;
	fields: Fields;
};

class Fields {
	firstName?: string;
	lastName?: string;
	DOB?: string;
	phone?: number;
	email?: string;
};