import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize : ".9mb",
      close: true,
      tag : { isOpen : true, tagTitle: "Download Now", tagColor: 'green'},
    },
    {
      desc : "Lorem ipsum dolor sit amet amriul adipisicing.",
      filesize : ".9mb",
      close: false,
      tag : { isOpen : true, tagTitle: "Download Now", tagColor: 'green'},
    },
    {
      desc : "Lorem bangladesh dolor sit amet consectetur pricien.",
      filesize : ".9mb",
      close: true,
      tag : { isOpen : true, tagTitle: "Upload", tagColor: 'blue'},
    },
    {
      desc : "Lorem ipsum dolor sit amet amriul adipisicing.",
      filesize : ".9mb",
      close: false,
      tag : { isOpen : true, tagTitle: "Upload", tagColor: 'blue'},
    },
    {
      desc : "Lorem bangladesh dolor sit amet consectetur pricien.",
      filesize : ".9mb",
      close: true,
      tag : { isOpen : false, tagTitle: "Upload", tagColor: 'blue'},
    },
  ]
  return (
    <div>
       <div ref={ref} className='fixed z-3 left-0 p-5 top-0 w-full h-full flex gap-10 flex-wrap'>
        {data.map((item, index) =>(
        <Card data ={item} refrence = {ref} />
        ))}
       </div>
    </div>
  )
}

export default Foreground