import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import skillCardProps from '../typings/skillCardProps'

const SkillCard: FC<skillCardProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const checkHovered = () => {
    setIsHovered(!isHovered)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: 0.1,
        duration: 1
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 }
      }}
      className="flex items-center justify-center border border-white hover:border-slate-200 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 m-2 md:m-4 hover:bg-slate-200 shadow-lg"
      onMouseEnter={checkHovered}
      onMouseLeave={checkHovered}
    >
      <div className={isHovered ? 'absolute font-inter_bold text-slate-700 text-xs' : 'hidden'}>
        {props.name}
      </div>
      <img
        src={`/img/${props.href}`}
        className={isHovered ? 'p-2 sm:p-4 md:p-8 opacity-50' : 'p-2 sm:p-4 md:p-8'}
      />
    </motion.div>
  )
}

export default SkillCard