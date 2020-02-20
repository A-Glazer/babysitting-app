import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import {fetchBabysitters} from '../actions/fetchBabysitters'
import { connect } from 'react-redux'

class BabysittersContainer extends React.Component {
    
    componentDidMount() {
       this.props.fetchBabysitters()
    }

    render() {
        return(
            <div>
                <BabysitterInput /><br/><br/>
                <Babysitters babysitters={this.props.babysitters} />
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