import React, { useEffect, useRef, useState } from 'react'
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

  const changeMenuState = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <div className="flex flex-col font-inter py-2 fixed top-0 left-0 right-0 w-full z-50">
        <button onClick={changeMenuState} className="relative justify-center left-4 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 fill-black"
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
        <div className="flex flex-col pt-2 fixed top-12 bottom-0 left-0">
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
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                exit={{ x: -150, opacity: 0 }}
                className="flex flex-col space-y-4 bg-white h-full py-3 pl-6 pr-12 rounded-r-3xl opacity-80"
              >
                {Object.entries(socialLinks).map(([_, socialLink]) => (
                  <div key={socialLink.name}>
                    <Link href={socialLink.src}>
                      <a target="_blank" rel="noreferrer">
                        <div className="cursor-pointer hover:border-b hover:text-gray-500 border-gray-500">
                          {socialLink.name}
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Header
