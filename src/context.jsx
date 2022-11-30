import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext, useCallback } from 'react'
const AppContext = React.createContext()

const url = 'http://openlibrary.org/search.json?title='

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('the lost world')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBooks = useCallback(async () => {
    setLoading(true)

    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { docs } = data
      if (docs) {
        const newBooks = docs.map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          }
        })
        setBooks(newBooks)
      } else {
        setBooks([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  })

  useEffect(() => {
    fetchBooks()
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ searchTerm, loading, books, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
