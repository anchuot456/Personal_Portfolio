import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll'

const NavBar = ()=>{
    const [showMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)
    const navLinks = ['Home','About','Skills','Work','Contact']
    return(
        <div className="navbar">
            <div className="bg-primary fixed text-2xl text-gray-300 justify-between relative flex">
                <FaHome className="px-2 py-2 w-12 h-12"/>
                <ul className='hidden md:flex gap-4 font-light'>
                    {navLinks.map((route, index) => (
                    <li key={index} className='cursor-pointer'>
                        <Link
                            className='hover:text-white hover:font-medium'
                            to={route.toLowerCase()}
                            smooth={true}
                            duration={500}>
                            {route}
                        </Link>
                    </li>
                ))}
                </ul>

                <div onClick={toggleMenu} className='md:hidden z-10'>
                {
                    showMenu ? <XMarkIcon className='h-6 w-6'/> 
                    : <Bars3Icon className='h-6 w-6' />
                }
                </div>
                <ul className={`md:hidden w-full h-screen absolute flex flex-col gap-6 bg-primary top-0 left-0 items-center justify-center text-4xl ${ showMenu ? 'block' : 'hidden' }`}>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Work</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className='hidden fixed md:flex flex-col top-[35%] left-0'>
                <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                    <a href='https://www.linkedin.com/in/anh-vu-bui-10a38b224/' target='blank' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
                        <span>LinkedIn</span>
                        <FaLinkedin className='h-[30px] w-[30px] ml-auto'/>
                    </a>
                </div>
                <div className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                    <a href='https://github.com/anchuot456' target='blank' className='flex justify-center items-center w-full text-white font-normal text-base px-4'>
                        <span>Github</span>
                        <FaGithub className='h-[30px] w-[30px] ml-auto'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;