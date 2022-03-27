import { FC } from 'react'
import { motion } from 'framer-motion'
import titleProps from '../typings/titleProps'

const Title: FC<titleProps> = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        delay: 0.2,
        duration: 1
      }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -60 }
      }}
      className="pl-8 sm:pl-10 md:pl-20 2xl:pl-40 font-inter_bold text-4xl"
    >
      {props.name}
    </motion.div>
  )
}

export default Title
