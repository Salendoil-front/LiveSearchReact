import React from 'react';
import './App.css';
import Layout from './hoc/Layout';
import {Route, Switch} from 'react-router-dom'
import LiveSearch from './Containers/LiveSearch/LiveSearch';

function App() {
  return (
    <div className="App">
      <Layout>
			<Switch>
				<Route path="/" component={LiveSearch} />
			</Switch>
		</Layout>
    </div>
  );
}

export default App;
