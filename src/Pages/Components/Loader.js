import React from "react"
import {motion} from "framer-motion"
export default function Loader(){
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:1}}
            transition={{duration:1,ease:"easeInOut"}}
        >
            <img src="rudraksh-loader.gif" style={{width:"10vw",margin:"40%"}}></img>
        </motion.div>
    )
}