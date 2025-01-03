
import React from "react"
import './Home.css'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Home() {
    return (
        <>
            <body className="bg-gray-100">
                {/* TopNav Component */}
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
                                        className="w-full pl-4 pr-12 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400"
                                    />
                                    <button className="bg-custom-green text-white px-4 rounded-r hover:bg-gray-800">
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className=" underline md:block text-md font-bold hover:text-green-400">
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

                {/* MainContent */}
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-6">Fresh recommendations</h2>

                    {/* ProductGrid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* ProductCard */}
                        <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="relative">
                                <img
                                    src="/api/placeholder/300/200"
                                    alt="Product"
                                    className="w-full h-48 object-cover"
                                />
                                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md">
                                <FaRegHeart className="text-2xl"/>
                                </button>
                                <div className="absolute bottom-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                                    FEATURED
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="font-bold text-xl">₹ 8,90,000</div>
                                <p className="text-gray-600 text-sm mt-1">2018 - 42,000 km</p>
                                <p className="mt-1">Honda City, Automatic</p>
                                <div className="flex items-center justify-between mt-2 text-gray-500 text-xs">
                                    <span>Sector 28, Gurgaon</span>
                                    <span>TODAY</span>
                                </div>
                            </div>
                        </div>

                        {/* More ProductCards - Structure repeated for each product */}
                        {/* I'm showing just one for brevity, but you would repeat the above ProductCard structure */}
                    </div>

                    {/* LoadMore */}
                    <div className="text-center mt-8">
                        <button className="bg-white text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-full hover:bg-gray-100">
                            Load more
                        </button>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-12 w-full">
                    {/* FooterContent */}
                    <div className="w-full bg-custom-light text-custom-green">
                        <div className="max-w-7xl mx-auto px-4 py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                                {/* FooterSection */}
                                <div>
                                    <h3 className="font-bold mb-4">POPULAR LOCATIONS</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li><a href="#" className="hover:text-custom-green">Kolkata</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Mumbai</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Chennai</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Delhi</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-4">TRENDING LOCATIONS</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li><a href="#" className="hover:text-custom-green">Bangalore</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Pune</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Hyderabad</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Ahmedabad</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-4">ABOUT US</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li><a href="#" className="hover:text-custom-green">About OLX Group</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Careers</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Contact Us</a></li>
                                        <li><a href="#" className="hover:text-custom-green">OLX People</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold mb-4">OLX</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li><a href="#" className="hover:text-custom-green">Help</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Sitemap</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Legal & Privacy information</a></li>
                                        <li><a href="#" className="hover:text-custom-green">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  {/* FooterBottom */}
<div className="w-full bg-custom-green">
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
            {/* Replace with your logo URLs */}
            <img src="/public/footer/footer-1.svg" alt="Logo 1" className="h-12 w-auto" />
            <img src="/public/footer/olx-footer-2.svg" alt="Logo 2" className="h-12 w-auto" />
            <img src="/public/footer/carwale-footer-3.svg" alt="Logo 3" className="h-12 w-auto" />
            <img src="/public/footer/bikewale-footer-4.svg" alt="Logo 4" className="h-12 w-auto" />
            <img src="/public/footer/cartrade-footer-5.svg" alt="Logo 5" className="h-12 w-auto" />
            <img src="/public/footer/mobility-footer-6.svg" alt="Logo 6" className="h-12 w-auto" />
        </div>

        {/* Additional Content */}
        <div className="text-white text-sm text-center mt-4 md:mt-0">
            © 2024 Your Company. All rights reserved.
        </div>
    </div>
</div>

                </footer>

            </body>

        </>
    )
}

export default Home;
