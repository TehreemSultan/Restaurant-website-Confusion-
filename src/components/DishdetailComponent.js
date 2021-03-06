import React, { useState } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control,LocalForm, Errors } from 'react-redux-form';




    function renderDish(dish){
       
            return(
                <Card>
                  <CardImg top src={dish.image} alt={dish.name}/>
                  <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
            );
        }
    function renderComments(comments){
        const allcomments=comments.map((comment)=>{
            return(
                    <li>
                        <p>{comment.comment}</p>
                        <p className="m-3">-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
            );
        })
        return(
            <div>
            <h4>Comments</h4>
            <ul className="list-unstyled ">
            {allcomments}
            </ul>
            </div>
            
        );
    }


    const maxLength = (len) => (val) => !(val)||(val.length<=len);
    const minLength = (len) => (val) => val&&(val.length>=len);
    
const handleSubmit =(values) => {
    console.log("current state is: "+ JSON.stringify(values));
    alert("current state is: "+ JSON.stringify(values));      
    }


    const CommentForm = (props) => {
        const {
          buttonLabel,
          className
        } = props;
      
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);
      
        return (
          <div>
            <Button outline onClick={toggle}><span className="fa fa-pencil fa-lg"></span> {buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
              <ModalBody>
              <LocalForm onSubmit={(values)=>handleSubmit(values)}>
      
                <Row className="form-group">
                  <Label md={12} htmlFor="rating">Rating</Label>
                  <Col md={12}>
                    <Control.select model=".rating" name="rating" className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
      
                {' '}
               
                <Row className="form-group">                    
                  <Label md={12} htmlfor="name" >Your Name</Label>
                  <Col md={12}>
                    <Control.text  model=".name" id="name" name="name" 
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                         minLength:minLength(3), maxLength:maxLength(15)
                      }}/>
                    <Errors className="text-danger" model=".name" show="touched"
                      messages={{
                        minLength:'Must be greater than 2 characters',
                        maxLength:'Must be 15 characters or less'
                        }}/>
                  </Col>
                </Row>
      
                {' '}
      
                <Row className="form-group">
                  <Label md={12} htmlFor="comment" >Comment</Label>
                  <Col md={12}>
                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
                  </Col> 
                </Row>                
                                      
                <Button type='submit' color="primary" onClick={toggle}>Submit</Button>                 
            </LocalForm>
               
              </ModalBody>
            
            </Modal>
          </div>
        );
      }
  
const DishDetail = (props) => {

    if(props.dish!=null){
       return(
        
        
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
              <div className="col-12 col-md-5 m-1">{renderDish(props.dish)}</div>
              <div className="col-12 col-md-5 m-1">{renderComments(props.comments)}
              <CommentForm buttonLabel="Submit Comment"/>
              </div>
       </div>
       </div>
       );
    }
    else{
        return(
            <div></div>
        );

   }
}


export default DishDetail;
