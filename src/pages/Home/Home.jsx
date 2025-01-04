
import React from "react"
import './Home.css'



import NavBar from "../../components/nav-bar/NavBar";
import ProductCard from "../../components/product -cards/ProductCard";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <body className="Home bg-gray-100">
                {/* TopNav Component */}
                <NavBar> </NavBar>

                {/* product card area  */}
                <ProductCard />

                {/* Footer */}
                <Footer />


            </body>

        </>
    )
}

export default Home;
