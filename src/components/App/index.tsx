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
	contacts: Contact[];
	deleteContact: (id: string) => void;
	sort: (field: string) => void;
	sortBy: string;
};

class App extends Component<P, any> {
	render() {
		const { contacts, deleteContact, sort, sortBy } = this.props;
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
										contacts={contacts}
										deleteContact={deleteContact}
										sort={sort}
										sortBy={sortBy}/>
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