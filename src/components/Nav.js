import { Link } from "react-router-dom";
import logo from "./../styles/images/homeLogo_white.svg";
import cart from "./../styles/images/cart.png";

function Nav(props) {


    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="logo" className="logo"></img>
            </Link>
            <div>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/shop">
                    <span>Shop</span>
                </Link>
                <img src={cart} alt="cart" onClick={() => props.onClick()}></img>
                <span>{props.user.name}</span>
            </div>
        </nav>
    )
}

export default Nav;