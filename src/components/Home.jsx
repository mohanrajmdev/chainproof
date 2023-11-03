import React from 'react'
import {Footer , Navbar , Welcome ,Services ,Team} from './'

const Home = () => {
  return (
    <div>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
      </div>
      <Services />
      <Team />
      <Footer />
    </div>
  )
} 

export default Home