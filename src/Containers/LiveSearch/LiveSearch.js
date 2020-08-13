/* eslint-disable no-dupe-class-members */
import React from 'react'
import {connect} from 'react-redux'
import classes from './LiveSearch.module.css'
import Form from '../../Components/Form/Form'
import ListSearch from '../../Components/ListSearch/ListSearch'
import { findLi } from '../../redux/actions/mainSearch/mainSearch'

class LiveSearch extends React.Component {
	
	render() {
		return (
			<div className={classes.LiveSearch}>
				<Form onChange={(event) => this.props.searching(event.target.value, this.props.state.people)} />
				<ListSearch people={this.props.state.people} />
				
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		state: state.main,
		input: state.main.input
	}
}

function mapDispatchToProps(dispatch) {
	return{
		// changeInput: (value) => dispatch(changeInput(value)),
		searching: (value, arr) => dispatch(findLi(value,arr))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LiveSearch)