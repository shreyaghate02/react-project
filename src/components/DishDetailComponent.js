import React, { Component } from 'react';
// import moment from 'moment';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderComments(comments) {
        if(comments != null){
            return ( 
                <div class="container">
                <h4>Comments</h4>
                {
                // comments.map((comment) => <div><p>{comment.comment}</p><p>-- {comment.author}, {moment(comment.date).format("MMM DD, YYYY")}</p></div>)
                comments.map((comment) => <div><p>{comment.comment}</p><p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)
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
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
  
    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                        </div> 
                    </div>
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