import * as React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import * as ci from '../../constants/colors'; // ci = color imports

import Contact from '../../constants/Contact';

interface P {
	contact: Contact;
	deleteContact: (id: string) => void;
};

const Row = ({ contact, deleteContact }: P) => {
	const { id, fields } = contact;
	let { DOB } = fields;
	DOB && (DOB = DOB.split('-').join('/'));

	return (
		<MyRow>
			<td>{fields.firstName}</td>
			<td>{fields.lastName}</td>
			<td>{DOB}</td>
			<td>{fields.phone}</td>
			<td>{fields.email}</td>
			<td>
				<Link to={'/edit/' + id}>Edit</Link>
				{' '}
				<Span onClick={() => {deleteContact(id)}}> Delete </Span>	
			</td>
		</MyRow>
	);
};

export default Row;	

const MyRow = styled.tr`
	&:nth-of-type(odd) {
		background-color: ${ci.rowLight};
	}
	&:nth-of-type(even) {
		background-color: ${ci.rowDark};
	}
`;

const Span = styled.span`
	text-decoration: underline;
	color: blue;
	cursor: pointer;
`;