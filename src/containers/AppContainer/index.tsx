import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import * as ai from '../../actions'; // ai = action imports
import App from '../../components/App';

import Contact from '../../constants/Contact';

export interface P {
	contacts: Contact[];
	status: string;
	fetchData: () => void;
	deleteContact: (id: string) => void;
	sort: (field: string) => void;
	sortBy: string;
};

class AppContainer extends Component<P, null> {

	componentDidMount() {
		this.props.fetchData();
	};

	render() {

		const { status } = this.props;
		if (status === 'initial' || status === 'loading') {
				return <p>Loading…</p>;
		}

		return (
			<App {...this.props}/>
		);

	};
};

const mapStateToProps = (state: any) => {
	return {
		contacts: state.data.contacts,
		status: state.status,
		sortBy: state.data.sortBy
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: () => dispatch(ai.fetchData()),
		deleteContact: (id: string) => dispatch(ai.deleteContact(id)),
		sort: (field: string) => dispatch(ai.sort(field))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer as any);