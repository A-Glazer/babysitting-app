import React from 'react';
import "./styles.css"
// import {connect} from 'react-redux'
import BabysittersContainer from './containers/BabysittersContainer'
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'


class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <Navbar /> */}
        <Switch>

          <Route path='/babysitters' component={BabysittersContainer}/>
          <Route path='/' component={Home} />
        </Switch>
    </div>
  );
}
}


export default App
// export default connect()(App);
// we don't need to get anything from the store, so we don't need 
// mapStateToProps. However, we want to update the store so we need
// mapDispatchToProps
