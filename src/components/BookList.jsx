import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Book from './Book'
import './Book.css'

import coverImg from '../assets/cover_not_found.jpeg'
import Nomatch from './Nomatch'

const BookList = () => {
  const { loading, books } = useGlobalContext()
  if (loading) {
    return <Loading />
  }

  if (books.length < 1) {
    return <Nomatch />
  }

  const booksWithCover = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    }
  })

  return (
    <section className='book-list'>
      <div className='container'>
        <div className='title'>
          <h2>Your results search</h2>
        </div>
        <div className='booklist-content'>
          {booksWithCover.map((item, index) => {
            return <Book key={index} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default BookList
