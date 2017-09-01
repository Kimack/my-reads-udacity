// Core
import React, { Component } from 'react'

// 3rd party
import Rater from 'react-rater'
import Ionicon from 'react-ionicons'

// 3rd party Stylesheets
import 'react-rater/lib/react-rater.css'

export default class Book extends Component {

  state = {
    details: false
  }

  expandDetail = () => {
    this.setState({ details: true })
  }

  collapseDetails = () => {
    this.setState({ details: false })
  }

  render() {
    const { context, authors, title, cover, rating, ratingCount, pages, shelf, publishedDate, categories, description, select, id, onUpdateShelf } = this.props
    const { details } = this.state

    let toShelf

    if (context === 'search') {
      shelf.forEach((b) => {
        if (b.id === id && b.shelf !== undefined) {
          toShelf = b.shelf
        }
      })
    } else {
      toShelf = select
    }
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">

              <span className="book-magnifier" onClick={ this.expandDetail }>
                <Ionicon icon="ion-android-search" fontSize="46px" color="#ffffff" />
              </span>

              { cover !== undefined ?
                <img src={ cover.thumbnail }
                     alt={ title + ' cover' } />
                :
                <img src='https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'
                     alt={ title + ' cover' } />
              }

            </div>

            <div className="book-shelf-changer">
              <select defaultValue={ toShelf !== undefined ? toShelf : 'none' } onChange={ (e) => onUpdateShelf(id, e.target.value) } >
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>

          </div>

          { title !== undefined && (
            <div className="book-title">
              { title }
              { toShelf !== undefined && context === 'search' && (
                <span className='book-checkmark'>
                  <Ionicon icon="ion-android-checkmark-circle" fontSize="28px" color="#8bc34a" />
                </span>
              )}
            </div>
          )}

          { authors !== undefined &&
            authors.map((athor) => (
            <div key={ athor } className="book-authors">{ athor }</div>
          ))}

          <div className="book-rating">

            { rating !== undefined ?
              <Rater interactive={ false } total={ 5 } rating={ rating } />
              :
              <Rater interactive={ false } total={ 5 } rating={ 0 } />
            }

            { ratingCount !== undefined ?
              ` (${ ratingCount })`
              :
              ` (${ 0 })`
            }

          </div>

          <div className={ "book-details" + (details ? " expanded" : "") }>

            <span className="details-collapse" onClick={ this.collapseDetails }>&times;</span>

            <div className="details-title">{ title }</div>

            { authors !== undefined && (
              <div className="details-authors">
                { authors.map((author) => (
                  <div key={ author } className="author">
                    { author }
                  </div>
                ))}
              </div>
            )}

            <div className="details-rating">

              { rating !== undefined ?
                <Rater interactive={ false } total={ 5 } rating={ rating } />
                :
                <Rater interactive={ false } total={ 5 } rating={ 0 } />
              }

              { ratingCount !== undefined ?
                ` (${ ratingCount })`
                :
                ` (${ 0 })`
              }

            </div>

            { publishedDate !== undefined && (
              <div className='details-date'>
                <strong>Date:</strong> { publishedDate.replace(/-/g,'/') }
              </div>
            )}

            { pages !== undefined && (
              <div className='details-length'>
                <strong>Pages:</strong> { pages }
              </div>
            )}

            { categories !== undefined && (
              <div className='details-categories'>
                <strong>Category:</strong> { categories }
              </div>
            )}

            { description !== undefined && (
              <div className='details-description'>
                { description }
              </div>
            )}

          </div>
        </div>
      </li>
    )
  }
}
