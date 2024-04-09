import "./Header.css";
import { Link } from "react-router-dom";
import { User, Loader, Search } from "../../allComponents";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import jewelleryImg from '../../../images/jsl1.png';

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    // header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector(state => state.cart);
 
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <header className="header">
          <div className="scontainer flex">
            <div className="logo">
              <Link to="/">
                <img
                  src={jewelleryImg}
                  alt="Jewellery Store"
                  style={{ height: "70px", width: "100px" }}
                />
              </Link>
            </div>
            <Search />
            <div className="account flexCenter">
            <Link to="/shop" style={{marginRight: '30px', color: 'black'}}>
                <div className="card">
                  <BsShop className="cardIcon" />
                </div>
              </Link>
              <Link to="/cart" style={{ color: 'black'}}>
                <div className="card">
                  <BiShoppingBag className="cardIcon" />
                  {cartItems.length === 0 ? '' : <span className="flexCenter">{cartItems.length}</span>}
                  
                </div>
              </Link>
              <User />
              {/* <Link to="/me">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link> */}

            </div>
          </div>
        </header>
       {/* )}  */}
    </>
  );
};

export default Header;
