import React from 'react'
import PropTypes from 'prop-types'

let BookComponent = function (props) {
  return (<li><div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})` }}></div>
      <div className="book-shelf-changer">
        <select value={props.book.shelf} onChange={(ev) => { console.log("Changed!", ev.target, ev.target.value.trim); props.bookMoveHandler(props.book, ev.target.value); }}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors && props.book.authors.join(', ')}</div>
  </div></li>)
}

BookComponent.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    imageLinks: PropTypes.arrayOf(PropTypes.string)
  })
}

export default BookComponent