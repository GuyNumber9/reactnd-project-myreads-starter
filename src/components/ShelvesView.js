import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './ShelfComponent'

import * as BooksAPI from './BooksAPI'
/*
TODO:
	- Don't use change event
    - Use proptypes
    ...
*/
class ShelvesView extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      books: []
    }
    
    this.bookMoveHandler = (book, shelf) => {
      let books = this.state.books.concat([])
      books[this.state.books.indexOf(book)].shelf = shelf
      this.setState({books})
    }
    this.bookMoveHandler = this.bookMoveHandler.bind(this)
    
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((data) => { console.log('getAll()', data); this.setState({books: data}) )
  }
  
   render() {
     return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
            { this.state.shelves.map((shelf, index) => (<Shelf key={index} name={shelf.name} books={this.state.books.filter((book) => book.shelf === shelf.id)} />)) } 
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>)
   }
}

export default ShelvesView