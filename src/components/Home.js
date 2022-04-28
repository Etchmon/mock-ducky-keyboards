import { Link } from "react-router-dom";

function Home(props) {


    return (
        <header>
            <h1>Ducky</h1>
            <span>Capture the essence of typing</span>
            <Link to="shopping-cart/shop">
                <button type="button">
                    SHOP NOW
                </button>
            </Link>
        </header>
    )
}

export default Home;