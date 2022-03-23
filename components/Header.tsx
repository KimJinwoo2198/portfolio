import React, { useEffect, useState, useRef, useCallback } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import socialLinkProps from '../typings/socialLinkProps'
import { AnimatePresence, motion } from 'framer-motion'

const socialLinks: Record<string, socialLinkProps> = {
  github: {
    name: 'Github',
    src: 'https://github.com/chul0721'
  },
  instagram: {
    name: 'Instagram',
    src: 'https://instagram.com/bottle___iron'
  },
  twitter: {
    name: 'Twitter',
    src: 'https://twitter.com/chul0721'
  }
}

const Header: NextPage = () => {
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
      <div
        className="grid font-inter py-2 fixed top-0 left-0 right-0 w-full z-50 opacity-80"
        ref={HeaderRef}
      >
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
                <div className="flex flex-col space-y-2 pt-8 pl-6 pr-32">
                  <h1 className="text-xl">Contact Me</h1>
                  <div className="space-y-2 pt-1">
                    {Object.entries(socialLinks).map(([_, socialLink]) => (
                      <div key={socialLink.name} className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        <Link href={socialLink.src}>
                          <a target="_blank" rel="noreferrer">
                            <div className="cursor-pointer hover:text-gray-600 border-gray-500 pl-1">
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
