import React from 'react'

const ResumeContact = () => {
  return (
    <section id='contact-section'>
    <h2>CONTACT</h2>
    {/* <!--contact information including social media--> */}
    <p>
      <i class="fab fa-envelope" aria-hidden="true"></i>
      <a href="mailto:your-email@example.com">your-email</a>
    </p>
    <p>
      <i class="fab fa-github" aria-hidden="true"></i>
      <a href="github.com/github-username">github username</a>
    </p>
    <p>
      <i class="fab fa-linkedin" aria-hidden="true"></i>
      <a href="linkedin.com/linkedin-id">linkedin id</a>
    </p>
  </section>
  )
}

export default ResumeContact