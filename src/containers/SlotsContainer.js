import React from 'react'
import SlotInput from '../components/SlotInput'
import Slots from '../components/Slots'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'

class SlotsContainer extends React.Component {

    render() {
        if (this.props.loading) {
            console.log("loading is true")
            return (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>)
        } else {
            console.log("loading is false")
            return (
                <div>
                    <SlotInput babysitter={this.props.babysitter} />
                    <Slots
                        babysitter={this.props.babysitter}
                        deleteSlot={this.props.babysitter.id}
                        babysitterId={this.props.babysitter.id}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SlotsContainer)

