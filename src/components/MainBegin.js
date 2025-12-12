import "../App.css";

function MainBegin() {
    return (
        <div className="main_begin">
            <div className="main_begin_leftside main_begin_half hide">
                <img src="./img/image_with_men.png" alt="" />
            </div>
            <div className="main_begin_rightside main_begin_half">
                <div className="label">
                    <h1>THE BRAND</h1>
                    <h3>
                        OF LUXERIOUS <span>FASHION</span>
                    </h3>
                </div>
            </div>
            <div className="menu hidden">
                <button className="menu__close">
                    <img src="./img/close.svg" alt="" />
                </button>
                <h3>MENU</h3>

                <div className="item">
                    <h4>MAN</h4>
                    <h5>Accessories</h5>
                    <h5>Bags</h5>
                    <h5>Denim</h5>
                    <h5>T-Shirts</h5>
                </div>
                <div className="item">
                    <h4>WOMAN</h4>
                    <h5>Accessories</h5>
                    <h5>Jackets &amp;&nbsp;Coats</h5>
                    <h5>Polos</h5>
                    <h5>T-Shirts</h5>
                    <h5>Shirts</h5>
                </div>
                <div className="item">
                    <h4>KIDS</h4>
                    <h5>Accessories</h5>
                    <h5>Jackets &amp;&nbsp;Coats</h5>
                    <h5>Polos</h5>
                    <h5>T-Shirts</h5>
                    <h5>Shirts</h5>
                    <h5>Bags</h5>
                </div>
            </div>
        </div>
    );
}

export default MainBegin;
