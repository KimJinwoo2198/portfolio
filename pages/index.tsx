import type { NextPage } from 'next'
import Header from '../components/Header'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full ">
        <div className="flex flex-col justify-center space-y-2 absolute top-64 pl-4 sm:pl-10 md:pl-20 ">
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
            initial={{ x: 40, opacity: 0 }}
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
    </>
  )
}

export default Home
