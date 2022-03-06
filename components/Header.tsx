import React, { useEffect, useState, useRef } from 'react'
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
    src: 'https://instagram.com/bottle.___iron'
  },
  twitter: {
    name: 'Twitter',
    src: 'https://twitter.com/chul0721'
  }
}

const Header: NextPage = () => {
  const [isOpen, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const HeaderRef = useRef<HTMLDivElement>(null)
  const toggleMenuState = () => setOpen(!isOpen)

  const changeTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  useEffect(() => {
    if (isOpen) {
      const outsideClickHandler = (e: MouseEvent) => {
        const isInside = HeaderRef.current?.contains(e.target as Node)
        if (!isInside) {
          setOpen(false)
          document.removeEventListener('click', outsideClickHandler)
        }
      }
      document.addEventListener('click', outsideClickHandler)
    }
  }, [isOpen])

  return (
    <>
      <div
        className="grid font-inter py-2 fixed top-0 left-0 right-0 w-full z-50 opacity-80 dark:bg-black dark:text-white"
        ref={HeaderRef}
      >
        <button onClick={toggleMenuState} className="relative justify-self-end right-4 top-4">
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
                  stiffness: 500,
                  damping: 60,
                  mass: 1
                }}
                initial={{ x: 0 }}
                animate={{ x: -30 }}
                exit={{ x: 0, opacity: 0 }}
                className="flex flex-col space-y-4 bg-white h-full py-6 pl-6 pr-12 rounded-l-3xl opacity-80 dark:bg-black dark:text-white"
              >
                {Object.entries(socialLinks).map(([_, socialLink]) => (
                  <div key={socialLink.name}>
                    <Link href={socialLink.src}>
                      <a target="_blank" rel="noreferrer">
                        <div className="cursor-pointer hover:underline hover:text-gray-500 border-gray-500">
                          {socialLink.name}
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
                <button onClick={changeTheme} className="">
                  {theme === 'light' ? 'Dark Theme 🌙' : 'Light Theme 🌤'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Header
