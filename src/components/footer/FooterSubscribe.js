import "../../App.css";

function FooterSubscribe() {
    return (
        <section className="footer__subscribe">
            <div className="fog">
                <div className="footer__subscribe-leftside">
                    <img src="./img/Intersect.png" alt="Intersect" />
                    <p>
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <span> a pulvinar purus condimentum“ </span>
                    </p>
                </div>
                <div className="footer__subscribe-rightside">
                    <h3>SUBSCRIBE</h3>
                    <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                    <form action="#">
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FooterSubscribe;
