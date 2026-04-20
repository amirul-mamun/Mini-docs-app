import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { motion, scale } from "motion/react"


const Card = ({data, refrence}) => {
  return (

      <motion.div
       drag dragConstraints={refrence}
       dragElastic={.2} 
       dragTransition={{bounceStiffness : 100, bounceDamping : 100}}
       whileDrag={{scale : 1.2}}
       className='h-65 w-53 relative mix-blend-hue rounded-[20%] bg-zinc-900 text-white py-10 px-8 overflow-hidden' >
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        
        <div className="footer absolute bottom-0   w-full  left-0 ">
             <div className="flex items-center justify-between px-8 py-3  mb-3">
                 <h5>{data.filesize}</h5>
                 <span className='h-7 w-7 flex items-center justify-center bg-zinc-600 rounded-full'>
                  {data.close ? <MdClose/> :<LuDownload size=".8em" color='#fff'/>}
                 </span>              
            </div>

            {data.tag.isOpen && (
            <div className={`tag w-full py-4 flex justify-center items-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} `} >
              <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
            </div>
            ) }
        </div>

      </motion.div>

  )
}

export default Card