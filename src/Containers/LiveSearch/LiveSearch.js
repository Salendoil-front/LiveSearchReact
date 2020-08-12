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
				<ListSearch state={this.props.state} />
				lol
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		state: state.main
	}
}

export default connect(mapStateToProps)(LiveSearch)