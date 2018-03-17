import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './ShelfComponent'

import * as BooksAPI from '../BooksAPI'
/*
TODO:
	- Don't use change event
    - Use proptypes
    ...
*/
class ShelvesView extends React.Component {
  constructor(props) {
    super(props)

    this.shelves = [
      {
        id: 'currentlyReading',
        name: 'Currently Reading'
      },
      {
        id: 'wantToRead',
        name: 'Want to Read'
      },
      {
        id: 'read',
        name: 'Read'
      }
    ]
  }

  render() {
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {this.shelves.map((shelf) => (<Shelf key={shelf.id} name={shelf.name} books={this.props.books.filter((book) => book.shelf === shelf.id)} bookMoveHandler={this.props.bookMoveHandler} />))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>)
  }
}

export default ShelvesView