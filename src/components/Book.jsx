import React from 'react'
import { Link } from 'react-router-dom'

const Book = (item) => {
  const { cover_img, id, title, author, edition, first_publish_year } = item
  return (
    <div className='book'>
      <div className='cover'>
        <img src={cover_img} alt='cover' />
      </div>

      <div className='infos'>
        <Link to={`book/${id}`} {...item}>
          <div className='book-info'>
            <p className='title'>{title}</p>
          </div>
        </Link>
        <p>
          <span>Author: </span>
          {author && author.join(',')}
        </p>

        <p>
          <span>Total Editions: </span>
          {edition}
        </p>

        <p>
          <strong>First publish year: </strong>
          {first_publish_year}
        </p>
      </div>
    </div>
  )
}

export default Book
