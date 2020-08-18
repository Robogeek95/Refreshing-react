import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  ListGroup
} from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: this.props.selectedDish
    };
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      let comments = dish.comments;
      return (
        <div>
          <h4> Comments </h4>
          {comments.map((comment) => {
            return (
              <ListGroup>
                <div>
                  <p>{comment.comment}</p>
                </div>
                <div className="d-flex flex-column">
                  <p>{comment.author}</p>
                  <p>{comment.date}</p>
                </div>
              </ListGroup>
            );
          })}
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.state.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
