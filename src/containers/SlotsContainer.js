import React from 'react'
import SlotInput from '../components/SlotInput'
import Slots from '../components/Slots'

class SlotsContainer extends React.Component {

    render() {
        // console.log(this.props.babysitter.slots)
        return(
            <div>
                <SlotInput babysitter={this.props.babysitter}/>
                <Slots slots={this.props.babysitter && this.props.babysitter.slots}/>
            </div>
        )
    }

}

export default SlotsContainer