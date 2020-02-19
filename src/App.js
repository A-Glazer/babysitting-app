import React from 'react';
import {connect} from 'react-redux'
import {fetchBabysitters} from './actions/fetchBabysitters'


class App extends React.Component {

  componentDidMount() {
   
  }

  render() {

    return (
      <div className="App">
      App
    </div>
  );
}
}



export default connect(null, {fetchBabysitters})(App);
// we don't need to get anything from the store, so we don't need 
// mapStateToProps. However, we want to update the store so we need
// mapDispatchToProps
