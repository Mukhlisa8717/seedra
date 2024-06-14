import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutPosts from '../../components/aboutPosts/AboutPosts'
import Users from '../../components/users/Users'

const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <AboutPosts />
        <Users />
    </main>
  )
}

export default Home
