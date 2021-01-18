import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid/Grid";
import { BookList, BookListItem } from "../../components/BookList/BookList";
import axios from "axios";
import EmptyList from '../../components/EmptyList/EmptyList';
import RemoveBookBtn from '../../components/RemoveBookBtn/RemoveBookBtn';
import { toast } from 'react-toastify';
import './Saved.css'


class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
      .then( () => {
        toast.error('Book Deleted');
        this.getBooks();
        
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <BookList>
                {this.state.savedBooks.map(book => {
                  return (
                    <div>
                      <div className='bookInfo'>
                        <BookListItem
                          key={book._id}
                          authors={book.authors}
                          title={book.title}
                          synopsis={book.synopsis}
                          link={book.link}
                          thumbnail={book.thumbnail}
                        />
                        <div className='removeBtn'>
                          <RemoveBookBtn
                            onClick={() => this.deleteFromDB(book._id)}
                          />
                        </div>
                      </div>
                      
                    </div>
                  )

                })}
              </BookList>
              :
              <EmptyList />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;