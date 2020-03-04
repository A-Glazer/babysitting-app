import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import BabysitterShow from '../components/BabysitterShow'
import Spinner from 'react-bootstrap/Spinner'
// import { fetchBabysitters } from '../actions/fetchBabysitters'
// import SlotInput from '../components/SlotInput'



class BabysittersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    handleLoading = () => {
        if (this.props.loading) {
            return (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>)
        } else {
            return (
                <div>
                    {/* {console.log("this.props", this.props)} */}
                    <Switch>
                        <Route path='/babysitters/new' component={BabysitterInput} />
                        <Route path='/babysitters/:id' render={(routerProps) =>
                            <BabysitterShow {...routerProps} babysitters={this.props.babysitters} />} />
                        <Route path='/babysitters' render={(routerProps) =>
                            <Babysitters {...routerProps} babysitters={this.props.babysitters} />} />
                    </Switch>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
                {/* <Switch>
                    <Route path='/babysitters/new' component={BabysitterInput} />

                    <Route path='/babysitters/:id' render={(routerProps) =>
                        <BabysitterShow {...routerProps} babysitters={this.props.babysitter} />} />
                    <Route path='/babysitters' render={(routerProps) =>
                        <Babysitters {...routerProps} babysitters={this.props.babysitters} />} />

                </Switch> */}
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


export default connect(mapStateToProps)(BabysittersContainer)