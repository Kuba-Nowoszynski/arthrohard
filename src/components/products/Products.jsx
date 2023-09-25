import { useContext, useEffect, useState } from "react";
import { TextContext } from "../../contexts/TextContext";
import axios from "axios";

import closeBtn from "@/assets/other/close-btn.png";
import "./products-styles.scss";

const Products = () => {
  //Get text content from context
  const {
    text: { products: text },
  } = useContext(TextContext);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, SetPageSize] = useState("20");
  const [loading, setLoading] = useState(false);

  // State for controlling the popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to fetch products from the API
  const fetchProducts = async (pageNumber, pageSize) => {
    try {
      const response = await axios.get(
        `https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );
      const newProducts = response.data.data;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage(pageNumber);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  // Initial load of products
  useEffect(() => {
    fetchProducts(1);
  }, []);

  // Add a scroll event listener to load more products when near the bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        setLoading(true);
        fetchProducts(page + 1, pageSize);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, pageSize, loading]);

  // Handle select change
  const handlePageSizeChange = (event) => {
    const newSize = event.target.value;
    SetPageSize(newSize);
  };

  // Function to open the popup
  const openPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedProduct(null);
    setShowPopup(false);
  };

  return (
    <section className="products mb-5" id="section3">
      <div className="select-container my-5 mx-auto d-flex justify-content-center align-items-center ">
        <h4 className="">{text.header} </h4>
        <select
          className="text-center py-2 "
          aria-label="Liczba produktów"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
      </div>

      <div className="products-list row p-0 g-0 mt-5 d-flex justify-content-center gap-5">
        {products.map((product, index) => (
          <div
            className="d-flex align-items-center justify-content-center "
            key={product.name + index}
            onClick={() => openPopup(product)} // Open popup when clicked
          >
            ID: {product.id}
          </div>
        ))}
        {loading && <p>{text.loading}...</p>}
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content d-flex flex-column text-start">
            {/* Display product details */}
            <div className="d-flex justify-content-between align-items-center">
              <h5>ID {selectedProduct.id}</h5>
              <button onClick={closePopup}>
                <img src={closeBtn} alt="Przycisk zamknięcia" />
              </button>
            </div>
            <h5 className="py-5">
              {text.name}: {selectedProduct.name}
            </h5>
            <h5>
              {text.value}: {selectedProduct.value}
            </h5>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
