import React, { Component } from 'react';
import moment from 'moment';

class DishDetail extends Component {
    renderComments(comments) {
        if(comments != null){
            return ( 
                <div>
                <h4>Comments</h4>
                {
                comments.map((comment) => <div><p>{comment.comment}</p><p>-- {comment.author}, {moment(comment.date).format("MMM DD, YYYY")}</p></div>)
                }
              </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
    
                {this.renderComments(this.props.comments)}
    
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;