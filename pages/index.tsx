import type { NextPage } from 'next'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col relative top-48 pl-2 sm:pl-8 md:pl-16 mx-4 sm:mx-8">
        <div
          className="relative font-inter_thin text-2xl pb-1 pl-1 sm:text-4xl"
          data-aos="fade-down"
        >
          Hi, I&apos;m
        </div>
        <div
          className="flex flex-row flex-wrap items-center font-inter_bold text-5xl sm:text-6xl space-y-2.5 sm:space-x-4 sm:space-y-0"
          data-aos="fade-left"
        >
          <p className="w-full sm:w-auto">Byungchul</p>
          <p className="bg-black py-1 px-0.5 text-white">Kim.</p>
        </div>
      </div>
    </>
  )
}

export default Home
