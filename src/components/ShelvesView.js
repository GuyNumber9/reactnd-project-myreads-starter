import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './ShelfComponent'

// This component is used to render the main page containing the 3 book shelves
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

// Defining the prop types for the component
ShelvesView.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
		thumbnail: PropTypes.string
	})
  })),
	bookMoveHandler: PropTypes.func.isRequired
}

export default ShelvesView