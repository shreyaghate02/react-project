import React from 'react';
// import moment from 'moment';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

   
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
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
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