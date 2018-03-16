import React from 'react'

export default function(props){
  return (<li><div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.image})` }}></div>
                    <div className="book-shelf-changer">
                      <select onChange={(ev) => { console.log("Changed!", ev.target, ev.target.value); props.bookMoveHandler(props.book, ev.target.value); } }>
                        <option value="none" disabled>Move to...</option>
                        { props.shelves.map((shelf, index) => <option key={index} value={shelf.name}>{shelf.name}</option>) }
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{ props.book.title }</div>
                  <div className="book-authors">{ props.book.author }</div>
                </div></li>)
}