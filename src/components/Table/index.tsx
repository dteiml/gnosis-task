import * as React from "react";

import Contact from "../../constants/Contact";

import styled from "styled-components";
import * as ci from "../../constants/colors"; // ci = color imports
import "./index.css";

import Row from "../Row";

interface P {
	contacts: Contact[];
	deleteContact: (id: string) => void;
	sort: (field: string) => void;
	sortBy: string;
}

const caretUp = "\u25B2",
	caretDown = "\u25BC";

const Table = ({ contacts, deleteContact, sort, sortBy }: P) => {
	return (
		<Div>
			<table>
				<thead>
					<RowHead>
						<th>
							<Span
								onClick={() => {
									sort("firstName");
								}}>
								{sortBy !== "firstName" ? caretDown : caretUp}
								Firstname
							</Span>
						</th>

						<th>
							<Span
								onClick={() => {
									sort("lastName");
								}}>
								{sortBy !== "lastName" ? caretDown : caretUp}
								Lastname
							</Span>
						</th>

						<th>
							<Span
								onClick={() => {
									sort("DOB");
								}}>
								{sortBy !== "DOB" ? caretDown : caretUp}
								Date of Birth
							</Span>
						</th>

						<th>
							<Span
								onClick={() => {
									sort("phone");
								}}>
								{sortBy !== "phone" ? caretDown : caretUp}
								Phonenumber
							</Span>
						</th>

						<th>
							<Span
								onClick={() => {
									sort("email");
								}}>
								{sortBy !== "email" ? caretDown : caretUp}
								E-Mail
							</Span>
						</th>

						<th>
							<Span
								onClick={() => {
									sort("default");
								}}>
								{sortBy !== "default" ? caretDown : caretUp}
								Actions
							</Span>
						</th>
					</RowHead>
				</thead>

				<tbody>
					{contacts.map(contact =>
						<Row
							key={contact.id}
							contact={contact}
							deleteContact={deleteContact}
						/>
					)}
				</tbody>
			</table>
		</Div>
	);
};

export default Table;

const Span = styled.span`cursor: pointer;`;

const RowHead = styled.tr`background-color: ${ci.rowHead};`;

const Div = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: center;
`;
