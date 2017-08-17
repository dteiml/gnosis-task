export default class Contact {
	id: string;
	fields: Fields;
};

export class Fields {
	firstName?: string;
	lastName?: string;
	DOB?: string;
	phone?: string;
	email?: string;
};