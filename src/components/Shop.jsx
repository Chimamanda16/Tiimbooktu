import "../Styles/Shop.css";

function ShopComp(){
    const shopData = [
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
        {
            img: "/shop-img.png",
            name: "AFRICOASTER",
            price: 30
        },
    ]
    return(
        <div className="shop">
            <h2>THE SHOP</h2>
            <div className="shop-cont">
                {shopData.map((data, index) => {
                    return(
                        <div className="artwork" key={index}>
                            <img src={data.img} alt="" />
                            <p>{data.name}</p>
                            <p>${data.price}</p>
                            <button>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
            <button className="shop-btn">View All</button>
        </div>
    )
}

export default ShopComp;