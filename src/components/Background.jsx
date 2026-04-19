import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-2 w-full h-screen'>
      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-400 font-semibold text-xl' >Documents</div>
      <h1 className=' absolute text-[15vw] leading-none top-1/2 left-1/2 font-semibold -translate-x-[50%] -translate-y-[50%] tracking-tighter text-zinc-950 '>Docs.</h1>
    </div>
  )
}

export default Background