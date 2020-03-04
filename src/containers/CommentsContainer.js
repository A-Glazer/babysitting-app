// import React from 'react'
// import CommentInput from '../components/CommentInput'
// import Comments from '../components/Comments'
// import Spinner from 'react-bootstrap/Spinner'
// import { connect } from 'react-redux'

// class CommentsContainer extends React.Component {

//     render() {
//         if (this.props.loading) {
//             console.log("loading is true")
//             // debugger
//             return (
//                 <div>
//                     <Spinner animation="border" role="status">
//                         <span className="sr-only">Loading...</span>
//                     </Spinner>
//                 </div>)
//         } else {
//             return (
//                 <div>
//                     <CommentInput babysitter={this.props.babysitter} />
//                     <Comments comments={this.props.babysitter && this.props.babysitter.comments} />
//                 </div>
//             )
//         }





//     }
// }

// const mapStateToProps = state => {
//     return {
//         babysitters: state.babysitters,
//         loading: state.loading
//     }

// }
//     export default connect(mapStateToProps)(CommentsContainer)