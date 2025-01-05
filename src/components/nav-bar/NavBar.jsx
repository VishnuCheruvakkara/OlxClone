import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import LoginModal from '../login-modal/LoginModal';
import './Navbar.css'
import { auth } from '../../firebase/FireBase';
import { Link } from "react-router-dom"

function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginModal, setLoginModal] = useState(false);

    useEffect(() => {
        const checkStatus = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn(false)
            }
        })
        return () => checkStatus()
    }, [])

    const handleLogout = () => {
        auth.signOut().then(() => {
            setIsLoggedIn(false);
        })
            .catch((error) => {
                console.error("Error signing out : ", error)
            })

    }

    return (
        <>
            <nav className="bg-gray-100 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    {/* TopBar */}
                    <div className="flex items-center justify-between p-2 md:px-4">
                        <div className="flex items-center space-x-4">
                            <svg width="46px" height="46px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className="h-12 fill-custom-green">
                                <path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                            </svg>
                        </div>

                        <div className="hidden md:flex flex-1 mx-8 space-x-2">
                            <div className="relative flex-1 max-w-xs">
                                <input
                                    type="text"
                                    placeholder="India"
                                    className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none  focus:border-green-400 border-custom-green"
                                />
                                <i className="fas fa-search absolute left-2 top-3 text-gray-400" />
                                <i className="fas fa-chevron-down absolute right-2 top-3 text-gray-400" />
                            </div>
                            <div className="relative flex flex-1">
                                <input
                                    type="text"
                                    placeholder="Find Cars, Mobile Phones and more..."
                                    className="w-full pl-4 pr-12 py-2 border-2 rounded-l-sm focus:outline-none focus:border-green-400 border-custom-green"
                                />
                                <button className="bg-custom-green text-white px-4 rounded-r hover:bg-gray-800">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>






                        <div className="flex items-center space-x-4" >
                            {isLoggedIn ?
                                <button onClick={handleLogout} className=" underline md:block text-md font-bold hover:text-green-400 transition duration-200 ease-in-out">
                                    Logout
                                </button>
                                :
                                <button onClick={() => setLoginModal(!loginModal)} className=" underline md:block text-md font-bold hover:text-green-400 transition duration-200 ease-in-out">
                                    Login
                                </button>
                            }

                            {isLoggedIn ?
                                <Link to='/sell-product'>

                                    <div class="relative inline-block w-[104px] h-[48px] cursor-pointer ">
                                        <svg width="104" height="48" viewBox="0 0 1603 768" xmlns="http://www.w3.org/2000/svg">
                                            <g >
                                                <path class="background" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
                                                <path class="bottom-curve" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
                                                <path class="top-curve" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
                                                <path class="decorative" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
                                            </g>
                                        </svg>

                                        <div class="absolute inset-0 flex items-center justify-center text-black font-bold z-auto">
                                            <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-lquEm" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path></svg>
                                            <span class="text-sm ml-2">SELL</span>
                                        </div>
                                    </div>
                                </Link>
                                :
                                <div onClick={() => setLoginModal(!loginModal)} class="relative inline-block w-[104px] h-[48px] cursor-pointer ">
                                    <svg width="104" height="48" viewBox="0 0 1603 768" xmlns="http://www.w3.org/2000/svg">
                                        <g >
                                            <path class="background" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path>
                                            <path class="bottom-curve" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path>
                                            <path class="top-curve" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path>
                                            <path class="decorative" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path>
                                        </g>
                                    </svg>

                                    <div class="absolute inset-0 flex items-center justify-center text-black font-bold z-auto">
                                        <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-lquEm" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path></svg>
                                        <span class="text-sm ml-2">SELL</span>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>

                    {/* Categories */}
                    <div className="scroll-container flex overflow-x-auto whitespace-nowrap p-2 md:px-4 text-sm">
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">ALL CATEGORIES</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">Cars</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">Motorcycles</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">Mobile Phones</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">For Sale: Houses & Apartments</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">Scooters</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">Commercial & Other Vehicles</a>
                        <a href="#" className="flex-shrink-0 px-3 hover:text-green-500">For Rent: Houses & Apartments</a>
                    </div>
                </div>
            </nav>

            {/* MobileSearch */}
            <div className="md:hidden p-4 bg-white border-b">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Find Cars, Mobile Phones and more..."
                        className="w-full pl-8 pr-12 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>

            </div>

            {loginModal && <LoginModal />}

        </>
    )
}

export default NavBar
