import type { NextPage } from 'next'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const subjects = [
  '재미있는 것을',
  '사람들이 필요로 하는 것을',
  '사람들이 좋아하는 것을',
  '흥미로운 것을',
  '최신 트랜드에 따른 것을',
  '세상을 바꿀 기술을',
  '혁신적인 기술을'
]

const Home: NextPage = () => {
  const [subjectNumber, setSubjectNumber] = useState(0)
  useEffect(() => {
    const subjectInterval = setInterval(
      () => setSubjectNumber((prev) => (prev >= subjects.length - 1 ? 0 : prev + 1)),
      2000
    )
    return () => clearInterval(subjectInterval)
  }, [])

  return (
    <>
      <Header />
      <div className="flex flex-row h-screen">
        <div className="flex flex-col justify-center space-y-1 absolute top-64 pl-4 sm:pl-10 md:pl-20 ">
          <motion.div
            className="flex flex-row pl-1 font-inter_thin "
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0,
              stiffness: 415,
              damping: 100,
              mass: 1.8
            }}
          >
            <p className="text-2xl sm:text-4xl">Hi, I&apos;m</p>
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              delay: 0,
              stiffness: 415,
              damping: 100,
              mass: 1.8
            }}
            className="flex flex-row flex-wrap items-center font-inter_bold text-5xl sm:text-6xl sm:space-x-4"
          >
            <p className="w-full sm:w-auto">Byungchul</p>
            <p className="bg-black my-2 text-white dark:bg-white dark:text-black">Kim.</p>
          </motion.div>
        </div>
      </div>
      <div className="flex h-screen">
        <motion.div
          className="font-inter text-xl text-gray-500 pl-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0,
            stiffness: 415,
            damping: 100,
            mass: 1.8
          }}
        >
          <p className="">
            저는
            <motion.span animate={{}} transition={{}}>
              {` ${subjects[subjectNumber]} `}
            </motion.span>
            만들어요.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default Home
