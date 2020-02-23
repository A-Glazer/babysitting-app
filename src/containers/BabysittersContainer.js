import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import {fetchBabysitters} from '../actions/fetchBabysitters'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import BabysitterShow from '../components/BabysitterShow'


class BabysittersContainer extends React.Component {
    
    componentDidMount() {
       this.props.fetchBabysitters()
    }

    render() {
        return(
            <div>
                <Route path='/babysitters/new' component={BabysitterInput}/>
                <Route path='/babysitters/:id' render={(routerProps) => 
                    <BabysitterShow 
                        {...routerProps} 
                        babysitters={this.props.babysitters} 
                    /> }   />
                <Route exact path='/babysitters' 
                    render={(routerProps) => 
                        <Babysitters 
                            {...routerProps} 
                            babysitters={this.props.babysitters} /> } />
                
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