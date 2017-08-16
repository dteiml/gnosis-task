import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Title from '../Title';
import ControlPanel from '../ControlPanel';    
import Table from '../Table';
import FormContainer from '../../containers/FormContainer';

import Contact from '../../constants/Contact';

interface P {
	data: Contact[];
	deleteContact: (id: string) => void;
};

class App extends Component<P, any> {
	render() {
		const { data, deleteContact } = this.props;
		return (
			<Center>
				<Router>
					<Switch>
						<Route exact path='/' render={() => {
							return (
								<Div>
									<Title text='Gnosis Frontend - React/Redux Task'/>
									<ControlPanel/>
									<Table 
										data={data}
										deleteContact={deleteContact}/>
								</Div>
							)
						}}/>   
						<Route exact path='/new' component={FormContainer}/>
						<Route exact path='/edit/:id' component={FormContainer}/>
					</Switch>
				</Router>
			</Center>
		);
	};
};

export default App;

const Center = styled.div`
	display: flex;
	justify-content: center;
`;

const Div = styled.div`
	display: block;
`;