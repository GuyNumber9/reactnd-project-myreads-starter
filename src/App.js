import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShelvesView from './components/ShelvesView'
import SearchView from './components/SearchView'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: []
    }

    this.bookMoveCallbackHandler = (data, book, shelf) => {
      console.log('Book updated', data)
      let books = this.state.books.concat([])
      if(book.shelf){
        for(let index = 0; index < books.length; ++index){
          if(books[index].id === book.id){
            books[index].shelf = shelf;
            break;
          }
        }
      }
      else {
        book.shelf = shelf
        books.push(book);
      }
      this.setState({books})
    }

    this.bookMoveCallbackHandler = this.bookMoveCallbackHandler.bind(this)


    this.bookMoveHandler = (book, shelf) => {
      BooksAPI.update(book, shelf).then((data) => {
        this.bookMoveCallbackHandler(data, book, shelf)
      })
      
    }

    this.bookMoveHandler = this.bookMoveHandler.bind(this)

  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      console.log('getAll()', data)
      this.setState({
        books: data
      }) 
    } )
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
