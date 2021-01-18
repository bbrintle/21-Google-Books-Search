import React, { Component } from "react";
import axios from "axios";
import AddBookBtn from "../../components/AddBookBtn/AddBookBtn";
import { Row, Col } from "../../components/Grid/Grid";
import { BookList, BookListItem } from "../../components/BookList/BookList";
import EmptyList from "../../components/EmptyList/EmptyList";
import './Search.css'


class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchGBooks = (event) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
    axios
      .get(url)
      .then(res => {
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Row>
        <Col size="md-12">
        <div>
          <div className='searchBar'>
            <input 
              placeholder='Search Here'
              id="bookQ" 
              className="form-control form-control-lg" autoComplete="off" 
              type="text" 
              name="query" 
              onChange={this.handleInput}
              />
            <button  type="submit" onClick={this.searchGBooks} >
              Search for Books
            </button>     
          </div>
          {(this.state.books && this.state.books.length > 0) ? 
          <BookList>
          {this.state.books.map(book => {
            return (
              <div>
                <div className="bookInfo">
                  <BookListItem
                  key={book.id} 
                  authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                  title={book.volumeInfo.title}
                  synopsis={book.volumeInfo.description ? 
                    book.volumeInfo.description : "No Description Available"}
                  link={book.volumeInfo.infoLink}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                    book.volumeInfo.imageLinks.thumbnail : "#"}
                  />
                    <div className="addBtn">
                    <AddBookBtn
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                    title={book.volumeInfo.title}
                    synopsis={book.volumeInfo.description ? 
                      book.volumeInfo.description : "No Description Available"}
                    link={book.volumeInfo.infoLink}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                      book.volumeInfo.imageLinks.thumbnail : "#"}
                    />
                  </div>
                </div>
              </div>
            )
          })}
          </BookList>
          : 
          <EmptyList/>         
          }
          
        </div>
        </Col>
      </Row>
    );
  }
}

export default Search;