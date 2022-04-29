import React, { Component } from 'react'
class Order extends Component{
    constructor(){
        super()
        this.state={
            email: '@mail'
        }
    }
    render(){
        if(this.props.name==="IITU") this.setState({email:"@iitu.edu.kz"})
    return (
        <section className="order" id="order">

    <h1 className="heading"> <span>order</span> now </h1>

    <div className="row">
        
        <div className="image">
            <img src="images/dicaprio.jpg" alt=""/>
        </div>

        <form action="">

            <div className="inputBox">
                <input type="text" placeholder="name" value={this.props.name}/>
                <input type="email" placeholder="email" value={this.state.email}/>
            </div>

            <div className="inputBox">
                <input type="number" placeholder="number"/>
                <input type="text" placeholder="food name"/>
            </div>

            <textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="order now" className="btn"/>

        </form>

    </div>

</section>
    );
    }
}

export default Order;
