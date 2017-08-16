import * as React from 'react';

import styled from 'styled-components';

interface P {
  text: string;
};

const Title = ({ text } : P) => <H1>{text}</H1>;

export default Title;

const H1 = styled.h1`
	text-align: center;
	margin: 35px 0;
	font-weight: 400;
`;