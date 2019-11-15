import React from 'react';
// import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
   
    function RenderComments({comments}) {
        // if(comments != null){
            return ( 
                <div className="container">
                <h4>Comments</h4>
                {
                // comments.map((comment) => <div><p>{comment.comment}</p><p>-- {comment.author}, {moment(comment.date).format("MMM DD, YYYY")}</p></div>)
                comments.map((comment) => <div><p>{comment.comment}</p><p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div>)
                }
              </div>
            );
        }
        // else {
        //     return (
        //         <div></div>
        //     );
        // }
    

    function RenderDish({dish}) {
        // if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        // else
        //     return(
        //         <div></div>
        //     );
    }

    const  DishDetail = (props) => {
        
        // console.log('Dishdetail Component render invoked');
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
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


export default DishDetail;