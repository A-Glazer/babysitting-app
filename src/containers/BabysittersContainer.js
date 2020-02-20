import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import {fetchBabysitters} from '../actions/fetchBabysitters'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'

class BabysittersContainer extends React.Component {
    
    componentDidMount() {
       this.props.fetchBabysitters()
    }

    render() {
        return(
            <div>
                <Route path='/babysitters/new' component={BabysitterInput}/>
                <Route path='/babysitters' render={() => <Babysitters babysitters={this.props.babysitters} /> } />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters
    }
} 


export default connect(mapStateToProps, {fetchBabysitters})(BabysittersContainer)