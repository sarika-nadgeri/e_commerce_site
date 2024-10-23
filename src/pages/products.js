import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader'; // Import the loader

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`);
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10 px-10">
      <span>
        <span className='font-bold'>
          Showing {((currentPage - 1) * productsPerPage) + 1} - {Math.min(currentPage * productsPerPage, totalProducts)}
        </span> Out of {totalProducts} Products
      </span>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <ClipLoader color="#123abc" loading={loading} size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg flex flex-col">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-lg text-gray-700">${product.price}</p>
              <Link to={`/products/${product.id}`} className="mt-4 inline-block bg-[navy] hover:bg-[#3232c7] text-white px-4 py-2 rounded-lg text-center">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-2 px-4 py-2 rounded-full bg-gray-300 text-gray-700 disabled:opacity-50 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Previous
        </button>

        <span className="mx-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-2 px-4 py-2 rounded-full bg-gray-300 text-gray-700 disabled:opacity-50 flex items-center"
        >
          Next
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Products;
