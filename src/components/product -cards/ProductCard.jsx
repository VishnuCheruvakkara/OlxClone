import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { db } from '../../firebase/FireBase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import notFound from '../../assets/no-result.gif'

function ProductCard({ searchQuery }) {
    console.log(searchQuery)
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
    // filter product logic 
    // Filter product logic
    const filterProducts = searchQuery
        ? products.filter((product) =>
        (product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.condition?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.location?.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        : products;

    return (
        <>
            {/* MainContent */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Fresh recommendations</h2>

                {/* ProductGrid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Conditional rendering */}
                    {filterProducts.length > 0 ? (
                        filterProducts.map((product) => (
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
                                            <span>
                                                {product.createdAt ?
                                                    product.createdAt.toDate().toLocaleDateString('en-GB') : 'Loading...'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        // Display "Nothing Found" when no products match
                        <div className="col-span-4 bg-gray-100 text-gray-600 text-center py-8 rounded shadow-md">
                            <h3 className="text-lg font-semibold">Nothing Found</h3>
                            <div className="flex justify-center ">
                                {/* Image placed below the text */}
                                <img src={notFound} alt="Nothing Found" className="w-32 h-32 object-cover mt-4" />
                            </div>
                        </div>

                    )}
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
