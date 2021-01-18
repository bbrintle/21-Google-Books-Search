import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Container, Row, Col } from "../Grid/Grid";


// BookList renders a bootstrap list item
export function BookList({children}) {
  return (
    <div>{children}</div>
    );
}

  // RecipeListItem renders a bootstrap list item containing data from the recipe api call
  export class BookListItem extends React.Component{

    render(){
;    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={this.props.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
              <p>
                {this.props.synopsis}
              </p>
              <a
                target="_blank"
                href={this.props.link}
                rel="noopener noreferrer"
              >
                Go to book!
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
    }
  }