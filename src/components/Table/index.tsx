import * as React from 'react';

import Contact from '../../constants/Contact';

import styled from 'styled-components';
import * as ci from '../../constants/colors'; // ci = color imports
import './index.css';

import Row from '../Row';

interface P {
	data: Contact[],
	deleteContact: (id: string) => void
}

const Table = ({ data, deleteContact }: P) => {
	console.log('data', data);
	return (
		<Div> 
			<table>
				<thead>
					<RowHead>
						<th>Firstname</th>
						<th>Lastname</th> 
						<th>Date of Birth</th>
						<th>Phonenumber</th>
						<th>E-Mail</th>
						<th>Actions</th>
					</RowHead>
				</thead>
				<tbody>

				{data.map((contact) => (
					<Row 
						key={contact.id}
						contact={contact}
						deleteContact={deleteContact}/>
				))}
				
				</tbody>
			</table>
		</Div>
	);
};

export default Table;	

const RowHead = styled.tr`
	background-color: ${ci.rowHead};
`;

const Div = styled.div`
	margin: 20px 0; 
	display: flex;
	justify-content: center;
`;