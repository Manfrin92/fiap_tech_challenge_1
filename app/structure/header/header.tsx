import { ICta, ICommonLink } from '@/types/types'
import React, { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

import Logo from '@/assets/icons/logo.svg'
import LogoMd from '@/assets/icons/logo-md.svg'
import NavMenu from './nav-menu'
import { data } from './data'
import Hamburger from './hamburger'

export interface IMenu {
  loggedOutMenu: ICommonLink[]
  loginCta: ICta
  subscribeCta: ICta
  profileMenu: ICommonLink[]
  mobileMenu: ICommonLink[]
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

  const closeMenu = useCallback(() => {
    setIsMenuActive(false)
  }, [])

  const logIn = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  return (
    <header className={twMerge('sticky top-0 h-24 flex items-center justify-center', isLoggedIn ? 'text-white bg-green-dark' : 'text-green bg-black')}>
      <div className='container flex items-center justify-between md:gap-14 lg:gap-[4.5rem]'>
        <Hamburger
          setIsMenuActive={setIsMenuActive}
          isMenuActive={isMenuActive}
          className='md:hidden'
        />
        {!isLoggedIn && (
          <Link href='/' target='_self' className='opacity-100 hover:opacity-70 transition-opacity duration-200'>
            <Logo className='md:hidden lg:block w-[9.125rem] h-8' />
            <LogoMd className='hidden md:block lg:hidden w-[1.625rem] h-[1.625rem]' />
          </Link>
        )}
        <NavMenu
          closeMenu={closeMenu}
          data={data}
          isMenuActive={isMenuActive}
          isLoggerdIn={isLoggedIn}
          logIn={logIn}
        />
      </div>
    </header>
  )
}

export default Header
