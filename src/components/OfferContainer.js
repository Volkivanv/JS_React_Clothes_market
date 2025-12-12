import "../App.css";

function OfferContainer() {
    return (
        <div className="offer container">
            <div className="for_women standard_card">
                <div className="darkening">
                    <div>
                        <h2>30% OFF</h2>
                        <h3>FOR WOMEN</h3>
                    </div>
                </div>
            </div>
            <div className="for_men standard_card">
                <div className="darkening">
                    <div>
                        <h2>HOT DEAL</h2>
                        <h3>FOR MEN</h3>
                    </div>
                </div>
            </div>
            <div className="for_kids standard_card">
                <div className="darkening">
                    <div>
                        <h2>NEW ARRIVALS</h2>
                        <h3>FOR KIDS</h3>
                    </div>
                </div>
            </div>
            <div className="accesouies">
                <div className="darkening">
                    <div>
                        <h2>LUXIROUS &amp;&nbsp;TRENDY</h2>
                        <h3>ACCESORIES</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferContainer;
