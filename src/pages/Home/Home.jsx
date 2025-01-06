
import React, { useState } from "react"
import './Home.css'
import NavBar from "../../components/nav-bar/NavBar";
import ProductCard from "../../components/product -cards/ProductCard";
import Footer from "../../components/footer/Footer";

function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    }
    return (
        <>
            <body className="Home bg-gray-100">
                {/* TopNav Component */}
                <NavBar onSearchChange={handleSearchChange}> </NavBar>

                {/* product card area  */}
                <ProductCard searchQuery={searchQuery} />

                {/* Footer */}
                <Footer />


            </body>

        </>
    )
}

export default Home;
