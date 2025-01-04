import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

function SelectSellCategory() {
    return (
        <div>
            <div class="min-h-screen bg-gray-50">

                <header class="bg-white shadow-sm p-4">
                    <div class="max-w-5xl mx-auto flex items-center">
                        <Link to="/">
                            <button class="p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </Link>

                    </div>
                </header>

                <main class="max-w-5xl mx-auto p-4">
                    <h1 class="text-2xl font-bold text-gray-800 mb-6">POST YOUR AD</h1>

                    <div class="bg-white rounded-lg shadow">
                        <div class="p-4 border-b">
                            <h2 class="text-lg font-semibold text-gray-700">CHOOSE A CATEGORY</h2>
                        </div>

                        <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">

                            <div class="divide-y">

                                <div class="hover:bg-gray-50 transition-colors">
                                    <a href="#" class="p-4 flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <span class="text-gray-600">
                                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M5 10l2-6h10l2 6M2 14h20M4 18h16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-700">Cars</span>
                                        </div>
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>


                                <div class="hover:bg-gray-50 transition-colors">
                                    <a href="#" class="p-4 flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <span class="text-gray-600">
                                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M3 21h18M3 7v14M21 7v14M6 11v10M18 11v10M6 7h12M6 7a3 3 0 01-3-3V3h18v1a3 3 0 01-3 3H6z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-700">Properties</span>
                                        </div>
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                                <div class="hover:bg-gray-50 transition-colors">
                                    <a href="#" class="p-4 flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <span class="text-gray-600">
                                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-700">Mobiles</span>
                                        </div>
                                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                            </div>

                            <div class="divide-y">

                                <div class="hover:bg-gray-50 transition-colors">
                                    <a href="#" class="p-4 block text-gray-700">
                                        Education & Classes
                                    </a>
                                </div>

                                <div class="hover:bg-gray-50 transition-colors">
                                    <a href="#" class="p-4 block text-gray-700">
                                        Tours & Travel
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SelectSellCategory
