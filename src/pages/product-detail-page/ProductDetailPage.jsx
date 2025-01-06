import React, { useEffect, useState } from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import Footer from '../../components/footer/Footer';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../firebase/FireBase';
import { doc, getDoc } from 'firebase/firestore';
import PersonImage from '../../assets/loginModal/person-olx.png'
import { RotatingLines } from 'react-loader-spinner'


function ProductDetailPage() {
    const { productId } = useParams(); // Extract productId from URL
    const [product, setProduct] = useState(null); // State to hold product data

    useEffect(() => {
        // Function to fetch product data from Firestore
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', productId); // Adjust collection name as needed
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct(docSnap.data());
                } else {
                    console.error('No such document!');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    // Check if product is loaded, and show loading or fallback content
    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-transparent">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor="#002f34"
                    strokeWidth="2"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

        );
    }

    // Render product details once data is available
    return (
        <div>
            <NavBar />
            {/* Main container - uses max width and auto margins for centering */}
            <div className="bg-gray-100">
                {/* Breadcrumb navigation */}
                <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <Link to="/"><span>Home</span></Link>
                        <span>›</span>
                        <span>{product.title}</span>
                    </div>
                </div>

                {/* Main content area with white background */}
                <div className="bg-white min-h-screen">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        {/* Grid container - 2 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left column - Image gallery section */}


                            <div className="md:col-span-2">
                                {/* Main image container with navigation */}
                                <div className="relative bg-black rounded-lg">
                                    <div className="aspect-w-4 aspect-h-3">
                                        <img
                                            src={product.images[0]} // Use the first image URL from the images array
                                            alt="Product"
                                            className="w-full object-contain rounded-lg"
                                        />
                                    </div>
                                    {/* Previous/Next navigation buttons */}
                                    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    {/* Image counter overlay */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="text-white text-sm">1/{product.images.length}</span> {/* Show current image and total number of images */}
                                    </div>
                                </div>

                                {/* Thumbnail strip */}
                                <div className="flex gap-2 mt-4 ">
                                    {/* Active thumbnail with blue border */}
                                    {product.images.slice(0, 5).map((imageUrl, index) => (
                                        <div key={index} className="w-24 h-24 border-2 hover:border-custom-green rounded-lg transition duration-200 ease-in-out">
                                            <img
                                                src={imageUrl} // Display the Cloudinary image URL
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover border rounded-lg "
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right column - Product details section */}
                            <div className="space-y-6">
                                {/* Price and action buttons section */}
                                <div className="flex items-center justify-between">
                                    <h1 className="text-4xl font-bold">₹ {product.price}</h1>
                                    <div className="flex gap-4">
                                        {/* Share button */}
                                        <button className="hover:bg-gray-100 p-2 rounded-full transition duration-300 ease-in-out
                                        ">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                        {/* Favorite button */}
                                        <button className="hover:bg-gray-100 p-2 rounded-full transition duration-300 ease-in-out">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Product title and location */}
                                <div>
                                    <h2 className="text-xl font-normal mb-2">{product.title}</h2>
                                    <p className="text-gray-500 text-sm">{product.location}</p>
                                    <p className="text-gray-500 text-sm mt-1"><span>
                                        {product.createdAt ?
                                            product.createdAt.toDate().toLocaleDateString('en-GB') : 'Loading...'}
                                    </span></p>
                                </div>

                                {/* Seller information card */}
                                <div className="bg-white border rounded-lg p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                            <img
                                                src={PersonImage}
                                                alt="Seller"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{product.sellerName}</h3>
                                            <button className="w-full mt-2 py-2 border-2 border-custom-green text-custom-green rounded font-semibold hover:border-green-300 hover:text-green-500 transition duration-200 ease-in-out ">
                                                Chat with seller
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product details card */}
                                <div className="border rounded-lg p-4">
                                    <h3 className="font-semibold mb-4">Details</h3>
                                    <div className="flex justify-between border-b py-2">
                                        <span className="text-gray-500">Condition</span>
                                        <span>{product.condition}</span>
                                    </div>
                                    <div className="flex justify-between border-b py-2">
                                        <span className="text-gray-500">Category</span>
                                        <span>{product.category}</span>
                                    </div>
                                </div>

                                {/* Description card */}
                                <div className="border rounded-lg p-4">
                                    <h3 className="font-semibold mb-4">Description</h3>
                                    <p className="space-y-2 text-gray-700">{product.description}</p>
                                </div>

                                {/* Posted location card */}
                                <div className="border rounded-lg p-4">
                                    <h3 className="font-semibold mb-2">Posted in</h3>
                                    <p className="text-gray-700">{product.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer hideFirstFooter={true} />
        </div>
    );
}

export default ProductDetailPage;
