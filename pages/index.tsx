import type { NextPage } from 'next'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { projects, skills } from '../components/data'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="grid content-center h-screen">
          <div className="flex flex-col justify-center space-y-1 absolute h-4/5 w-full">
            <div className="flex flex-col self-center w-11/12 md:w-5/6 lg:w-4/5">
              <motion.div
                className="flex flex-row pl-1 font-inter_thin"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.4,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
              >
                <p className="text-2xl sm:text-4xl">Hi, I&apos;m</p>
              </motion.div>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.2,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
                className="flex flex-row flex-wrap items-center font-inter_bold text-5xl sm:text-6xl sm:space-x-4"
              >
                <p className="w-full sm:w-auto">Byungchul</p>
                <p className="bg-black my-2 text-white">Kim.</p>
              </motion.div>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  delay: 0.5,
                  stiffness: 250,
                  damping: 100,
                  mass: 1.8
                }}
                className="pl-1 text-lg"
              >
                프로그래머를 꿈꾸는 학생 개발자입니다. 👋
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="stack">
        <div className="grid content-center h-screen">
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
            Stack
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.5,
              stiffness: 250,
              damping: 100,
              mass: 1.8
            }}
            className="pl-8 sm:pl-10 md:pl-20 2xl:pl-40 py-1 pr-8"
          >
            제가 사용하는 기술들이에요. 마우스를 위에 올리면 상세 정보를 확인하실 수 있어요.
          </motion.div>
          <div className="flex flex-row flex-grow flex-wrap justify-center pt-4">
            {Object.entries(skills).map(([_, skill]) => (
              <span key={skill.name}>
                <SkillCard name={skill.name} src={skill.src} />
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="grid content-center h-screen">
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
            Projects
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              delay: 0.5,
              stiffness: 250,
              damping: 100,
              mass: 1.8
            }}
            className="pl-8 sm:pl-10 md:pl-20 2xl:pl-40 py-1 pr-8"
          >
            제 토이 프로젝트들이에요. 아이템을 클릭하면 외부 사이트로 이동해요.
          </motion.div>
          <div className="flex flex-row flex-grow flex-wrap justify-center md:space-x-8 pt-24">
            {Object.entries(projects).map(([_, project]) => (
              <span key={project.name}>
                <ProjectCard
                  name={project.name}
                  desc={project.desc}
                  src={project.src}
                  color={project.color}
                  href={project.href}
                />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
