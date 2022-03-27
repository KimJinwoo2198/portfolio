import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <div className="flex justify-center p-8 snap-end">
      <div className="text-sm font-inter_medium text-slate-600 hover:text-slate-400">
        <Link href="https://github.com/chul0721/portfolio">
          <a target="_blank">Made with ❤️ in Seoul</a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
