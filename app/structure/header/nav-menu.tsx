import React from 'react'
import { IMenu } from './header'
import Link from 'next/link'
import Cta from '@/components/cta'
import { twMerge } from 'tailwind-merge'

import Avatar from '@/assets/icons/avatar.svg'
import Close from '@/assets/icons/close.svg'
import { accountData, headerData } from '@/data/global-data'

interface Properties {
  closeMenu: () => void
  closeProfileMenu: () => void
  isLoggedIn: boolean
  isMenuActive: boolean
  isProfileMenuActive: boolean
  logIn: () => void
  openProfileMenu: () => void
}

const NavMenu: React.FC<Properties> = ({
  closeMenu,
  closeProfileMenu,
  isLoggedIn,
  isMenuActive,
  isProfileMenuActive,
  logIn,
  openProfileMenu
}) => {
  const { firstName, lastName } = accountData
  const {
    loggedOutMenu,
    loggedInMenu,
    profileMenu,
    loginCta,
    subscribeCta,
  } = headerData as unknown as IMenu


  return (
    <>
      {isLoggedIn ? (
        <>
          <div className='w-full flex items-center justify-end gap-4'>
            <span className='hidden md:block'>{`${firstName} ${lastName}`}</span>
            <button onClick={openProfileMenu}>
              <Avatar className='w-10 h-10' />
            </button>
          </div>
          <nav className={
            twMerge(
              'fixed top-0 left-0 w-fit p-6 pt-10 flex md:hidden flex-col transition-all duration-300 bg-green-light',
              isMenuActive ? 'translate-x-0' : '-translate-x-full',
            )}
          >
            <button className='absolute top-4 right-4' onClick={closeMenu}>
              <Close className='w-4 h-4' />
            </button>
            <ul className='flex flex-col'>
              {loggedInMenu.map((loggedInItem, index) => (
                <li className='py-4 not-last:border-b border-black' key={`item-${index}`}>
                  <Link
                    className='block w-full text-lg text-center text-black' href={loggedInItem.url}
                    onClick={closeMenu}
                  >
                    {loggedInItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={
            twMerge(
              'fixed md:absolute top-0 md:top-[5.5rem] right-0 md:right-8 lg:right-0 w-fit p-6 pt-10 flex flex-col transition-all duration-300 bg-black',
              isProfileMenuActive ? 'translate-x-0 md:translate-y-0 md:opacity-100 md:pointer-events-auto z-20' : 'translate-x-full md:translate-0 md:translate-y-2 md:opacity-0 md:pointer-events-none -z-10',
            )}
          >
            <button className='absolute top-4 right-4' onClick={closeProfileMenu}>
              <Close className='w-4 h-4' />
            </button>
            <ul className='flex flex-col'>
              {profileMenu.map((profileItem, index) => (
                <li className='py-4 not-last:border-b border-white' key={`item-${index}`}>
                  <Link
                    className='block w-full text-lg text-center text-white' href={profileItem.url}
                    onClick={closeMenu}
                  >
                    {profileItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <nav className={
          twMerge(
            'fixed top-0 left-0 md:static md:bg-transparent w-fit md:w-full p-6 pt-10 md:p-0 flex flex-col md:flex-row md:justify-between transition-all duration-300 bg-black',
            isMenuActive ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          )}
        >
          <button className='md:hidden absolute top-4 right-4' onClick={closeMenu}>
            <Close className='w-4 h-4' />
          </button>
          <ul className='flex flex-col md:flex-row md:items-center md:gap-10'>
            {loggedOutMenu.map((loggedOutItem, index) => (
              <li className='py-4 not-last:border-b border-green md:border-none' key={`item-${index}`}>
                <Link
                  className='block text-lg w-full md:w-fit text-center md:font-semibold translate-0 hover:-translate-y-2 duration-200 transition-all' href={loggedOutItem.url}
                  onClick={closeMenu}
                >
                  {loggedOutItem.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className='hidden md:flex items-center md:gap-6' >
            <Cta {...subscribeCta} />
            <Cta {...loginCta} onClick={logIn} />
          </div>
        </nav>
      )}
    </>
  )
}

export default NavMenu
