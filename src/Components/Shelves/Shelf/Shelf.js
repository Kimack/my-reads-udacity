// Core
import React, { Component } from 'react'

// 3rd party
import Ionicon from 'react-ionicons'

// Components
import Book from '../../Books/Book'

export default class Shelf extends Component {

  render() {
    const { shelfName, books, ctxFilter, onUpdateShelf, loading, shelf } = this.props

    let theseBooks = books.filter((book) => book.shelf === ctxFilter)

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { theseBooks.length === 0 ?
              <div className="no-books">
                { loading ?
                  <Ionicon icon="ion-load-c" fontSize="60px" color="#009688" rotate={ true } />
                :
                  'No books in this Shelf.'
                }
              </div>
              :
              theseBooks.map((book) => (
              <Book
                context='list'
                authors={ book.authors }
                title={ book.title }
                cover={ book.imageLinks }
                rating={ book.averageRating }
                ratingCount={ book.ratingsCount }
                pages={ book.pageCount }
                publishedDate={ book.publishedDate }
                categories={ book.categories }
                description={ book.description }
                select={ book.shelf }
                shelf={ shelf }
                id={ book.id }
                onUpdateShelf={ onUpdateShelf }
                key={ book.id } />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
