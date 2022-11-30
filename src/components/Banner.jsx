import React, { useRef, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useGlobalContext } from '../context'

const Banner = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchText = useRef()

  useEffect(() => searchText.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault()

    let tempSearchTerm = searchText.current.value.trim()
    if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
      setSearchTerm('the lost world')
    } else {
      setSearchTerm(searchText.current.value)
    }
  }

  return (
    <div className='banner'>
      <div className='form'>
        <div className='title'>
          <h2>Find your book of choice</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eligendi accusantium suscipit explicabo odit id. Voluptatem sunt
            sequi explicabo hic velit dolorem ad magnam illo non quibusdam
            itaque quos, doloribus ipsam atque dolorum voluptates tenetur aut.
            Reiciendis ex hic corporis.
          </p>
        </div>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='The lost world' ref={searchText} />
            <AiOutlineSearch onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Banner
