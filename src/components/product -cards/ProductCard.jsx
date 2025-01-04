import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import product from '../../assets/olx-product.jpeg'

function ProductCard() {
    return (
        <>
            {/* MainContent */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Fresh recommendations</h2>

                {/* ProductGrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* ProductCard */}


                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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
                    <div className="bg-white rounded shadow hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="relative">
                            <img
                                src={ product }
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                <FaRegHeart className="text-md  group-hover:text-green-500 transition duration-200 ease-out" />
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



        </>
    )
}

export default ProductCard
