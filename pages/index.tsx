import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Description from '../components/Description'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import CareerCard from '../components/CareerCard'
import { projects, skills, socialLinks } from '../utils/data'

const Home: NextPage = () => {
  return (
    <AnimatePresence>
      <Header />
      <div className="snap-center grid content-center h-screen">
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
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                delay: 0.5,
                stiffness: 250,
                damping: 100,
                mass: 1.8
              }}
              className="text-lg"
            >
              프로그래머를 꿈꾸는 학생 개발자입니다. 👋
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                delay: 0.5,
                stiffness: 250,
                damping: 100,
                mass: 1.8
              }}
              className="flex space-x-2 pl-1 py-2"
            >
              {Object.entries(socialLinks).map(([_, socialLink]) => (
                <div key={socialLink.src}>
                  <Link href={socialLink.href}>
                    <a target="_blank" rel="noreferrer">
                      <div className="cursor-pointer hover:opacity-60 w-6">
                        <Image
                          src={`/img/${socialLink.src}`}
                          alt="SNS Links"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="snap-center grid content-center h-screen" id="stack">
        <Title name="Stack" />
        <Description description="제가 사용하는 기술들이에요. 마우스를 위에 올리면 상세 정보를 확인하실 수 있어요." />
        <div className="flex flex-row flex-grow flex-wrap justify-center pt-4">
          {Object.entries(skills).map(([_, skill]) => (
            <span key={skill.name}>
              <SkillCard name={skill.name} src={skill.src} />
            </span>
          ))}
        </div>
      </div>
      <div className="snap-center grid content-center h-screen" id="projects">
        <Title name="Projects" />
        <Description description="제가 참여한 프로젝트들이에요. 아이템을 클릭하면 외부 사이트로 이동해요." />
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
      <div className="snap-center grid content-center h-screen" id="career">
        <div className="flex flex-col justify-center absolute h-4/5">
          <Title name="Career" />
          <Description description="저의 여러 경험들이 담긴 경력이에요." />
          <div className="pl-8 sm:pl-10 md:pl-24 2xl:pl-44 py-1">
            <CareerCard
              before={true}
              name="Team int"
              href="https://teamint.xyz"
              role="리더"
              delay={0.5}
            />
            <CareerCard
              before={false}
              name="한국 디스코드 리스트"
              href="https://koreanbots.dev"
              role="웹 개발자"
              delay={0.8}
            />
          </div>
        </div>
      </div>
      <Footer />
    </AnimatePresence>
  )
}

export default Home
