import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShelvesView from './components/ShelvesView'
import SearchView from './components/SearchView'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    // This function is called after the server is done updating the book's shelf
    this.bookMoveCallbackHandler = (data, book, shelf) => {
	  // Create a copy of the books
      let books = this.state.books.concat([])
      // First, we handle the case where a book's shelf is updated to anything but 'none'
      if (book.shelf !== 'none' && shelf !== 'none') {
        for (let index = 0; index < books.length; ++index) {
          if (books[index].id === book.id) {
            books[index].shelf = shelf;
            break;
          }
        }
      }
      // Next, we handle the case where a book is removed from a shelf
      else if(shelf === 'none'){
        for (let index = 0; index < books.length; ++index) {
          if (books[index].id === book.id) {
            books.splice(index, 1);
            break;
          }
        }
      }
      // Finally, we handle the case where a book is added to a shelf
      else {
        book.shelf = shelf
        books.push(book);
      }
      this.setState({ books })
    }

    // We bind the callback handler to maintain the scope
    this.bookMoveCallbackHandler = this.bookMoveCallbackHandler.bind(this)


    // This handler is called when the shelf <select> input for a book is changed
    this.bookMoveHandler = (book, shelf) => {
      // We call the BooksAPI to update the shelf
      BooksAPI.update(book, shelf).then((data) => {
        // Then, we handle the change locally
        this.bookMoveCallbackHandler(data, book, shelf)
      })

    }

    // We also bind to preserve the scope
    this.bookMoveHandler = this.bookMoveHandler.bind(this)

  }

  componentDidMount() {
    // When the component mounts, we fetch the book and shelf data
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/' render={(props) => {
            return <ShelvesView {...props} books={this.state.books} bookMoveHandler={this.bookMoveHandler} />
          }} />
          <Route path='/search' render={(props) => {
            return <SearchView {...props} bookMoveHandler={this.bookMoveHandler} books={this.state.books} />
          }} />
        </div>
      </BrowserRouter>

    )
  }
}

export default BooksApp