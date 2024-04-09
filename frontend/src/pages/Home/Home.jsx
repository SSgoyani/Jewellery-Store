import {
  Banner,
  Footer,
  Loader,
  MetaData,
  Product,
} from "../../components/allComponents";
import { getProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Pagination from "react-js-pagination";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import "./Featureproduct.css";
import "./Home.css";
import { useParams } from "react-router-dom";
import Smallbanner from "../../components/layout/Smallbanner";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);

  const categories = ["Gold", "Silver", "Pletinum"];

  const dispatch = useDispatch();
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );
  const params = useParams();
  const keyword = params.keyword;
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category, rating));
  }, [dispatch, error, toast, keyword, currentPage, price, category, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = 4;
  if (keyword) {
    let proLen = products.length;
    if (proLen <= 8) {
      count = 0;
    }
  }
  return (
    <>
      <MetaData title={`Home`} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {currentPage === 1 && !keyword && <Banner />}

          {keyword ? (
            <div className="search__component">
              <div className="filter_both">
                <div className="catergory_box ">
                  <h4 className="">Categories</h4>

                  <ul className="">
                    {categories.map((category) => (
                      <li
                        style={{
                          cursor: "pointer",
                          listStyleType: "none",
                        }}
                        key={category}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rating_box">
                  <h4 className="">Ratings</h4>

                  <ul className="">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <li
                        style={{
                          cursor: "pointer",
                          listStyleType: "none",
                        }}
                        key={star}
                        onClick={() => setRating(star)}
                      >
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{
                              width: `${star * 20}%`,
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div className="section__p1 view__product_search_12"> */}

              {/* <div
                  to="/products"
                  className="view__product view__product_1"
                  style={{ marginTop: "20px" }}
                > */}
              <div id="product1">
                <div className="keyword_title">
                  <h2
                    className="title_for_trending_and_search"
                    style={{ color: "grey" }}
                  >
                    {keyword
                      ? `${keyword.toLocaleUpperCase()}`
                      : "Our Products"}
                  </h2>
                </div>
                <div className="pro__container2">
                  {products &&
                    products.map((product) => (
                      // <div className="product_product">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            // </div>
            // </div>
            <div id="product1" className="section__p1">
              <h2 style={{ color: "grey" }}>
                {keyword ? `${keyword.toLocaleUpperCase()}` : "Our Products"}
              </h2>
              <p></p>
              <div
                to="/products"
                className="view__product"
                style={{ marginTop: "20px" }}
              >
                <div className="pro__container col-lg-4">
                  {products &&
                    products.map((product) => (
                      <Product key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* {resPerPage <= count && ( */}
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={"Next"}
              prevPageText={"Prev"}
              firstPageText={"First"}
              lastPageText={"Last"}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
          {/* )} */}
          {/* <div className="customDesignButton">
            <button id="customDesign">
              <span class="icon">+</span>
              <span class="text">Custom Design</span>
            </button>
          </div> */}
          <Footer />
          {/* <Smallbanner /> */}
        </>
      )}
    </>
  );
};

export default Home;
