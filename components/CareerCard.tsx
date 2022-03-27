import { FC } from 'react'
import { motion } from 'framer-motion'
import careerCardProps from '../typings/careerCardProps'
import Link from 'next/link'

const CareerCard: FC<careerCardProps> = (props) => {
  return (
    <motion.p
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        delay: props.delay,
        stiffness: 320,
        damping: 100,
        mass: 1.8
      }}
    >
      - {props.before && <>&nbsp;전(前)</>}&nbsp;
      <Link href={props.href}>
        <a target="_blank" className="text-sky-500 hover:text-sky-600">
          {props.name}&nbsp;
        </a>
      </Link>
      {props.role}
    </motion.p>
  )
}

export default CareerCard
