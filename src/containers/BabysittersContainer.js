import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import { connect } from 'react-redux'

class BabysittersContainer extends React.Component {
    
    render() {
        return(
            <div>
                <BabysitterInput />
                <Babysitters />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters
    }
} 


export default connect(mapStateToProps)(BabysittersContainer)