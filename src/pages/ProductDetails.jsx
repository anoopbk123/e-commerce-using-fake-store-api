import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import { Button } from "react-bootstrap";
import { addToCart } from "../utils/cart";

export default function ProductDetails() {
  const productId = useParams().id;
  const [productDetails, setProductDetails] = useState(null);
  const fetchProductDetails = async () => {
    try {
      const res = await axiosInstance.get(`products/${productId}`);
      if (res.status === 200) {
        setProductDetails(res.data);
        console.log("product details", res.data);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    fetchProductDetails();
  }, []);
  return (
    <Layout>
      {productDetails ? (
        <>
          <div className="card mb-3 mt-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img
                  src={productDetails.image}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{productDetails.title}</h5>
                  <p className="card-text">{productDetails.description}</p>
                  <p className="card-text fw-bold">
                    Price: ${productDetails.price}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Category: {productDetails.category}
                    </small>
                  </p>
                  <p className="card-text">
                    <Button
                      variant="warning"
                      onClick={() => {
                        addToCart(productDetails);
                      }}
                    >
                      Add to cart
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-center m-5">Loading...</h2>
      )}
    </Layout>
  );
}
