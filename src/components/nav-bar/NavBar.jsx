import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import LoginModal from '../login-modal/LoginModal';

function NavBar() {
    const [loginModal, setLoginModal] = useState(false);
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
                                    className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none  focus:border-green-400"
                                />
                                <i className="fas fa-search absolute left-2 top-3 text-gray-400" />
                                <i className="fas fa-chevron-down absolute right-2 top-3 text-gray-400" />
                            </div>
                            <div className="relative flex flex-1">
                                <input
                                    type="text"
                                    placeholder="Find Cars, Mobile Phones and more..."
                                    className="w-full pl-4 pr-12 py-2 border-2 rounded-l-sm focus:outline-none focus:border-green-400"
                                />
                                <button className="bg-custom-green text-white px-4 rounded-r hover:bg-gray-800">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button onClick={()=>setLoginModal(!loginModal)} className=" underline md:block text-md font-bold hover:text-green-400">
                                Login
                            </button>
                            <button className="bg-white px-4 py-2 rounded-full border-2 border-black hover:bg-gray-50 flex items-center font-semibold shadow-slate-500 shadow-md">
                                <FaPlus className="mr-2" />
                                SELL
                            </button>
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
                        className="w-full pl-8 pr-12 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>

            </div>
            
            {loginModal & <LoginModal/>}
            
        </>
    )
}

export default NavBar
