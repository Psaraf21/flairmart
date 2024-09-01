import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import "../style/Product.css"
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);

        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        if (!response2.ok) throw new Error('Similar products not found');
        const data2 = await response2.json();
        setSimilarProducts(data2);
      } catch (error) {
        console.error(error);
        // Optionally, set an error state and display an error message
      } finally {
        setLoading(false);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 py-3">
          <Skeleton height={200} width={200} />
        </div>
        <div className="col-md-6 py-5">
          <Skeleton height={30} width={250} />
          <Skeleton height={90} />
          <Skeleton height={40} width={70} />
          <Skeleton height={50} width={110} />
          <Skeleton height={120} />
          <Skeleton height={40} width={110} inline={true} />
          <Skeleton className="mx-3" height={40} width={110} />
        </div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        </div>
        <div className="col-md-6 py-5">
          <h4 className="text-uppercase text-muted small-text">{product.category}</h4>
          <h1 className="display-6 small-text">{product.title}</h1>
          <p className="lead small-text">
            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4 small-text">${product.price}</h3>
          <p className="lead small-text">{product.description}</p>
          <button
            className="btn custom-button "
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn mx-3 custom2-button">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="my-4 py-4">
      <div className="d-flex">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="mx-4">
            <Skeleton height={300} width={200} />
          </div>
        ))}
      </div>
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4">
      <div className="d-flex">
        {similarProducts.map((item) => (
          <div key={item.id} className="card mx-4 text-center">
            <img
              className="card-img-top p-3"
              src={item.image}
              alt={item.title}
              style={{ height: '200px', width: 'auto' }}
            />
            <div className="card-body">
              <h5 className="card-title small-text">{item.title.substring(0, 15)}...</h5>
              <Link to={`/product/${item.id}`} className="btn  m-1 custom-button">
                Buy Now
              </Link>
              <button
                className="btn  m-1 custom-button"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="small-text">You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
