import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import coverImg from '../assets/cover_not_found.jpeg'
import './BookDetails.css'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const url = 'https://openlibrary.org/works/'

const BookDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState(null)

  useEffect(() => {
    setLoading(true)
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${url}${id}.json`)
        const data = await response.json()

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data
          const newBook = {
            description: description
              ? description.value
              : 'No description found',
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(',')
              : 'No subject places found',
            subject_times: subject_times
              ? subject_times.join(', ')
              : 'No subject times found',
            subjects: subjects ? subjects.join(', ') : 'No subjects found',
          }
          setBook(newBook)
        } else {
          setBook(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getBookDetails()
    setLoading(false)
  }, [id])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='book-detail'>
      <Link to='/' className='button'>
        <FaArrowLeft />
        <span>Go Back</span>
      </Link>

      <div className='detail'>
        <div className='left'>
          <div className='image'>
            <img src={book?.cover_img} alt='cover' />
          </div>
        </div>
        <div className='right'>
          <h3>{book?.title}</h3>
          <p className='description'>{book?.description}</p>
          <p>
            <span>Subject Places: </span>
            {book?.subject_places}
          </p>
          <p>
            <span>Subject Times: </span>
            {book?.subject_times}
          </p>
          <p>
            <span>Subjects: </span>
            {book?.subjects}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
