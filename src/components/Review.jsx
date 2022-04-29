import React from 'react';
function Review() {
    return (
        <section className="review" id="review">

    <h1 className="heading"> our customers <span>reviews</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="images/kairat.jpg" alt=""/>
            <h3>Kairat Nurtas</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <p>Very good establishment, we were for the first time on the recommendation of friends. The food is delicious, the interior and the service is excellent. I can recommend this place to visit.</p>
        </div>
        <div className="box">
            <img src="images/toresh.jpg" alt=""/>
            <h3>Toregali Toreali</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <p>Good evening! They noted another friend's company, I liked everything, the service is at the highest level, everything in the kitchen is very tasty ... I plan to celebrate my friend here, I advise everyone, you will not regret it ...</p>
        </div>
        <div className="box">
            <img src="images/erke.jpg" alt=""/>
            <h3>Erke Esmakhan</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <p>The place is wonderful, the theme of each booth is just super, wherever you come from KZ there is a booth with the name of your city and the feeling that you never leave home, the sound is gorgeous as if performing at a concert, we were sitting in the Atyrau booth, everything went great</p>
        </div>

    </div>

</section>
    );
}

export default Review;
