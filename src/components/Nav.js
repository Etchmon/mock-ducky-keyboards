import { Link } from "react-router-dom";
import logo from "./../styles/images/homeLogo_white.svg";

function Nav(props) {


    return (
        <nav>
            {/* <Link to="/">
                <img src={logo} alt="logo"></img>
            </Link> */}
            <img src={logo} alt="logo"></img>
        </nav>
    )
}

export default Nav;