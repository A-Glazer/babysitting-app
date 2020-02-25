import React from 'react';
import "./styles.css"
// import {connect} from 'react-redux'
import BabysittersContainer from './containers/BabysittersContainer'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <Home /> */}
        Welcome to the Babysitter App!
        <BabysittersContainer />
    </div>
  );
}
}


export default App
// export default connect()(App);
// we don't need to get anything from the store, so we don't need 
// mapStateToProps. However, we want to update the store so we need
// mapDispatchToProps
