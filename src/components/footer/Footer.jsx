import React from 'react'
import footer1 from '../../assets/footer_images/footer-1.svg'
import footer2 from '../../assets/footer_images/olx-footer-2.svg'
import footer3 from '../../assets/footer_images/carwale-footer-3.svg'
import footer4 from '../../assets/footer_images/bikewale-footer-4.svg'
import footer5 from '../../assets/footer_images/cartrade-footer-5.svg'
import footer6 from '../../assets/footer_images/mobility-footer-6.svg'


function Footer() {
    return (
        <div>
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
    <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
            <img src={footer1} alt="Logo 1" className="h-12 w-auto" />
            <img src={footer2} alt="Logo 3" className="h-12 w-auto" />
            <img src={footer3} alt="Logo 4" className="h-12 w-auto" />
            <img src={footer4} alt="Logo 5" className="h-12 w-auto" />
            <img src={footer5} alt="Logo 6" className="h-12 w-auto" />
            <img src={footer6} alt="Logo 6" className="h-12 w-auto" />
        </div>

        {/* Dividing Line */}
        <div className="border-t border-white/20 my-6" />

        {/* Copyright Section */}
        <div className="text-white text-sm text-center ">
            © 2024 Your Company. All rights reserved.
        </div>
    </div>
</div>

            </footer>
        </div>
    )
}

export default Footer
