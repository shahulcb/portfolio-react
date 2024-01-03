import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHouseChimney, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard, faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { NavLink, useLocation } from 'react-router-dom'

function Navbar({ userRole }) {

    const [visible, setVisible] = useState(false)
    const location = useLocation()
    const navbarRef = useRef(null)
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setVisible(false);
            }
        }
        document.addEventListener('mousedown', handleOutSideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutSideClick);
        }
    }, [navbarRef])

    useEffect(() => {
        setVisible(false)
    }, [location.pathname])

    return (
        <div ref={navbarRef} className='z-50 w-full h-16 fixed top-0 border-b border-customBorderColor bg-[#121212] lg:p-0 lg:w-60 lg:left-0 lg:h-screen lg:border-r lg:border-b-0'>
            <div className='w-full h-full px-8 flex items-center justify-between bg-[#121212] lg:px-0 lg:h-max lg:items-start lg:block lg:justify-normal'>
                <div className='flex flex-col gap-1 lg:p-8 lg:border-b lg:border-customBorderColor'>
                    <h1 className='font-normal text-xl hover:text-yellow-500 transition ease-in-out duration-500 cursor-pointer'>theshahul</h1>
                    <p className='font-light text-base text-customTextColor hidden lg:block'>MERN Stack Developer</p>
                </div>
                <div className='block cursor-pointer lg:hidden' onClick={() => setVisible((prev) => !prev)}>
                    <svg className={`${visible ? "rotate-45" : "rotate-0"} bi bi-grid transition ease-in-out duration-300`} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                        viewBox="0 0 16 16" id="navbar-btn-icon">
                        <path
                            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                    </svg>
                </div>
            </div>
            <div className={`-z-50 text-customTextColor absolute bg-[#121212] h-max w-full left-0 right-0 ${visible ? "translate-y-[1px]" : "-translate-y-full"} transition-all ease-in-out duration-300 lg:translate-y-0 lg:flex lg:flex-col`}>
                {
                    userRole === "admin" ?
                        <>
                            <NavLink to={"/admin/dashboard"} end className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                <p className='text-base font-medium'>Home</p>
                            </NavLink>
                            <NavLink to={"/admin/dashboard/about"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faAddressCard} />
                                <p className='text-base font-medium'>About</p>
                            </NavLink>
                            <NavLink to={"/admin/dashboard/tool-stack"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                                <p className='text-base font-medium'>Tool Stack</p>
                            </NavLink>
                            <NavLink to={"/admin/dashboard/works"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faCode} />
                                <p className='text-base font-medium'>Works</p>
                            </NavLink>
                            <NavLink to={"/admin/dashboard/blogs"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faNewspaper} />
                                <p className='text-base font-medium'>Blogs</p>
                            </NavLink>
                        </> : <>
                            <NavLink to={"/"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                <p className='text-base font-medium'>Home</p>
                            </NavLink>
                            <NavLink to={"/works"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faCode} />
                                <p className='text-base font-medium'>Works</p>
                            </NavLink>
                            <NavLink to={"/blogs"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faNewspaper} />
                                <p className='text-base font-medium'>Blogs</p>
                            </NavLink>
                            <NavLink to={"/about"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faAddressCard} />
                                <p className='text-base font-medium'>About</p>
                            </NavLink>
                            <NavLink to={"/contact"} className='flex items-center px-8 py-5 gap-4 border-b cursor-pointer border-customBorderColor transition-all ease-in-out duration-500 hover:bg-customHoverColor hover:text-white'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className='text-base font-medium'>Contact</p>
                            </NavLink>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar
