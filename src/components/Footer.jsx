import "../Styles/Footer.css";

function FooterComp(){
    return(
        <div className="footer">
            <div className="footer-cont">
                <div className="subscribe">
                    <p className="about-sub">By The Way</p>
                    <h2>SUBSCRIBE TO OUR NEWSLETTERS</h2>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="about-footer">
                    <p className="about-sub">About Us</p>
                    <div className="footer-links">
                        <div>
                            <p>Tiimbooktu</p>
                            <p>Thought</p>
                            <p>Fotografie</p>
                            <p>Shop</p>
                        </div>
                        <div>
                            <p>About</p>
                            <p>Contact Us</p>
                        </div>
                    </div>

                    <div>
                        <p className="about-sub">Contact Us</p>
                        <div>
                            <p>+1 (001) 981-76-17</p>
                            <p>info@tiimbooktu</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default FooterComp;