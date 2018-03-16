import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShelvesView from './components/ShelvesView'
import SearchView from './components/SearchView'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
        <BrowserRouter>
          <div className="app">
          <Route exact path='/' component={ShelvesView} />
          <Route path='/search' component={SearchView} />
          </div>
        </BrowserRouter>
      
    )
  }
}

export default BooksApp
