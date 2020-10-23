import React from 'react';
import '../css/Header.css';
import watch from "../images/watch.jpg"
import civic from "../images/civicab.jpg"
import phone from "../images/iphone.jpg"
import lappy from "../images/lappya.jpg"



class Cards extends React.Component{
    render(){
        return(
            <div>
<div className="container">
    <h5 className="nn">Fresh recommendations</h5>
    <br/>
<div className="row bbs">
    <div className="col-xs-3 col-sm-3 col-md-3">
    <div className="card" >
        <img src={watch} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RS 3500</h5>
          <p className="card-text">Jaeger-LeCoultre. Water Resistance  Pulse </p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" >
        <img src={civic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 650000</h5>
          <p className="card-text">I am selling my honda civic 1997.</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">
      <div className="card" >
        <img src={phone} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 49,000</h5>
          <p className="card-text">iPhone 7 plus mint condition,Mint condition</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>

      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" >
        <img src={lappy} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 35,000</h5>
          <p className="card-text">Core i5 5th generation </p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
</div>
<br/>
<div className="row bbs">
    <div className="col-xs-3 col-sm-3 col-md-3">
    <div className="card" >
        <img src={watch} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">RS 3500</h5>
          <p className="card-text">Jaeger-LeCoultre. Water Resistance Pulse</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" >
        <img src={civic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 650000</h5>
          <p className="card-text">I am selling my honda civic 1997.</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">
      <div className="card" >
        <img src={phone} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 49,000</h5>
          <p className="card-text">iPhone 7 plus mint condition, Mint Condition</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>

      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" >
        <img src={lappy} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rs 35,000</h5>
          <p className="card-text">Core i5 5th generation </p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
      </div>
</div>
</div>
            </div>
        )
    }
}
export default Cards;