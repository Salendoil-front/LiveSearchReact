/* eslint-disable no-dupe-class-members */
import React from 'react'
import {connect} from 'react-redux'
import classes from './LiveSearch.module.css'
import Form from '../../Components/Form/Form'
import ListSearch from '../../Components/ListSearch/ListSearch'

class LiveSearch extends React.Component {
	
	render() {
		console.log(this.props.state.people)
		return (
			<div className={classes.LiveSearch}>
				<Form />
				<ListSearch people={this.props.state.people} />
				
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		state: state.main
	}
}

function mapDispatchToProps(dispatch) {
	return{
		
	}
}

export default connect(mapStateToProps)(LiveSearch)