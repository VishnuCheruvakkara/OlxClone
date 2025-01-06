import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import Footer from '../../components/footer/Footer';
import { db, auth } from '../../firebase/FireBase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import axios from "axios"

const PostAdForm = () => {
    const [user, setUser] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);// Files selected by the user
    const [selectedImages, setSelectedImages] = useState([]); // URLs of uploaded images
    const [productDetails, setProductDetails] = useState({
        title: '',
        description: '',
        category: '',
        condition: '',
        price: '',
        location: '',
        phonenumber: '',
    })
    //handle all errors
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        category: '',
        condition: '',
        price: '',
        location: '',
        phonenumber: '',
        files: ''
    });
    //Validate the form
    const validateForm = () => {
        const newErrors = {};

        if (!productDetails.title) newErrors.title = 'Title is required';
        if (!productDetails.description) newErrors.description = 'Description is required';
        if (!productDetails.category) newErrors.category = 'Category is required';
        if (!productDetails.condition) newErrors.condition = 'Condition is required';
        if (!productDetails.price || isNaN(productDetails.price) || productDetails.price <= 0) {
            newErrors.price = 'Please enter a valid price';
        }
        if (!productDetails.location) newErrors.location = 'Location is required';
        if (!productDetails.phonenumber || !/^\d{10}$/.test(productDetails.phonenumber)) {
            newErrors.phonenumber = 'Please enter a valid phone number';
        }
        if (selectedFiles.length === 0) {
            newErrors.files = 'Please upload at least one image';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };


    //Check the state of user | user was authenticated or not 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user || null);
        });
        return () => unsubscribe(); // Clean up the listener on unmount
    }, []);


    //Handle the input that enterd by the user 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductDetails((prevDetails) => ({
            ...prevDetails, [name]: value,
        }))
    }
    // Handle image selection
    const handleFileSelect = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            // File type and size validation
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    files: 'File size should not exceed 5MB'
                }));
                return;
            }
            if (!file.type.startsWith('image/')) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    files: 'Please select a valid image file'
                }));
                return;
            }

            const newFiles = [...selectedFiles];
            newFiles[index] = file;
            setSelectedFiles(newFiles);

            const newImages = [...selectedImages];
            newImages[index] = URL.createObjectURL(file);
            setSelectedImages(newImages);

            // Clear file error if valid
            setErrors((prevErrors) => ({
                ...prevErrors,
                files: ''
            }));
        }
    };



    //upload image to cloudinary
    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
        formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );
            return response.data.secure_url;
        } catch (error) {
            console.error("Cloudinary Upload console.error!", error);
            throw error;
        }
    }

    //Handle form submission 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // If validation fails, do not proceed

        if (!user) {
            alert("Please login to post a product!");
            return;
        }

        try {
            const uploadedUrls = await Promise.all(
                selectedFiles.map((file) => uploadToCloudinary(file))
            );
            // Save the product details to Firebase as before
            await addDoc(collection(db, "products"), {
                userId: user.uid,
                title: productDetails.title,
                description: productDetails.description,
                category: productDetails.category,
                condition: productDetails.condition,
                price: productDetails.price,
                location: productDetails.location,
                phonenumber: productDetails.phonenumber,
                images: uploadedUrls,
                createdAt: serverTimestamp(),
            });
            // Reset form and state
            setProductDetails({
                title: "",
                description: "",
                category: "",
                condition: "",
                price: "",
                location: "",
                phonenumber: "",
            });
            setSelectedFiles([]);
            setSelectedImages([]);
            alert("Product added successfully");
        } catch (error) {
            console.error("Error adding product: ", error);
            alert("Error adding product. Please try again");
        }
    };



    return (
        <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm">
            <div className="max-w-5xl mx-auto px-4 py-5">
                <Link to="/" className="inline-block p-2 border-transparent border-2 hover:bg-gray-100 rounded-full hover:border-2 hover:border-slate-600 transition duration-200 ease-in-out">
                    <IoArrowBackSharp className='text-2xl' />
                </Link>
            </div>
        </header>
    
        <main className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">POST YOUR AD</h1>
    
            <form action="" onSubmit={handleSubmit}>
                {/* Product Title */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="text-sm text-gray-500 mb-1">Product Title*</div>
                    <div className="flex items-center">
                        <span className="text-gray-700"></span>
                        <input
                            type="text"
                            name="title"
                            value={productDetails.title}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                    </div>
                        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                </div>
    
                {/* Include Details */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">INCLUDE SOME DETAILS</h2>
    
                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Description*</label>
                        <textarea
                            name="description"
                            value={productDetails.description}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-10 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Features and reason for selling</span>
                            <span>0 / 4096</span>
                        </div>
                    </div>
                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Category*</label>
                        <input
                            type="text"
                            name="category"
                            value={productDetails.category}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                        {errors.category && <div className="text-red-500 text-sm">{errors.category}</div>}
                    </div>
    
                    {/* Condition*/}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Condition*</label>
                        <input
                            type="text"
                            name="condition"
                            value={productDetails.condition}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                        {errors.condition && <div className="text-red-500 text-sm">{errors.condition}</div>}
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>Eg : New, Like New, Good, Fair, or Used.</span>
                            <span>0 / 8</span>
                        </div>
                    </div>
                </div>
    
                {/* Set a Price */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">SET A PRICE</h2>
                    <label className="block text-sm text-gray-700 mb-1">Price*</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-sm border-2 border-r-0 border-custom-green bg-gray-50 text-gray-500">₹</span>
                        <input
                            type="text"
                            name="price"
                            value={productDetails.price}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border-2 rounded-r-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                    </div>
                        {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                </div>
    
                {/* Upload Photos */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">UPLOAD UP TO 20 PHOTOS</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {[...Array(20)].map((_, index) => (
                            <div
                                key={index}
                                className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 relative"
                            >
                                {/* Show preview or default icon */}
                                {selectedImages[index] ? (
                                    <img
                                        src={
                                            typeof selectedImages[index] === "string"
                                                ? selectedImages[index]
                                                : URL.createObjectURL(selectedImages[index]) // Preview file
                                        }
                                        alt={`selected-${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileSelect(e, index)}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                        <div className="text-red-500 text-sm mt-2">{errors.photos && "This field is mandatory. Add at least one image..."}</div>
                        <div className="text-red-500 text-sm mt-2">{errors.files && errors.files}</div>

                </div>
    
                {/* Confirm Location */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">CONFIRM YOUR LOCATION</h2>
                    <div className="flex gap-4 mb-4">
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">LIST</button>
                        <button className="px-4 py-2 text-gray-500">CURRENT LOCATION</button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 mb-1">Location*</label>
                        <input
                            type="text"
                            name="location"
                            value={productDetails.location}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border-2 rounded-sm focus:outline-none focus:border-green-400 border-custom-green"
                        />
                        {errors.location && <div className="text-red-500 text-sm">{errors.location}</div>}
                    </div>
                    
                </div>
    
                {/* Review Details */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">REVIEW YOUR DETAILS</h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl">
                            S
                        </div>
                        <div>
                            <div className="text-sm text-gray-500">Name</div>
                            <div>SELLER 1</div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm font-medium mb-2">Let's verify your account</div>
                        <div className="text-sm text-gray-500 mb-4">We will send you a confirmation code by SMS on the next step.</div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Mobile Phone Number*</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-sm border-2 border-r-0 border-custom-green bg-gray-50 text-gray-500">+91</span>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    value={productDetails.phonenumber}
                                    onChange={handleChange}
                                    className="w-full pl-8 pr-4 py-2 border-2 rounded-r-smsm focus:outline-none focus:border-green-400 border-custom-green"
                                />
                            </div>
                                {errors.phonenumber && <div className="text-red-500 text-sm">{errors.phonenumber}</div>}
                        </div>
                    </div>
                </div>
    
                <button type="submit" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 mb-8">
                    Post now
                </button>
            </form>
        </main>
        <Footer hideFirstFooter={true} />
    </div>
    
    );
};

export default PostAdForm;