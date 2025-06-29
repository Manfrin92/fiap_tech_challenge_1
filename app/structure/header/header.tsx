import { ICta, ICommonLink } from '@/types/types'
import React, { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

import Logo from '@/assets/icons/logo.svg'
import LogoMd from '@/assets/icons/logo-md.svg'
import NavMenu from './nav-menu'
import Hamburger from './hamburger'
import { Modal } from '@/components/modal/Modal';
import { LoginForm, RegisterForm } from '@/components/auth';

export interface IMenu {
  loggedOutMenu: ICommonLink[]
  loggedInMenu: ICommonLink[]
  loginCta: ICta
  subscribeCta: ICta
  profileMenu: ICommonLink[]
  username: string
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
  const [isProfileMenuActive, setIsProfileMenuActive] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuActive(false)
  }, [])

  const openProfileMenu = useCallback(() => {
    setIsProfileMenuActive(true)
  }, [])

  const closeProfileMenu = useCallback(() => {
    setIsProfileMenuActive(false)
  }, [])

  const logIn = useCallback(() => {
    setIsLoggedIn(true)
    setShowLoginModal(false);
  }, [])

  // Handlers para abrir as modais
  const handleOpenLogin = () => setShowLoginModal(true);
  const handleOpenRegister = () => setShowRegisterModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);
  const handleCloseRegister = () => setShowRegisterModal(false);

  return (
    <header className={twMerge('sticky top-0 h-24 flex items-center justify-center', isLoggedIn ? 'text-white bg-green-dark' : 'text-green bg-black')}>
      <div className='relative container flex items-center justify-between md:gap-14 lg:gap-[4.5rem]'>
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
          closeProfileMenu={closeProfileMenu}
          isLoggedIn={isLoggedIn}
          isMenuActive={isMenuActive}
          isProfileMenuActive={isProfileMenuActive}
          logIn={handleOpenLogin} // Abre modal de login
          openProfileMenu={openProfileMenu}
          openRegister={handleOpenRegister} // Abre modal de registro
        />
        {/* Modais de Login e Registro */}
        <Modal isOpen={showLoginModal} onClose={handleCloseLogin}>
          <LoginForm onSubmit={logIn} />
          <div className="mt-4 text-center">
            <button className="text-sm text-green underline" onClick={() => { handleCloseLogin(); handleOpenRegister(); }}>
              Não tem conta? Cadastre-se
            </button>
          </div>
        </Modal>
        <Modal isOpen={showRegisterModal} onClose={handleCloseRegister}>
          <RegisterForm onSubmit={() => { setShowRegisterModal(false); setIsLoggedIn(true); }} />
          <div className="mt-4 text-center">
            <button className="text-sm text-green underline" onClick={() => { handleCloseRegister(); handleOpenLogin(); }}>
              Já tem conta? Faça login
            </button>
          </div>
        </Modal>
      </div>
    </header>
  )
}

export default Header
