import { NextPage } from 'next/types'
import Image from 'next/image'

const NotFount: NextPage = () => {
  return (
    <>
      <Image src="https://http.cat/404" alt="404" layout="fill" objectFit="contain" />
    </>
  )
}
export default NotFount
