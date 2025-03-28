import "../Styles/Fotografie.css";

function FotografieComp(){
    const images = [
        { src: "/thought-card1.png", text: "Tattoo" },
        { src: "/thought-card2.png", text: "Skeleton. Cloak. Scythe" },
        { src: "/thought-card3.png", text: "Knowledge" },
        { src: "/thought-card4.png", text: "Illegal" },
      ];
    return(
        <div className="gallery-cont">
            <h2 className="gallery-title">Fotografie</h2>
            <div className="gallery">
                {images.map((img, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={img.src} alt={`Thought Card ${index}`} />
                        <p>{img.text}</p>
                    </div>
                ))}
            </div>
            <button className="gallery-btn">View all</button>
        </div>
    )
}

export default FotografieComp;