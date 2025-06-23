import React from 'react'
import { IMenu } from './header'
import Link from 'next/link'
import Cta from '@/components/cta'
import { twMerge } from 'tailwind-merge'

interface Properties {
  closeMenu: () => void
  data: IMenu | unknown
  isMenuActive: boolean
  isLoggerdIn: boolean
  logIn: () => void
}

const NavMenu: React.FC<Properties> = ({data, closeMenu, isLoggerdIn, isMenuActive, logIn}) => {
  const {loggedOutMenu, loginCta, mobileMenu, profileMenu, subscribeCta} = data as unknown as IMenu

  return (
    <nav className={
      twMerge(
        'fixed top-0 left-0 md:static md:bg-transparent w-fit md:w-full px-6 pt-24 pb-6 md:p-0 flex flex-col md:flex-row md:justify-between transition-all duration-300',
        isMenuActive ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
        isLoggerdIn ? 'bg-green-dark' : 'bg-black'
      )}>
      {isLoggerdIn ? (
        <span></span>
      ) : (
        <>
          <ul className='flex flex-col md:flex-row md:items-center md:gap-10'>
            {loggedOutMenu.map((item, index) => (
              <li key={`item-${index}`}>
                <Link
                  className='text-lg font-semibold block translate-0 hover:-translate-y-2 duration-200 transition-all' href={item.url}
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden md:flex items-center md:gap-6' >
            <Cta {...subscribeCta} />
            <Cta {...loginCta} onClick={logIn} />
          </div>
        </>
      )}
    </nav>
  )
}

export default NavMenu
