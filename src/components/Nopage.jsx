import React from 'react'

const Nopage = () => {
  return (
    <div className=' min-h-screen gradient-bg-nopage flex flex-col justify-center items-center'>
        <div className='mf:text-8xl text-4xl text-white'>404 </div>
        <div className=' p-4 mf:text-5xl text-2xl text-white'>Page Not Found</div>
        <div  className=' p-4 mf:text-1xl text-lg text-white'>The resource requested could not be found on this server!</div>
    </div>
  )
}

export default Nopage;