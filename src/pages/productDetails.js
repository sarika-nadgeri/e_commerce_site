import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowDown } from 'react-icons/fa'; // Font Awesome
import ClipLoader from 'react-spinners/ClipLoader'; // Import spinner

// Star Rating Component
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(rating); // Round the rating to the nearest integer

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${index < filledStars ? 'text-green-800' : 'text-gray-300'}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 .25 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
      <span className="ml-2">({rating})</span> {/* Displaying the rating value */}
    </div>
  );
};

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch product details based on the productId
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data); // Setting the product data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#123abc" loading={loading} size={50} /> {/* Spinner */}
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>; // Display if the product is not found
  }

  const originalPrice = (product.price / (1 - (product.discountPercentage / 100))).toFixed(2); // Calculate original price

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <img src={product.images[0]} alt={product.title} className="w-full h-auto mb-6" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 pl-4">
          <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
          <StarRating rating={product.rating} /> {/* Star Rating Component */}
          
          {product.discountPercentage && (
            <div className="flex items-center py-2">
              <FaArrowDown className="text-green-800 text-2xl"/> {/* Downward Arrow */}
              <span className="ml-1 text-green-800 text-2xl">({product.discountPercentage}%)</span> {/* Discount percentage */}
              <p className="text-2xl text-red-600 line-through mr-2 ml-2">${originalPrice}</p> {/* Original Price */}
              <span className="flex items-center text-2xl font-semibold text-black">
                <span className="mr-1">${product.price}</span>
              </span>
            </div>
          )}
          <p className='text-xl'><span className='font-bold text-gray-700'>Brand:</span> {product.brand}</p>
          <p className='text-xl'><span className='font-bold text-gray-700'>Category:</span> {product.category}</p>
          <p className='text-lg pt-5'>{product.description}</p>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-6">
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-5">
              ADD TO CART
            </button>
            <button className="bg-[navy] hover:bg-[#3232c7] text-white font-bold py-3 px-5">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
