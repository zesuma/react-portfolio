import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logos } from '../constants'
import { BallCanvas } from './canvas'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
        {logos.map((technology) => (
          <div className="logo w-16 h-16 object-contain" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
          <p className='text-white text-[1.2rem] font-bold cursor-pointer flex'>Trever &nbsp; <span className='sm:block hidden'>| Web Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li 
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[1.25rem] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[1.75em] h-[1.75em] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[8em] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((Link) => (
                <li 
                  key={Link.id}
                  className={`${
                    active === Link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[1rem]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(Link.title)
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
