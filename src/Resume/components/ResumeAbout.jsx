import React from 'react'
import { Bio } from '../../constants'

const ResumeAbout = () => {
  return (
    <section id="about-section">
    <h2>ABOUT</h2>
    <p className='text-justify text-sm'>
      {Bio.description}
    </p>
  </section>
  )
}

export default ResumeAbout