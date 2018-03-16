import React from 'react'
import Book from './BookComponent'

export default function(props){
  return (<div className="bookshelf">
          <h2 className="bookshelf-title">{ props.name }</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
          { props.books.map((book, index) => (<Book key={index} book={book} shelves={props.shelves} bookMoveHandler={props.bookMoveHandler} />)) }
            </ol>
          </div>
        </div>)
}