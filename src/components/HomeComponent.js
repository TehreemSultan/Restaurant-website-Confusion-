import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardText>{item.name}</CardText>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardTitle>{item.description}</CardTitle>
            </CardBody>
        </Card>
    );

}

function Home(props){
    return(
        <div className="container">
            <h4>
            <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
            </h4>
        </div>
    );
}

export default Home;