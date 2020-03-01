import React from 'react'
import SlotInput from '../components/SlotInput'
import Slots from '../components/Slots'
import Spinner from 'react-bootstrap/Spinner'
import { fetchBabysitters } from '../actions/fetchBabysitters'
import { connect } from 'react-redux'
import { render } from 'react-dom'

class SlotsContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBabysitters()
    }


    handleLoading = () => {
        if (this.props.fetchBabysitters.loading !== false) {
            return (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>)
        } else {
            return (
                <div>
                    <SlotInput babysitter={this.props.babysitters} />
                    <Slots babysitter={this.props.babysitter} />
                </div>
            )
        }
    }

    render() {
        { this.handleLoading() }
        console.log("slots on slot container", this.props.babysitter)
        return (
            <div>
                <SlotInput babysitter={this.props.babysitters} />
                <Slots babysitter={this.props.babysitter} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { fetchBabysitters })(SlotsContainer)

