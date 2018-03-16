import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ShelvesView from './components/ShelvesView'
import SearchView from './components/SearchView'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

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
