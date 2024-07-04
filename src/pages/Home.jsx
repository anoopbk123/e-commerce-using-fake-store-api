import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axiosInstance from "../axios/axiosInstance";
import ProductCard from "../components/ProductCard";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Home({productSearch}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get("products");
      if (res.status === 200) {
        setProducts(res.data);
        // console.log('products', res.data)
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const fetchCategories = async()=>{
    try {
      const res = await axiosInstance.get("products/categories");
      if (res.status === 200) {
        setCategories(res.data);
        // console.log('categories', res.data)
      }
    } catch (err) {
      alert(err.message);
    }
  }
  const handleCategoryChange = (e)=>{
    setSearchParams({
      category:e.target.value
    })
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <div>
      <Layout>
        <div className="mt-3 d-flex flex-wrap justify-content-evenly gap-2">
          {products.length ? (
            <>
              <Form.Select aria-label="Default select example" onChange={handleCategoryChange}>
                <option value={''}>Categories(All)</option>
                {
                  categories.length&&categories.map((value)=>(
                    <option key={value} value={value}>{value}</option>
                  ))
                }
              </Form.Select>
              {products.filter((product)=>{
                return searchParams.get('category')?product.category === searchParams.get('category'):true
              }).filter((product)=>{
                if(productSearch){
                    const productTitle = product.title
                    const loverTitle = productTitle.toLowerCase()
                    const search = productSearch.toLowerCase()
                    const searchLower = search.toLowerCase()

                    return loverTitle.includes(searchLower)
                }
                else{
                  return true
                }
              }).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          ) : (
            <h2 className="text-center">Loading.....</h2>
          )}
        </div>
      </Layout>
    </div>
  );
}
