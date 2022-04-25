import allProducts from "../data/AllProducts";

function Shop(props) {
    console.log(allProducts);

    return (
        <section className="shop">
            <div className="side-bar">
                <h1>Keyboards</h1>
            </div>
            <div className="shop-display">
                {allProducts.map((product) => (
                    <div className="product-card" key={product.name} id={product.name}>
                        <h2>{product.name}</h2>
                        <img alt="product-card" src={product.img}></img>
                        <div className="overlay">
                            <button type="button">DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Shop;