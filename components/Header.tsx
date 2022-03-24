import React, { useEffect, useState, useRef, useCallback, FC } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { socialLinks } from './data'

const Header: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const HeaderRef = useRef<HTMLDivElement>(null)
  const toggleMenuState = () => setOpen(!isOpen)

  const handleUserKeyPress = useCallback((event) => {
    if (event.key === 'Escape') setOpen(false)
  }, [])

  const outsideClickHandler = useCallback((e: MouseEvent) => {
    const isInside = HeaderRef.current?.contains(e.target as Node)
    if (!isInside) {
      setOpen(false)
      document.removeEventListener('click', outsideClickHandler)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', outsideClickHandler)
      window.addEventListener('keydown', handleUserKeyPress)
    }
  }, [isOpen])

  return (
    <>
      <div className="grid font-inter py-2 fixed top-0 left-0 right-0 w-full z-50" ref={HeaderRef}>
        <button onClick={toggleMenuState} className="relative justify-self-end right-8 top-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-black"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex flex-col py-2 fixed top-16 -bottom-2 -right-8">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                key="socialLinks"
                transition={{
                  type: 'spring',
                  delay: 0,
                  stiffness: 400,
                  damping: 60,
                  mass: 1
                }}
                initial={{ x: 60 }}
                animate={{ x: -30 }}
                exit={{ x: 0, opacity: 0 }}
                className="bg-white h-full rounded-tl-xl shadow-2xl"
              >
                <div className="flex relative p-3 border-b border-slate-500/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
                  <div className="w-2.5 h-2.5 ml-1.5 rounded-full bg-[#F4BF50]"></div>
                  <div className="w-2.5 h-2.5 ml-1.5 rounded-full bg-[#61C454]"></div>
                </div>
                <div className="flex flex-col space-y-2 pt-8 pl-6 pr-24">
                  <h1 className="text-xl">Contact Me</h1>
                  <div className="space-y-2 pt-1">
                    {Object.entries(socialLinks).map(([_, socialLink]) => (
                      <div key={socialLink.name} className="flex">
                        <Link href={socialLink.src}>
                          <a target="_blank" rel="noreferrer">
                            <div className="cursor-pointer text-slate-500 hover:text-black border-gray-500 pl-1">
                              {socialLink.name}
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Header
