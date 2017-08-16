import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import styled from 'styled-components';

const ControlPanel = () => {
	return (
		<Span>
			<Link to='/new'> <Button text='Create new Contact' width={220} /> </Link>
		</Span>
	);
};

export default ControlPanel;

const Span = styled.div`
	text-align: right;
`;
