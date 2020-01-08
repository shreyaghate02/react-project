import React, { Component } from 'react';
// import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  toggleModal() {
    this.setState({
      isModalOpen: !(this.state.isModalOpen)
    });
  };

  handleSubmit = (values) => {
    alert("Current State is: " + JSON.stringify(values));
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    return (
      <div className="ml-0">
        <Button outline onClick={ this.toggleModal }>
          <span className="fa fa-pencil"> Submit Comment</span>
        </Button>

        <Modal isOpen={ this.state.isModalOpen } toggle={ this.toggleModal }>
          <ModalHeader toggle={ this.toggleModal }> Submit Comment </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={ (values) => this.handleSubmit(values) }>
              <Row className="form-group">
                <Label htmlFor="ratings" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".ratings" name="ratings" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="name" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".name" id="name" name="name"
                    className="form-control" placeholder="Your Name" validators={{
                      required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors className="text-danger" model=".name"
                      show="touched" messages={{
                        required: 'Required',
                        minLength: ' Must be greater than 2 characters',
                        maxLength: ' Must be 15 characters or less'
                      }}
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6" className="form-control" />
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">Submit</Button>
                </Col>
              </Row >
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

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
                        <CommentForm />
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