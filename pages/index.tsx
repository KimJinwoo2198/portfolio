import type { NextPage } from 'next'
import Header from '../components/Header'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="flex flex-row h-screen">
          <div className="flex flex-col justify-center space-y-1 absolute h-4/5 pl-8 sm:pl-10 md:pl-24">
            <motion.div
              className="flex flex-row pl-1 font-inter_thin"
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
              <p className="bg-black my-2 text-white">Kim.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row h-screen">
          <div className="flex flex-col absolute h-2/5 justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 1
              }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -60 }
              }}
              className="pl-8 sm:pl-10 md:pl-20 font-inter_bold text-4xl"
            >
              I can...
            </motion.div>
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
              className="pl-8 sm:pl-10 md:pl-20 pt-4"
            >
              {/* Will replace text with logo icons */}
              <p>
                Frontend: HTML, CSS, SCSS, Javascript, TypeScript, React.js, Next.js, Svelte,
                Tailwindcss, Framer Motion, StoryBook, Apollo Client, React Native, Expo, Electron,
                etc.
              </p>
              <p>
                Backend: Nest.js, GraphQL, Prisma, Go, Python, Node.js, PostgreSQL, MySQL, MongoDB,
                etc.
              </p>
              <p>Others: Linux, Docker, C</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
