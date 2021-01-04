import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody} from 'reactstrap';




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
const DishDetail = (props) => {

    if(props.selectedDish!=null){
       return(
           <div className="container">
       <div className="row">
              <div className="col-12 col-md-5 m-1">{renderDish(props.selectedDish)}</div>
              <div className="col-12 col-md-5 m-1">{renderComments(props.selectedDish.comments)}</div>
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
