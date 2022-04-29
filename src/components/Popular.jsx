import React from 'react';
function Popular() {
    return (
        <section className="popular" id="popular">

    <h1 className="heading"> most <span>popular</span> foods </h1>

    <div className="box-container">

        <div className="box">
            <span className="price"> 2000 TG </span>
            <img src="images/lagman.jpg" alt=""/>
            <h3>Lagman</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>
        <div className="box">
            <span className="price"> 2500 TG </span>
            <img src="images/манты.jpg" alt=""/>
            <h3>Manty</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>
        <div className="box">
            <span className="price"> 1000 TG </span>
            <img src="images/плов.jpg" alt=""/>
            <h3>Palau</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>
        <div className="box">
            <span className="price"> 1200 TG </span>
            <img src="images/пицца.jpg" alt=""/>
            <h3>Pizza</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>
        <div className="box">
            <span className="price"> 3000 TG </span>
            <img src="images/pasta.jpg" alt=""/>
            <h3>Pasta</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>
        <div className="box">
            <span className="price"> 1500 TG </span>
            <img src="images/jent.jpg" alt=""/>
            <h3>Jent</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="/#" className="btn">order now</a>
        </div>

    </div>

</section>
    );
}

export default Popular;
