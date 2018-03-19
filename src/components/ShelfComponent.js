import React from 'react'
import PropTypes from 'prop-types'
import Book from './BookComponent'


// Stateless functional component use for rendering a shelf
const ShelfComponent = function (props) {
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (<Book key={book.id} book={book} bookMoveHandler={props.bookMoveHandler} />))}
      </ol>
    </div>
  </div>)
}

// Setting up the proptypes for the component
ShelfComponent.propTypes = {
	name: PropTypes.string,
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

export default ShelfComponent