import * as React from 'react';

import styled from 'styled-components';
import * as ci from '../../constants/colors'; // ci = color imports

interface P {
	text: string;
	width: number;
};

const Button = ({ text, width }: P) => {
	const MyButton = styled.button`
		width: ${width}px;
		height: 32px;
		font-size: 18px;
		font-weight: 500;
		background-color: ${ci.greyDark};
		border: 2px solid black;
		border-radius: 3px;
		cursor: pointer;
	`;
	return (
		<MyButton>{text}</MyButton>
	);
} 

export default Button;

