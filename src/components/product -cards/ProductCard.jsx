import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { db } from '../../firebase/FireBase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

function ProductCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status

    // Fetch products from Firestore
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id, // Store document ID if needed
                    ...doc.data(), // Spread document data
                }));
                setProducts(fetchedProducts);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false); // Set loading to false if there's an error
            }
        };
        fetchProducts();
    }, []);

    // If loading, show the spinner
    if (loading) {
        return (
            <div className=" [&_svg]:!stroke-[#002f34] flex justify-center items-center h-screen">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="#4fa94d" // Adjust the color as needed
                    strokeWidth="2"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        );
    }

    return (
        <>
            {/* MainContent */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Fresh recommendations</h2>

                {/* ProductGrid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Map over products */}
                    {products.map((product) => (
                        <Link to={`/product-details/${product.id}`} key={product.id}>
                        <div
                            
                            key={product.id}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={product.images && product.images[0]} // Use the first image URL
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:shadow-md group">
                                    <FaRegHeart className="text-md group-hover:text-green-500 transition duration-200 ease-out" />
                                </button>
                               
                                    <div className="absolute bottom-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                                        FEATURED
                                    </div>
                                
                            </div>
                            <div className="p-4">
                                <div className="font-bold text-xl">₹ {product.price}</div>
                                <p className="text-gray-600 text-sm mt-1">{product.condition}</p>
                                <p className="mt-1">{product.title}</p>
                                <div className="flex items-center justify-between mt-2 text-gray-500 text-xs">
                                    <span>{product.location}</span>
                                    <span>TODAY</span> {/* Adjust date if needed */}
                                </div>
                            </div>
                        </div>
                        </Link>
                        
                    ))}
                </div>

                {/* LoadMore */}
                <div className="text-center mt-8">
                    <button className="bg-white text-gray-800 font-semibold py-3 px-8 border border-gray-400 rounded-full hover:bg-gray-100">
                        Load more
                    </button>
                </div>
            </main>
        </>
    );
}

export default ProductCard;
