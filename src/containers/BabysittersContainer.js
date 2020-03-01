import React from 'react'
import BabysitterInput from '../components/BabysitterInput'
import Babysitters from '../components/Babysitters'
import { fetchBabysitters } from '../actions/fetchBabysitters'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import BabysitterShow from '../components/BabysitterShow'
import SlotInput from '../components/SlotInput'
import Spinner from 'react-bootstrap/Spinner'



class BabysittersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBabysitters()
    }


    handleLoading = () => {
        if (this.props.loading) {
            return (<div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>)
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
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

const mapStateToProps = state => {
    return {
        babysitters: state.babysitters,
        loading: state.loading
    }
}


export default connect(mapStateToProps, { fetchBabysitters })(BabysittersContainer)