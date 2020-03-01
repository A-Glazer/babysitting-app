import React from 'react';
import "./styles.css"
import {connect} from 'react-redux'
import BabysittersContainer from './containers/BabysittersContainer'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { fetchBabysitters } from './actions/fetchBabysitters'


class App extends React.Component {

  componentWillMount() {
    this.props.fetchBabysitters()
}

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>

          <Route path='/babysitters' component={BabysittersContainer} />
          <Route path='/' component={Home} />
          

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      babysitters: state.babysitters,
      loading: state.loading
  }
}


export default connect(mapStateToProps, { fetchBabysitters })(App)

// export default connect()(App);
// we don't need to get anything from the store, so we don't need 
// mapStateToProps. However, we want to update the store so we need
// mapDispatchToProps
