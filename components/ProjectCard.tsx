import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import projectCardProps from '../typings/projectCardProps'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard: FC<projectCardProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const checkHovered = () => {
    setIsHovered(!isHovered)
  }

  return (
    <Link href={props.href}>
      <a target="_blank">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{
            delay: 0.1,
            duration: 1
          }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 80 }
          }}
          className={`flex justify-center items-center relative w-80 text-${props.color} h-48 md:mb-20 md:h-24`}
          onMouseEnter={checkHovered}
          onMouseLeave={checkHovered}
        >
          <div className="flex flex-col items-center p-4 space-y-1">
            <div
              className={
                isHovered
                  ? `text-2xl font-bold z-10 text-${props.color}`
                  : `text-2xl font-bold z-10 ${
                      props.color === 'black' ? 'text-slate-700' : 'text-slate-100'
                    }`
              }
            >
              {props.name}
            </div>
            <div
              className={
                isHovered
                  ? `font-thin text-sm z-10 text-${props.color}`
                  : `font-thin text-sm z-10 ${
                      props.color === 'black' ? 'text-slate-700' : 'text-slate-50'
                    }`
              }
            >
              {props.desc}
            </div>
          </div>
          <Image
            src={`/img/${props.src}`}
            className={
              isHovered
                ? `z-0 absolute opacity-100 rounded-2xl border-${props.color}`
                : `z-0 absolute opacity-60 rounded-2xl border-${props.color}`
            }
            alt="Projects"
          />
        </motion.div>
      </a>
    </Link>
  )
}

export default ProjectCard
