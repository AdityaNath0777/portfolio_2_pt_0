import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks'
import { Bio } from '../../constants'

const Footer = () => {
  return (
    <footer className='text-center mt-8 pb-4 w-full h-30 text-white grid place-items-center'>
      
      <div className="mt-10 px-6 footer-social-links">
        <SocialLinks prop={Bio} />
      </div>
      <p className='mt-4'>&copy; Aditya Mishra | My Portfolio</p>
    </footer>
  )
}

export default Footer