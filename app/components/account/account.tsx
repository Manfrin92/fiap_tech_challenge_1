import { accountData } from '@/data/global-data'
import { ICta } from '@/types/types'
import Image from 'next/image'
import React from 'react'

import imageOne from '@/assets/images/transaction-mobile.png'
import imageTwo from '@/assets/images/transaction-tablet.png'
import imageThree from '@/assets/images/transaction-desktop.png'

interface IAccount {
  title: string
  firstName: string
  lastName: string
  imageAlt: string
  email: string
  cta: ICta
}

const Account = () => {
  const {
    cta,
    email,
    firstName,
    lastName,
    imageAlt,
    title
  } = accountData as IAccount

  return (
    <section className='relative min-h-[45.625rem] lg:min-h-[33rem] bg-gray-services-bg rounded-lg overflow-hidden'>
      <Image
        className='absolute inset-0 md:hidden w-full h-full'
        alt={imageAlt}
        src={imageOne}
        quality={100}
        width={1200}
        height={700}
      />
      <Image
        className='absolute inset-0 hidden md:block lg:hidden w-full h-full'
        alt={imageAlt}
        src={imageTwo}
        quality={100}
        width={1200}
        height={700}
      />
      <Image
        className='absolute inset-0 hidden lg:block w-full h-full'
        alt={imageAlt}
        src={imageThree}
        quality={100}
        width={1200}
        height={700}
      />
    </section>
  )
}

export default Account
