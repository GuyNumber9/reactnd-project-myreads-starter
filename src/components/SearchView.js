import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './BookComponent'

// This component is used for rendering the search page
// It is passed the current books in order to update the search results with current book state
class SearchView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }

    this.searchCallback = (books) => {
      console.log('found ', books);
      if (books.error) {
        this.setState({ books: [] })
        return;
      }

      for (let searchBook of books) {
        for (let listBook of this.props.books) {
          if (searchBook.id === listBook.id) {
            searchBook.shelf = listBook.shelf
            break
          }
          searchBook.shelf = 'none'
        }
      }
      this.setState({
        books
      })
    }

    this.searchCallback = this.searchCallback.bind(this)

    this.changeHandler = (ev) => {
      let query = ev.target.value.trim()
      console.log(query)
      BooksAPI.search(query).then(this.searchCallback)
    }

    this.changeHandler.bind(this)
  }



  render() {
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
          <input type="text" placeholder="Search by title or author" onChange={this.changeHandler} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map((book) => (<Book key={book.id} book={book} bookMoveHandler={this.props.bookMoveHandler} />))}
        </ol>
      </div>
    </div>)
  }
}

// Defining the prop types for the SearchView component
SearchView.propTypes = {
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
                                           
export default SearchView