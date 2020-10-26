import React from 'react';
import '../css/Header.css';
import watch from "../images/watch.jpg"
import civic from "../images/civicab.jpg"
import phone from "../images/iphone.jpg"
import lappy from "../images/lappya.jpg"
import tax from "../images/tax.png"
import r1 from "../images/r1.png"
import gym from "../images/gym.png"
import map from "../images/map.png"
import mobile from "../images/mobile.png"
import bench from "../images/bench.png"




class Cards extends React.Component{
    render(){
        return(
            <div>
<div className="container">
    <h5 className="nn">Fresh recommendations</h5>
    <br/>
<div className="row bbs">
    <div className="col-xs-3 col-sm-3 col-md-3">
    <div className="card" style={{width: '14rem'}}>
        <img src={civic} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
          
          <h5>RS 5,00000</h5>
          <p className="card-text">Civic For Sale 8/10 Condition</p>
        </div>
      </div>      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" style={{width: '14rem'}}>
        <img src={watch} className="card-img-top img-fluid pt-1 nns" alt="..." />
        <div className="card-body">
          <h5>RS 7,000</h5>
          <p className="card-text">Original Watch Water Proof, </p>        </div>
      </div> 
        </div>
      <div className="col-xs-3 col-sm-3 col-md-3">
      <div className="card" style={{width: '14rem'}}>
        <img src={lappy} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS 35,000</h5>
        <p className="card-text">Core i7 7th generation </p>        
          
        </div>
      </div> 
      
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" style={{width: '14rem'}}>
        <img src={r1} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS 85,000</h5>

        <p className="card-text">Yamaha YZF R1 Skull Edition </p>        

        </div>
      </div> 
            </div>
</div>
<br/>
<div className="row bbs">
    <div className="col-xs-3 col-sm-3 col-md-3">
    <div className="card" style={{width: '14rem'}}>
        <img src={gym} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS  325,000</h5>

<p className="card-text">Whole of GYM Equipments </p>   

        </div>
      </div> 
        </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" style={{width: '14rem'}}>
        <img src={map} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS  2,350,000</h5>

<p className="card-text">5 Marla plot in DHA T sector </p>   

        </div>
      </div> 
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">
      <div className="card" style={{width: '14rem'}}>
        <img src={bench} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS 21,000</h5>

<p className="card-text">Garden outdoor bench, 4 feet size </p>   


        </div>
      </div> 
      
      </div>
      <div className="col-xs-3 col-sm-3 col-md-3">

      <div className="card" style={{width: '14rem'}}>
        <img src={mobile} className="card-img-top img-fluid nns" alt="..." />
        <div className="card-body">
        <h5>RS 95,000</h5>

<p className="card-text">iPhone xs max PTA approved, Single Sim </p>   


        </div>
      </div> 
      </div>
</div>
</div>
<br />
<br />
<div className="tax">
<img src={tax} alt=""tax image className="img-fluid"/>
</div>
            </div>
            
        )
    }
}
export default Cards;