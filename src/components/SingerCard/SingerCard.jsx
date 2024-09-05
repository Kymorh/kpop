import React from 'react'
import "./SingerCard.css"
import { motion } from "framer-motion"

export const SingerCard = ({ photo, name, position }) => {
    return (

        <div className={position == "left" ? "singer1" : "singer2"}>
            <div className='info1'> <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 500, opacity: 0 }
                }}><h1>{name}</h1></motion.div>
                <motion.div className='mot' initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        visible: { left: 0, x: 0, opacity: 1 },
                        hidden: { x: 700, opacity: 0 }
                    }} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quae, quisquam alias quam harum quo commodi saepe pariatur nihil sint fugiat minima amet voluptates, inventore nesciunt, accusantium voluptas voluptate tenetur.</motion.div>
            </div >  <motion.div className='mot' initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
                variants={{
                    visible: { x: 0, opacity: 1 },
                    hidden: { x: -400, opacity: 0 }
                }}><img src={photo} alt="" /></motion.div>
        </div>


    )
}
