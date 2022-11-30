import React from 'react'
import imgAbout from '../assets/about.jpeg'

const About = () => {
  return (
    <section className='about'>
      <div className='title'>
        <h2>About</h2>
      </div>
      <div className='container'>
        <div className='image'>
          <img src={imgAbout} alt='about-image' />
        </div>
        <div className='text'>
          <h3>About BookLib</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            temporibus facilis beatae eaque iure neque deserunt cum. Ullam
            veniam placeat doloremque neque, fugiat accusantium repudiandae
            ratione aliquam optio eius facere voluptatum itaque dolore rerum
            quisquam commodi ea consequatur ad porro? Vel, iste incidunt
            voluptatibus architecto quibusdam quidem numquam minima aut.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            quaerat vel repellat excepturi. Quibusdam amet debitis dolor.
            Obcaecati dolorem iusto atque aliquam fuga nulla dolor, cupiditate
            assumenda facilis nam unde.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
