import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const ProjectCard = (props) => {
  return (
    // <CardGroup>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src={props.image} alt={props.id} />
    //     <Card.Body>
    //       <Card.Title>{props.title}</Card.Title>
    //       <Card.Text>{props.description}</Card.Text>
    //       <Card.Text>Languages: {props.languages}</Card.Text>
    //       <Button href={props.repo} variant="primary">Repo</Button>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>
    <CardGroup>
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.languages}</Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button href={props.repo} variant="primary">Repo</Button>
      </Card.Footer>
    </Card>
  </CardGroup>
  );
};

export default ProjectCard;
